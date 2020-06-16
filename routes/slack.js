var express = require('express');
var router = express.Router();
const slackTools = require('../tools/slack-tools');
const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_BOT_TOKEN);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slack Tests Go Here' });
});

router.get('/word/:myword', function(req, res, next) {
  slackTools.sendMyMessage(req.params.myword);
  console.log(`the word is ${req.params.myword}`);
  // send that word to slack
  res.render('index', { title: `Word=${req.params.myword}` });
});

router.get('/channels', async function(req, res, next){
  const result = await web.conversations.list({});
  res.json(result);
})

router.post('/events', function(req, res, next) {
  if (req.body.challenge) {
    console.log("got your challenge, Slack, going to send it back");
    console.log(req.body.challenge);
    res.send(req.body.challenge);
  } else {
    console.log(`got an event: \n${JSON.stringify(req.body, null, 4)}`);
    res.status(200).send();
  }
});

router.post('/interactions', function(req, res, next) {
  console.log(`got an interaction: \n${JSON.stringify(JSON.parse(req.body.payload), null, 4)}`);
  res.status(200).send();
});


module.exports = router;
