const commandService = require('../services/command-service');

module.exports.postCommand = async (req, res) => {
  console.log(`Handling command body: ${JSON.stringify(req.body)}...`);
  const response = await commandService.handleCommand(req.body.command, req.body.text);
  console.log(`Response: ${response}`);
  res.send(response);
};
