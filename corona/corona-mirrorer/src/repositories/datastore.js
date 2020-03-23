const { Datastore } = require('@google-cloud/datastore');

const datastore = new Datastore();
const kind = 'HopkinsData';

const createEntity = (data, nameId, type) => {
  const taskKey = datastore.key([kind, nameId]);

  const task = {
    key: taskKey,
    data: {
      type,
      country: data.country.toLocaleLowerCase(),
      payload: data
    },
  };

  return task;
};

const createNameId = (element, type) => {
  const state = element.state ? element.state : '';
  const c = element.country.replace(/ /g, '.');
  const s = state.replace(/ /g, '.');
  let nameId = `${type}-${c}-${s}`;
  nameId = nameId.toLocaleLowerCase();
  return nameId;
};

module.exports.saveMultiple = async (data, type) => {
  const structuredData = [];
  data.forEach((element) => {
    const nameId = createNameId(element, type);
    const entity = createEntity(element, nameId, type);
    structuredData.push(entity);
  });

  return datastore.save(structuredData);
};
