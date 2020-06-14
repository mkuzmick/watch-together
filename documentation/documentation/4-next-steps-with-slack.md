# NEXT STEPS WITH SLACK

these are notes from MK in lieu of a video tutorial because I can't record right now, but do want to do a couple of things to the app.

everything here can also be learned by systematically going through the [node slack SDK docs](https://slack.dev/node-slack-sdk/), and they are probably more accurate. This is designed to get you up and running on THIS particular project ASAP. If you get lost or confused, please do look for additional info in those docs and try to contribute to this how to by improving our descriptions of what to do.


## CREATING A BOT TOKEN

1. click the "OAuth & Permissions" tab on the left of the api page (having logged in and selected your app).
2. copy the Bot User OAuth Access Token and add it to your `.env` file. You can use whatever variable name you like, as long as you remember to reuse it when you need it. We are going to enter `SLACK_BOT_TOKEN=xoxb-XXXXXXXXX-XXXXXXXXXXXXX-XXXXXXXXXXXXXXX`.
3. under "Scopes" you will enable your app to perform a variety of actions. For this tutorial, click "add OAuth scope" and be sure to enable `chat:write` and `reactions:read` and `channels:history`. In general, you want to request the narrowest set of scopes you can, because this obviously safe than permitting your app to do anything and everything to your users' slack.
4. you'll then need to reinstall the app to the development slack space . . . go ahead and do that, and choose a channel you want the app to be able to post to (it still prompts you to do this even if you've selected one previously--you can select the same channel again
5. while you're working with your .env file, you could go ahead and add the other secret keys from the basic information page to your .env file (SLACK_SIGNING_SECRET, etc).  We'll mention each as it becomes relevant, so you'll get another shot at each if you don't do it now.


## USING THE WEB-API

The webhook you used earlier in this tutorial is great for sending a message to a specific channel, but to send messages to multiple different channels--and to get other interesting data in and out of slack, we'll need to use the [Slack Web API](https://slack.dev/node-slack-sdk/web-api). Here are the steps:

1. install the package with `npm install @slack/web-api`
2. initialize the client with the following code:
    ```
    const { WebClient } = require('@slack/web-api');
    const web = new WebClient(process.env.SLACK_BOT_TOKEN);
    ```
    if you are continuing on from the earlier tutorials, we'll be putting this at the top of the file that holds all our slack routes (`/routes/slack.js`).
3. then let's add a new route and call a method. You should really try a bunch of them, but to get us started let's list all the channels our bot has access to at `/slack/channels`. In `slack.js` add a new route like so
    ```
    router.get('/channels', async function(req, res, next){
      const result = await web.conversations.list({});
      res.json(result);
    })
    ```
    The `async function` lets you use `await` rather than the callbacks that have been more typical of node code in the past. When you go to `https://localhost:3000/slack/channels` you should now see a bunch of json with your channels in it.
4. choose another method of the web api (they're all [here](https://api.slack.com/methods)) and write another route for it. Just make sure that you've asked for all the relevant scopes you need in the OAuth & Permissions section.

**note: you'll need to make sure that you are configuring your environment variables with dotenv BEFORE you require the routes that reference those environment variables**

## USING THE EVENTS API

`@slack/events-api`
[the slack events API](https://slack.dev/node-slack-sdk/events-api)


### OPTIONAL: USE NGROK TO SPEED THINGS UP

One challenge you'll face when developing is that Slack is going to want to send stuff to your app, and it's going to expect it to be running on some server out there on the internets. But as you develop your express app, it's just running on your local machine, and you can't tell Slack to contact `localhost:3000`, because this URL only works for you, on your machine (and it's a good thing too, otherwise everyone out there on the web could mess with your stuff).

But there is a service that can act as a intermediary for us, receiving messages from Slack and passing them on to our machine: [ngrok](https://dashboard.ngrok.com/get-started/setup). So . . .

1. download ngrok [here](https://dashboard.ngrok.com/get-started/setup)
2. get to the folder where you want to store it and then unzip it with `unzip /path/to/ngrok.zip`
3.
