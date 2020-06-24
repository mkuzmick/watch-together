i'm changing this from within Stackedit.io


# NEXT STEPS WITH SLACK

these are notes from MK in lieu of a video tutorial because I can't record right now, but do want to do a couple of things to the app.

everything here can also be learned by systematically going through the [node slack SDK docs](https://slack.dev/node-slack-sdk/), and they are probably more accurate. This is designed to get you up and running on THIS particular project ASAP. If you get lost or confused, please do look for additional info in those docs and try to contribute to this how to by improving our descriptions of what to do.


## CREATING A BOT TOKEN

1. click the "OAuth & Permissions" tab on the left of the api page (having logged in and selected your app).
2. copy the Bot User OAuth Access Token and add it to your `.env` file. You can use whatever variable name you like, as long as you remember to reuse it when you need it. We are going to enter `SLACK_BOT_TOKEN=xoxb-XXXXXXXXX-XXXXXXXXXXXXX-XXXXXXXXXXXXXXX`.
3. under "Scopes" you will enable your app to perform a variety of actions. For this tutorial, click "add OAuth scope" under the first heading "Bot Token Scopes" and be sure to enable `chat:write` and `reactions:read` and `channels:history` and `channels:read`. In general, you want to request the narrowest set of scopes you can, because this obviously safe than permitting your app to do anything and everything to your users' slack.
4. you'll then need to reinstall the app to the development slack space. there should be a pop-up on the top of the screen letting you know you need to reinstall - click that. choose a channel you want the app to be able to post to (it still prompts you to do this even if you've selected one previously--you can select the same channel again
5. while you're working with your .env file, you could go ahead and add the other secret keys from the basic information page to your .env file (SLACK_SIGNING_SECRET, etc).  We'll mention each as it becomes relevant, so you'll get another shot at each if you don't do it now.


## USING THE WEB-API

The webhook you used earlier in this tutorial is great for sending a message to a specific channel, but to send messages to multiple different channels--and to get other interesting data in and out of slack, we'll need to use the [Slack Web API](https://slack.dev/node-slack-sdk/web-api). Here are the steps:

1. install the package with `npm install @slack/web-api`
2. initialize the client with the following code:
    ```
    const { WebClient } = require('@slack/web-api');
    const web = new WebClient(process.env.SLACK_BOT_TOKEN);
    ```
    if you are continuing on from the earlier tutorials, we'll be putting this at the top of the file that holds all our slack routes (`/routes/slack.js`). **Note**: make sure that you are configuring your environment variables with dotenv BEFORE you require the routes that reference those environment variables - check this out in `/app.js`.
3. then let's add a new route and call a method. You should really try a bunch of them, but to get us started let's list all the channels our bot has access to at `/slack/channels`. In `slack.js` add a new route like so
    ```
    router.get('/channels', async function(req, res, next){
      const result = await web.conversations.list({});
      res.json(result);
    })
    ```
    The `async function` lets you use `await` rather than the callbacks that have been more typical of node code in the past. When you go to `https://localhost:3000/slack/channels` you should now see a bunch of json with your channels in it.
4. choose another method of the web api (they're all [here](https://api.slack.com/methods)) and write another route for it. Just make sure that you've asked for all the relevant scopes you need in the OAuth & Permissions section.



## USING THE EVENTS API

Next up we're going to start subscribing to some of the events that happen in our Slack (like when someone adds an emoji, or when a file gets uploaded, etc.) And to do this we're going to use the [the slack events API](https://slack.dev/node-slack-sdk/events-api). To install it, type `npm i @slack/events-api`. Then we're going to click on the events tab, enable events, and give Slack a URL to send news of these events to . . . but here we need to decide whether to give it the URL of our Heroku app (which will force us to push all our changes to Heroku and wait for the app to start before we can test it) or to use a tool that lets us develop on our local machine and have Slack send stuff direct to that local machine. If this sounds like something you want to try, do the next section. If not, skip it . . .


### OPTIONAL: USE NGROK TO SPEED THINGS UP

One challenge you'll face when developing is that Slack is going to want to send stuff to your app, and it's going to expect it to be running on some server out there on the internets. But as you develop your express app, it's just running on your local machine, and you can't tell Slack to contact `localhost:3000`, because this URL only works for you, on your machine (and it's a good thing too, otherwise everyone out there on the web could mess with your stuff).

But there is a service that can act as a intermediary for us, receiving messages from Slack and passing them on to our machine: [ngrok](https://dashboard.ngrok.com/get-started/setup). So . . .

1. download ngrok [here](https://dashboard.ngrok.com/get-started/setup)
2. get to the folder where you want to store it and then unzip it with `unzip /path/to/ngrok.zip`
3. start it up with `./ngrok http 3000` (when in the directory you put your ngrok in)
4. make a note of the URL ngrok offers you so that you can add that on the slack API pages.

### SUBSCRIBING TO EVENTS


6. Slack also provides an npm package for events, and it actually takes care of verifying that the requests you receive are actually coming from slack (we'll have to do that manually when we write our slash command). To use this package, install it with `npm i @slack/events-api`.
7. then we are going to add a new route to our `app.js` file, but what's weird is that we need to add it ABOVE all the other `app.use` lines (because slack wants the raw rather than parsed requests, precisely for that verification step mentioned in the last step--if you are really interested, you'll have a chance to learn more later, when we'll need to UNparse the requests that hit some of our other routes). So above all of the `app.use` lines, add
    ```
    var slackEventsRouter = require('./routes/slack-events')
    app.use('/slack-events', slackEventsRouter);
    ```
8. then you'll need to create the file `/routes/slack-events.js` and add in the following code:
    ```
    var express = require('express');
    var router = express.Router();
    const { createEventAdapter } = require('@slack/events-api');
    const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
    const slackEvents = createEventAdapter(slackSigningSecret);

    router.post('/', slackEvents.requestListener());

    slackEvents.on('message', (event)=>{
      console.log(`Received event: \n\n${JSON.stringify(event, null, 4)}\n\n`);
    })

    slackEvents.on('reaction_added', (event)=>{
      console.log(`Received event: \n\n${JSON.stringify(event, null, 4)}\n\n`);
    })

    module.exports = router;
    ```
    1. now let's do what we need to do on the slack api interface side of things. First, enable events by clicking the "on/off" button on the "Event Subscriptions" page of the API
    2. for your "Request URL", use either the URL for your heroku app OR the ngrok URL you got if you chose to go that route, then add a path that corresponds to the code you'll write in your express app.  Something like `https://my-app.herokuapp.com/slack-events` would make sense (or `https://g9z123407gh5.ngrok.io/slack-events`).
    3. now you'll need to commit your changes and push them to heroku if you went that route, but if you're using ngrok you SHOULD be able to try the url again on the Slack Event Subscriptions page and get it to work.
    5. now subscribe to a couple of events--in bot events, for instance, you might subscribe to `reaction_added` and `message.im`. Once you do this, you SHOULD see news of these events in your server logs (if you're using heroku, you'll need to enter `heroku logs --tail`). Go ahead and give this a test by adding your bot to a channel and then emoji-ing some messages, or DMing your bot. You should see the json for the Slack Event in your terminal, and you may get some good ideas about how you can use the data there in your app.
    6. now you'll need to go back to the Events page in the api.slack.com interface for your app and redirect events to the `/slack-events` route. You should now see server logs when you perform the events you're listening for. (NOTE: let's JUST do the version with the `@slack/events-api` package--the false start is lame.)

## CREATING A SLASH COMMAND

NOTE: This may ultimately come BEFORE the preceding.

<<<<<<< HEAD
Now that we have the Web API and Events set up.
=======
<<<<<<< HEAD
=======
### 
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI5MTI2MDQyMF19
-->
>>>>>>> 54f769acb0fef168dcf5b06627b147b2be2f4cd6
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTUxNDYwMzU1Nyw1NjQ1MjQ1ODQsLTM1MT
I4MDg5MywtMjEyMTc0OTgwNV19
-->
>>>>>>> 68806180c587ff61e3a1e657014cc05370cd077f
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMyMDM4OTQwMiw5MDExOTIxOTBdfQ==
-->