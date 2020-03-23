module.exports.getTodayString = () => {
  let today = new Date();
  const dd = String(today.getDate()); // .padStart(2, '0');
  const mm = String(today.getMonth() + 1); // .padStart(2, '0'); //January is 0!
  const yy = today.getFullYear().toString().substr(-2);

  today = `${mm}/${dd}/${yy}`;
  return today;
};
