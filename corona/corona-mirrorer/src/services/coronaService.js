const csv2json = require('../utils/csv2json');
const dataStore = require('../repositories/datastore');
const converter = require('../utils/converter');

const getReportUrl = (type) => `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-${type}.csv`;

const TAG = 'corona-mirrorer-';

module.exports.getHopkins = async () => {
  console.time(`${TAG}get-csv`);
  let confirmed = await csv2json.getCsvAsJson(getReportUrl('Confirmed'));
  let deaths = await csv2json.getCsvAsJson(getReportUrl('Deaths'));
  let recovered = await csv2json.getCsvAsJson(getReportUrl('Recovered'));
  console.timeEnd(`${TAG}get-csv`);

  if (confirmed.length < 10
    || deaths.length < 10
    || recovered.length < 10) {
    throw new Error('CSV conversion failed');
  }

  console.time(`${TAG}convert-all`);
  confirmed = converter.convertItems(confirmed);
  deaths = converter.convertItems(deaths);
  recovered = converter.convertItems(recovered);
  console.timeEnd(`${TAG}convert-all`);

  console.time(`${TAG}save-all`);
  return Promise.all([
    dataStore.saveMultiple(confirmed, 'confirmed'),
    dataStore.saveMultiple(deaths, 'deaths'),
    dataStore.saveMultiple(recovered, 'recovered')
  ])
    .then(() => {
      console.timeEnd(`${TAG}save-all`);
      const data = {
        confirmed,
        deaths,
        recovered,
      };
      return data;
    });
};
