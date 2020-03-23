const request = require('request');
const slackConfig = require('../config/credentials');

// This route handles get request to a /oauth endpoint. We'll use this
// endpoint for handling the logic of the Slack oAuth process behind our app.
module.exports.getAuth = async (req, res) => {
  console.log('/oauth');
  // When a user authorizes an app, a code query parameter is passed on the oAuth endpoint.
  // If that code is not there, we respond with an error message
  if (!req.query.code) {
    res.status(500);
    res.send({ Error: "Looks like we're not getting code." });
    console.log("Looks like we're not getting code.");
  } else {
    // If it's there...

    // We'll do a GET call to Slack's `oauth.access` endpoint, passing our app's client ID, client secret,
    // and the code we just got as query parameters.
    request({
      // URL to hit
      url: 'https://slack.com/api/oauth.access',
      // Query string data
      qs: {
        code: req.query.code,
        client_id: slackConfig.clientId,
        client_secret: slackConfig.clientSecret,
      },
      // Specify the method
      method: 'GET',

    }, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        res.json(body);
      }
    });
  }
};

/*
Code from: https://api.slack.com/tutorials/tunneling-with-ngrok
*/
