const oasTools = require('oas-tools');
const jsyaml = require('js-yaml');
const fs = require('fs');

const path = require('path');
const http = require('http');
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

// Parse request body's
app.use(bodyParser.json({
  strict: false,
}));

const dirname = path.resolve();

const spec = fs.readFileSync(path.join(dirname, 'api/swagger.yml'), 'utf8');
const oasDoc = jsyaml.safeLoad(spec);

const oasToolsConfiguration = {
  controllers: path.join(dirname, './controllers'),
  checkControllers: true,
  loglevel: 'info',
  strict: false,
  router: true,
  validator: true,
  docs: {
    // BUG: https://github.com/isa-group/oas-tools/issues/82
    // Doesn't work with GCP Cloud Functions?
    // apiDocs: '/api-docs',
    // apiDocsPrefix: '',
    // swaggerUi: '/docs',
    // swaggerUiPrefix: '',
  },
  ignoreUnknownFormats: true,
};

oasTools.configure(oasToolsConfiguration);

oasTools.initialize(oasDoc, app, () => {
  http.createServer(app).listen(PORT, () => {
    console.log('App up and running!');
  });
});

// Needed for GCP Cloud Functions
exports.app = app;
