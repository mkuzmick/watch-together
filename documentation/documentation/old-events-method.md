3. now before the link will work, you'll have to write a route that sends slack back the "challenge" that it's send you. So create a new route in your `slack.js` file with the following code:
    ```
    router.post('/events', function(req, res, next) {
      if (req.body.challenge) {
        console.log("got your challenge, Slack, going to send it back");
        res.send(req.body.challenge);
      } else {
        console.log(`got an event: \n${JSON.stringify(req.body, null, 4)}`);
        res.status(200).send();
      }
    });
    ```
    
