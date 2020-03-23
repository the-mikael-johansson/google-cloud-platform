const coronaService = require('../services/coronaService');

module.exports.getCoronas = async (req, res, next) => {
  const data = await coronaService.getCoronas(req.query.country);
  if (data) {
    res.send(data);
    return next();
  }
  return res.status(405).send();
};

module.exports.getCoronasSummary = async (req, res, next) => {
  const data = await coronaService.getCoronas(req.query.country);

  if (!data) {
    return res.status(405).send({ message: 'Could not get corona data' });
  }

  const summarizedData = await coronaService.getCoronasSummary(data);

  if (summarizedData) {
    res.send(summarizedData);
    return next();
  }
  return res.status(405).send({ message: 'Could not get corona summary' });
};
