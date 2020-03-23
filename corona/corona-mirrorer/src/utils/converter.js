
const pad = (element) => (element.length < 2 ? `0${element}` : element);

const convert = (data) => {
  const COUNTRY = 'Country/Region';
  const STATE = 'Province/State';
  const LAT = 'Lat';
  const LONG = 'Long';

  const YEAR = 2;
  const MONTH = 0;
  const DAY = 1;
  const dates = {};

  for (const key in data) {
    const dataItem = data[key];

    if (key === COUNTRY || key === STATE) {
      continue;
    }

    if (key === LAT || key === LONG) {
      continue;
    }

    const dateSplit = key.split('/');
    let yyyy;
    let mm;
    let dd;
    let i = 0;

    dateSplit.forEach((element) => {
      if (i === YEAR) {
        yyyy = `20${element}`;
      } else if (i === MONTH) {
        mm = pad(element);
      } else if (i === DAY) {
        dd = pad(element);
      }
      i += 1;
    });

    const dateStr = `${yyyy}-${mm}-${dd}`;
    dates[dateStr] = dataItem;
  }

  const report = {
    country: data[COUNTRY],
    state: data[STATE],
    location: {
      lat: data[LAT],
      lng: data[LONG]
    },
    dates
  };

  return report;
};

const convertItems = (dataItems) => {
  const items = [];
  dataItems.forEach((element) => {
    items.push(convert(element));
  });
  return items;
};

module.exports.convertItems = convertItems;
