const coronaService = require('../services/coronaService');

module.exports.getHopkins = async (req, res, next) => {
  const data = await coronaService.getHopkins();
  if (data) {
    res.send(data);
    return next();
  }
  return res.status(405).send();
};
