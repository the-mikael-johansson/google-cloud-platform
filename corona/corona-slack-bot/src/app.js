const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/auth-controller');
const commandController = require('./controllers/command-controller');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// Used for ngrok (when using local development)
app.get('/', (req, res) => {
  res.send(`URL: ${req.url}`);
});

app.get('/oauth', authController.getAuth);

app.post('/command', commandController.postCommand);

// Needed for GCP Cloud Functions
exports.app = app;
