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
