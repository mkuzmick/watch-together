# Getting started with a Slack App
1. Navigate back to Atom. In watch-together, make a new file in the `routes` folder by duplicating `index.js`. You can call the new file `slack.js`.
2. In the code of the file, change the value of `title` from `Watch Together` to `Slack Tests Go Here`. Note: **do not change** the `index` after `res.render` to `slack` as the `index` is referring to the view `index.ejs`, and we do not yet have a `slack.ejs` view.
3. In order for someone to actually be able to get to this page, open the file `app.js`. We need to require a new route in, and then we need to tell the app when we should use that file, which routes that file should handle. Looking at the required variables towards the top of this file, we're going to do something that is exactly parallel to what they do with users, so copy the line of code that refers to users and paste it right underneath. Change the two `users`  in your new line of code to `slack`.
4. Lower down in this same file, copy the line of code that begins with `app.use` and is talking again about the users router. Copy this line of code and paste it right underneath. Again, replace the two `users` in that line with `slack`. Save your work.
5. Head back to over chrome and open `localhost:3000/slack` to make sure it worked.
6. Next, go back to the route file `slack.js`. Copy the first route and paste it below, with atleast a line of blank space in between them. We will now edit the one you just pasted.
6. We will first add in an additional parameter. In `router.get('/'`, we will change the `/` to read `/word/:myword`.
7. Next, press enter after the curly bracket at the end of the first line of code. On the new line, we will log something. Begin typing "log" and then hit enter when "log" comes up below. The code on this line should end up as ``console.log(`the word is ${req.params.myword}`);``.
8. Change the value of title to ``{ title: `Word=${req.params.myword}` })``. Now save.
9. In your internet browser, navigate to `http://localhost:3000/slack/word/testing`. Your word should be showing up the webpage. 


Now we haven a way of getting some arbitrary input into this app. It's not the most elegant way, but at least one word from the decision maker is going into this app, and then we can do something with that word. So what we want to do next is learn how to send that word to a slack channel.
11. Google `Slack API`, which will bring you to [https://api.slack.com/](https://api.slack.com/). 



> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAzMjAwMDkwNCwtMTM1Njg1MjA0MSwxNz
YwMjM3MTcxXX0=
-->