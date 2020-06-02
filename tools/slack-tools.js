const { IncomingWebhook } = require('@slack/webhook');

const sendMyMessage = async function (word) {
  const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
  (async () => {
      await webhook.send({
        text: `my word is ${word}`,
      });
    })();
}

module.exports.sendMyMessage = sendMyMessage;
