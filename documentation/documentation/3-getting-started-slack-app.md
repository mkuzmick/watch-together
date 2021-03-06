# Getting started with a Slack App
1. Navigate back to Atom. In watch-together, make a new file in the `routes` folder by duplicating `index.js`. You can call the new file `slack.js`.
2. In the code of the file, change the value of `title` from `Watch Together` to `Slack Tests Go Here`. Note: **do not change** the `index` after `res.render` to `slack` as the `index` is referring to the view `index.ejs`, and we do not yet have a `slack.ejs` view.
3. In order for someone to actually be able to get to this page, open the file `app.js`. We need to require a new route in, and then we need to tell the app when we should use that file, which routes that file should handle. Looking at the required variables towards the top of this file, we're going to do something that is exactly parallel to what they do with users, so copy the line of code that refers to users and paste it right underneath. Change the two `users`  in your new line of code to `slack`.
4. Lower down in this same file, copy the line of code that begins with `app.use` and is talking again about the users router. Copy this line of code and paste it right underneath. Again, replace the two `users` in that line with `slack`. Save your work.
5. Head back to over chrome and open `localhost:3000/slack` to make sure it worked.
6. Next, go back to the route file `slack.js`. Copy the first route and paste it below, with atleast a line of blank space in between them. We will now edit the one you just pasted.
7. We will first add in an additional parameter. In `router.get('/'`, we will change the `/` to read `/word/:myword`.
8. . Next, press enter after the curly bracket at the end of the first line of code. On the new line, we will log something. Begin typing "log" and then hit enter when "log" comes up below. The code on this line should end up as ``console.log(`the word is ${req.params.myword}`);``.
9. Change the value of title to ``{ title: `Word=${req.params.myword}` })``. Now save.
10. In your internet browser, navigate to `http://localhost:3000/slack/word/testing`. Your word should be showing up the webpage. 

### Now we haven a way of getting some arbitrary input into this app. It's not the most elegant way, but at least one word from the decision maker is going into this app, and then we can do something with that word. So what we want to do next is learn how to send that word to a slack channel.

1. Google `Slack API`, which will bring you to [https://api.slack.com/](https://api.slack.com/). 
2. In the top right hand corner of the page, click on "Your Apps".
3. Click the green "Create an App" button. For name, type `watch-together-dd` (use your own initials!). Make sure you are signed in and creating it in the Learning Lab Development Team workspace (learninglab-dev.slack.com). Then click "Create App".

### The first thing we will do is the simplest: Incoming Webhooks.

1. Still in your internet browser where you app was just created, click "Incoming Webhooks" in the left menu.
2. Click where it says "Off" in gray to make it says "On" in green.
4. Click the bottom button that says "Add New Webhook to Workspace".
5. Next, you will be asked in which channel should your app post to. You can select the `#app-tests` channel.
6. Now, copy the code underneath the header that reads "Sample curl request to post to a channel." It will look something like  `curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' YOUR_WEBHOOK_URL_HERE`.
7. Navigate to terminal. Open a new window (command+N) and paste the code here. Hit enter.
8. Open the `#app-tests` channel in the Learning Lab Development slack. You should see a "Hello, World!" message from your app!

### Next, we will learn how to use the hook to send any word we want into slack.
*This will give us a way of sending a single message to a single channel. This is not infinitely useful, but is definitely useful for some things. The media team uses this for their file renaming scripts, for example - we want to be notified that files are being renamed, so we fire off this slack webhook. When you don't need to listen to a response back from slack, when you don't need to perform any additional operations, when this type of information always goes to this same channel (as opposed to directing it to specific users or channels) this is totally fine. It's more secure than all those other things, because once you have permission to access different users and send things to their private channels, then you can get into more trouble. Here, you're just getting permission to send to one single channel on slack.*

1. Navigate back to `slack.js` in Atom.  Hit enter after ``console.log(`the word is ${req.params.myword}`);`` and type `//send that word to slack` on the new line.
2. Open [https://slack.dev/node-slack-sdk/](https://slack.dev/node-slack-sdk/) in your internet browser.
3. Click "Incoming Webhooks" in the left menu. 
4. Copy the "Installation" code `
npm install @slack/webhook
` to install the npm package. Note: do not copy the `$` - just copy the code that is after that and paste it into your terminal (making sure you are in the `watch-together` folder) Hit enter.
6. Go back to the "Incoming Webhooks" page in your internet browser. Look at the code under the heading "Initialize the webhook". Copy the second line of code that starts with `const` ( `
const url = process.env.SLACK_WEBHOOK_URL;
`). 
7. Now, go back to Atom and open `slack.js`. Hit enter twice after the second line of code on the very top of the page, and paste the line of copied code. Hit enter again a few times to leave a couple empty lines. Hit save.
8. Navigate back to your internet browser and copy the first line of code underneath the heading "Initialize the webhook". The copied code should be `
const { IncomingWebhook } = require('@slack/webhook');
`. This is called destructuring, or webhook.
9. Back in Atom, paste the new copied code above the previous one you just added. Feel free to hit enter at the beginning of your new line to keep your new additions separate.
10. In line 5, change `const url` to `const webhookUrl` . **marlon i didn't write notes on the other option you showed first, with graying out one line and adding two new lines below..you ended up going back to this so that's what i've noted. but if you want me to write out those steps,  maybe we can talk about them more, because i was confused on what was happening.**
11. Go back to your internet browser and now grab the third line of code underneath the heading "Initialize the webhook." The third line of code is under the grayed out heading "// Initialize" : `
const webhook = new IncomingWebhook(url);
`. Back in Atom, paste this copied code in a new line underneath the other two `const` lines of code. Hit save.
12. You can simplify this code by copying `process.env.SLACK_WEBHOOK_URL` in the second line of code, and pasting it in the third line of code, inside the parentheses (replacing `url`). 
13. Delete the second line of `const` code. Now grab the newly formulated line of code
`const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);` and paste it in a new line after the first `{` in the `router.get('/word/:myword'` section, creating it when this function gets fired.

### To send a notification:
14. Back in your internet browser, look for the heading "Send a notification". Under the smaller, grayed out heading `// Send the notification`, copy the code that begins with 
`(async`.
15. Navigate back to `slack.js` in Atom.  Hit enter a few times at the beginning of the last line of code to make space around line 18. Type in the code `async function sendMyMessage (word) { }`. Hit enter a few times before the last `}` to free up space and then paste the copied code inside there.
16.  For webhook to be in scope **<--I don't know what that means!**, cut `const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);` and paste it in a line after `async function sendMyMessage (word) {`. 
17. From where you cut `const webhook`, replace that with `sendMyMessage(req.params.myword);`.
18. Down where the value of `text` is `'I\'ve got news for you...',`, change the value to `my word is ${word}`. Make sure this code is backticks, and not single quotes. Hit save.

The final code of the second half of `slack.js` should look like: 
```
router.get('/word/:myword', function(req, res, next) {
  sendMyMessage(req.params.myword);
  console.log(`the word is ${req.params.myword}`);
  //send that word to slack
  res.render('index', { title: `Word=${req.params.myword}` });
});

async function sendMyMessage (word) {
  const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
  (async () => {
      await webhook.send({
        text: `my word is ${word}`,
      });
    })();
}

module.exports = router;

```
19. Open up `http://localhost:3000/slack/word/testing` in your internet browser. 
20. **not sure where we should put this, since we are just doing this step now but i know it should come earlier!** In Atom, create a file in your main watch-together folder called `.env`. 
21. Type in `SLACK_WEBHOOK_URL=`. To find out the URL that needs to go after the `=`, go back to [Slack API's "Incoming Webhooks" page](https://api.slack.com/apps/A014LR198AK/incoming-webhooks?success=1). At the bottom of this page, copy the webhook URL. 
22. Paste the URL after `SLACK_WEBHOOK_URL=`. Hit save.
23. Next, go to your `app.js` file in Atom. You need to use the `.env` module in this file as high up in the file as you can. After `var slackRouter = require('./routes/slack');`, hit enter a few times. Type ``require(`dotenv`).config();``. Hit save.
24. Now it needs to be installed in terminal. First make sure you are in the correct folder (`watch-together`). Then, type in `npm i dotenv`. Hit enter.
25. Open up `http://localhost:3000/slack/word/testing` and hit refresh. A slack message saying "my word is testing" should have just been received. 
26. If you change the URL slightly to `http://localhost:3000/slack/word/testing-again` and hit enter, a new slack message should come through that says "my word is testing-again". 

This is useful because you can be putting in names! You would probably never want to slack a channel any time anyone reloads a website, but the basic principle is that your app can know something, and then it can go in and tell slack about it.

So this is the most basic way of connecting our slack to our express app, and that's with webhooks. We did that by using the slack webhook module. 

### If we want to do a lot of different things with slack, we might want to create a kind of utilities folder that performs different sorts of operations for us that we then just require in to this module.

1. In Atom, create a new subfolder in your main watch-together folder called `tools`.
2. Inside the `tools` folder, create a new file called `slack-tools.js`.
3. Go back to the file `slack.js` and cut the code:
```
async function sendMyMessage (word) {
  const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
  (async () => {
      await webhook.send({
        text: `my word is ${word}`,
      });
    })();
}
```
4. Right click the name of your new file (`slack-tools.js`) and select "Split Down" to be able to view both files, one on top of the other.
5. Working in `slack-tools.js`, paste in the copied code. Put your cursor to before the first letter of the code and hit enter a couple times to give yourself more space.
6. Type in `const sendMyMessage = ` at the beginning of your first line of code. Delete the second `sendMyMessage` that appears later on in this line of code.
7. After the last line of this file's code, hit enter a couple times. Type `module.sendMyMessage = sendMyMessage;`.
8. Because we are now using `IncomingWebhook` in `slack-tools.js`, we need to require the slack webhook module not in `slack.js`, but in `slack-tools.js`. So, copy `const { IncomingWebhook } = require('@slack/webhook');` from `slack.js` and paste it in the beginning of `slack-tools.js`.
9. Back in `slack.js`, you need to replace what you just copied with `const slackTools = require ('../tools/slack-tools');` to require in the new file. 
10. Still in `slack.js`,  add `slackTools.` to the beginning of `sendMyMessage(req.params.myword);`.
11. Make sure to save the changes you've made in both of these files.
12. Open up your internet browser to test again with a new word. For example, `http://localhost:3000/slack/word/dani`. A new slack message should have gone through with your new word as well.
13. Back in terminal, first make sure you are still in the correct folder (`watch-together`). Type in `git add .` to stage the changes you have made. Hit enter.
14. Next, type in `git commit -m "adding webhook"`. Then hit enter.
15. Then, type in `git push origin master`.  Hit enter. This should push the changes to the master.
16. Next, type in `git push heroku master`. Hit enter.
17. This should allow us to test our app on heroku. In your internet browser, go to `https://bok-watch-together.herokuapp.com/slack/word/test-from-heroku` (first replace `bok-watch-together` with the name of the app you created). 

***Not sure where to put this***, 
### Ok, so that didn't work. "dotenv" is a strategy that we use only for the local development server. When this is running on heroku, we actually define the environment variables on heroku directly. To do this:
18. In terminal,  while in the folder that the app is in (`watch-together`), type in `heroku config:add `. Don't hit enter yet.
19. In Atom, open up you `.env` and copy the code. Paste it in terminal. Hit enter. That should set it and restart it.
20. Reload `https://bok-watch-together.herokuapp.com/slack/word/test-from-heroku`. Now that should work - a slack should have just gone through. 

So now anyone can go to that URL and it will fire something off that hits our app-tests slack channel! We've learned how to connect our express app to our slack, and how to get that up on the internet. So now any information coming to our sever, which is up on the internet, can get sent to our slack channel. And that's pretty powerful, there's a lot of stuff we'll be able to do with that.

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNzUwOTU4NTIsMzIwODY4ODIzLC02MT
czMzI2NTYsNjc5MjQ4NDUxLDQ0NTQxNzMxMSwtNDc3Mzk3NTY5
LC05MDY4OTgwMTAsNTcxMjg2Nzg4LC0xNTEyNDQ1NjIzLDE4MT
MzNDkyNiwtMTYyODM4ODgwNCwtMTExNDcwODM2MiwxMzE2NDYz
NDU5LDEwODc4NTUxNDEsLTE4ODA5NzQwLDEwMDk1ODg4MTksMT
czODc5NzYxMCwtMTU1NTY0NTUyNyw3NDg0NTU1NTEsOTkwNDEx
OThdfQ==
-->