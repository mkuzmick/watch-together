var express = require('express');
var router = express.Router();
const slackTools = require('../tools/slack-tools');

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


module.exports = router;
