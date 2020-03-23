const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore();
const kind = 'HopkinsData';

const getFiltered = async (country) => {
  const query = datastore.createQuery(kind);
  if (country) {
    query.filter('country', country);
  }
  return datastore.runQuery(query);
};

module.exports.getDataCategory = async (country) => getFiltered(country);

module.exports.saveDataCategory = async (data, nameId) => {
  const taskKey = datastore.key([kind, nameId]);

  const task = {
    key: taskKey,
    data: {
      description: nameId,
      payload: data,
    },
  };

  await datastore.save(task);
  console.log(`Saved ${task.key.name}: ${task.data.description}`);
};
