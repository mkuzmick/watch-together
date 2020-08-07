## getting back into things
1. open your watch-together folder in terminal
2. open atom
3. open a new terminal window so you can access ngrok in the directory you put it in (mine was stored in the tools folder)

## ngrok!
1. in the directory you put ngrok in, start it up by typing  `./ngrok http 3000` and hit enter
2. copy the link that starts with "https" (the "s" means it is secure) so that you can add that on the slack API pages.

## slack!
1. go to [https://api.slack.com/](https://api.slack.com/)
2. click "Your Apps" in the top right corner of the window
3. select your watch-together app
4. under "features" in the left column, select "Event Subscriptions"
5. click "change" to input your new ngrok link (since your old one expired) and then add the same ending to your new link ("/slack-events")
6. click verify and it should say that it worked
## airtable!
2. go to airtable.com/api and select the watchTogether base. select the messages table
3. create a new route called airtable.js
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI1NjIxOTY3Nyw3MzA5OTgxMTZdfQ==
-->