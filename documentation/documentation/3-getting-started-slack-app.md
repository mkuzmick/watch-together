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
3. Scroll down and copy the code `curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' YOUR_WEBHOOK_URL_HERE`. ***Marlon you highlighted this but it didn't look like you copied this. I'm not exactly sure what this code does or what I should note here.***
4. Click the bottom button that says "Add New Webhook to Workspace".
5. Next, you will be asked in which channel should your app post to. You can select the `#app-tests` channel.
6. Now, copy the code underneath the header that reads "Sample curl request to post to a channel." 
7. Navigate to terminal. Open a new window (command+N) and paste the code here. Hit enter.
8. Open the `#app-tests` channel in the Learning Lab Development slack. You should see a "Hello, World!" message from your app!

### Next, we will learn how to use the hook to send any word we want into slack.
1. Navigate back to `slack.js` in Atom.  Hit enter after ``console.log(`the word is ${req.params.myword}`);`` and type `//send that word to slack` on the new line.
2. Open [https://slack.dev/node-slack-sdk/](https://slack.dev/node-slack-sdk/) in your internet browser.
3. Click "Incoming Webhooks" in the left menu. This will give us a way of sending a single message to a single channel. This is note infinitely useful, but definitely useful for some things. The media team uses this for their file renaming scripts, for example. If you want to be notified that files are being renamed, we fire off this slack webhook. When you don't need to listen to a response back from slack, when you don't need to perform any additional operations, when this type of information always goes to this same channel, this is totally fine. It's more secure than all those other things, because once you have permission to access different users and send things to private channels, then you can get into more trouble, since here you're just getting permission to send to one single channel.
4. 



> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbODcxNjA1NTM1LC0xNTU1NjQ1NTI3LDc0OD
Q1NTU1MSw5OTA0MTE5OCwtMTYwNzkzNzk3MiwtMTM1Njg1MjA0
MSwxNzYwMjM3MTcxXX0=
-->