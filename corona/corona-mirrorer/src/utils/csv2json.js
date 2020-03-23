
const fetch = require('node-fetch');
const csv = require('csvtojson');

const getCsvAsJson = async (url) => {
  const confirmedCsv = await fetch(url)
    .then((res) => res.text());
  return csv({
    noheader: false,
    output: 'json',
  })
    .fromString(confirmedCsv)
    .then((jsonData) => jsonData);
};

module.exports.getCsvAsJson = getCsvAsJson;
