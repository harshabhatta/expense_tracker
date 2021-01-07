const DateFormat = (value) => {
  const d = new Date(value);
  let date = `${d.getDate()}`;
  if (date.length < 2) {
    date = `0${date}`;
  }
  let month = `${d.getMonth() + 1}`;
  if (month.length < 2) {
    month = `0${month}`;
  }
  let year = d.getFullYear();
  console.log([year, month, date].join('-'));
  return [year, month, date].join('-');
};

export default DateFormat;
