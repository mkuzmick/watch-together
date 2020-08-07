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
6. click verify and it should say that it worked. make sure you select "Save" at the bottom to save your changes

## airtable!
2. go to airtable.com/api and select the watchTogether base. in the left column, under theMessages table, select "Create Records"
3. first switch from `curl` to `JavaScript` in the right code area.
4. next, check the box that says "show API key" so you can add the API information to your `.env` file in atom. you will need to format this information to match the format you already have there. for example: (`AIRTABLE_API_KEY=######` and
`AIRTABLE_WATCHTOGETHER_BASE=######`, and of course replace the `#`s with the real information)

## airtable.js
5. create a new route called `airtable.js`. we copied the code from `users.js` and pasted in `airtable.js` just to have a place to start.
6. go back to the the airtable api webpage on creating records and copy everything from "Code" and stop just before "Output"
7. paste the code into the bottom of `airtable.js` so you can work with it.
*not sure exactly how to go over what we did here or if we should paste the code we ended with?*
## slack-events.js
1. open the route `slack-events.js`. in the messages slack event, add part of the code from `airtable.js` to create an airtable record using a slack DM to your bot.
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbNDkwMDE5MzY5LC0xODQ0NTQzMTYyLDczMD
k5ODExNl19
-->