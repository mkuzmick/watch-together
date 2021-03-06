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

## slash command & OMDB
1. go to [https://api.slack.com/](https://api.slack.com/)
2. click "Your Apps" in the top right corner of the window
3. select your watch-together app
4. under "features" in the left column, select "Slash Commands"
5. click "Create New Command"
6. fill in the first four boxes and then save. you will be prompted to reinstall your app so do that. (for request URL, we used on ngrok URL and just made sure the end of it was "/slack/watch" as that is what we are going to create in atom.)
7. now, go to [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx) and sign up to get a free API key from the open movie database. copy the API key you are emailed so you can add it to your `.env` file in atom. you will need to format this information to match the format you already have there (for example: `OMDB_API_KEY=######`). then save.
8. in terminal, in your watch-together folder, type in `npm i axios` and hit enter to install axios.
9. go to your `slack.js` file. require axios by adding `var axios = require('axios');` to the top of your file.
10. go to [https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios) and copy the `async` example code: 
```
async  function  getUser()  {
 try  {
 const  response  =  await  axios.get('/user?ID=12345');
 console.log(response);
 }  catch  (error)  {
 console.error(error);
 }
```
11. make some space for new code and add the above copied code and then start to edit. your end code should look like:

```
router.post('/watch', async function(req, res, next){
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${encodeURI(req.body.text)}`);
      console.log(response);
      // res.send(`got a slash request: ${JSON.stringify(response.data,null,4)}`)
      res.json({
	"blocks": [
		{
			"type": "image",
			"title": {
				"type": "plain_text",
				"text": response.data.Title,
				"emoji": true
			},
			"image_url": response.data.Poster,
			"alt_text": `${response.data.Title} Poster`,
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": `The ${response.data.Type} you requested is ${response.data.Title}. \n\n*Plot Summary*\n${response.data.Plot}`
			}
		}
	]
})
    } catch (error) {
      console.error(error);
      res.send(`got a failed slash request: ${JSON.stringify(req.body,null,4)}`)
    }
})
```
12. use [slack's block kit builder](https://app.slack.com/block-kit-builder) to get template code for formatting the response that your slash command prompts.
13. try the slash command in slack. then use the JSON your terminal gives you to tweak your code in atom so your message is what you want.

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg5NTIwMDc1NCwtMTQzOTc0MTk2LC0xMz
g5MjM2NjYyLDEyODgzNjQ3MTIsMTYyMTA3MDQ5NCw0OTAwMTkz
NjksLTE4NDQ1NDMxNjIsNzMwOTk4MTE2XX0=
-->