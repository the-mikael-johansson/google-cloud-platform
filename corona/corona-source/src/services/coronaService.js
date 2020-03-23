
const Promise = require('bluebird');
const dataStore = require('../repositories/datastore');
const coronaSummaryFactory = require('../models/corona-summary-factory');

module.exports.getCoronas = async (country) => {
  console.log(`country=${country}`);

  console.time('get-data-time');
  return Promise.all([
    dataStore.getDataCategory(country),
  ])
    .then((results) => {
      console.timeEnd('get-data-time');
      const KIND_INDEX = 0;
      const entityResult = results[0][KIND_INDEX];
      return entityResult;
    });
};

module.exports.getCoronasSummary = (coronaData) => {
  const result = coronaSummaryFactory.create();
  console.time('summarize-time');
  for (let i = 0; i < coronaData.length; i += 1) {
    const current = coronaData[i];

    let lastDate;
    let lastCount;
    const { dates } = current.payload;
    let latestDate = null;
    for (const key in dates) {
      const item = dates[key];
      // The dates are unsorted
      if (latestDate === null || key.localeCompare(latestDate) === 1) {
        latestDate = key;
        lastDate = key;
        lastCount = parseInt(item, 10);
      }
    }
    result[current.type].date = lastDate;
    result[current.type].count += lastCount;
  }
  console.timeEnd('summarize-time');
  return result;
};
