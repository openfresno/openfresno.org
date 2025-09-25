const moment = require("moment");

export const getWednesday = (nextMonth) => {
  let currentMonth = nextMonth ? moment().month() + 1 : moment().month();
  let currentYear = moment().year();

  if (currentMonth === 12) {
    currentMonth = 0;
    currentYear = currentYear + 1;
  }

  const currentDay = nextMonth ? 1 : moment().date();

  const daysInMonth = moment()
    .year(currentYear)
    .month(currentMonth)
    .daysInMonth();

  let wednesdays = [];

  for (let day = currentDay; day <= daysInMonth; day++) {
    const currentDate = moment()
      .year(currentYear)
      .month(currentMonth)
      .date(day);

    if (currentDate.day() === 3) {
      wednesdays.push(currentDate.date());
    }
  }

  wednesdays.pop();

  if (wednesdays.length === 0) return getWednesday(1);
  else
    return moment()
      .year(currentYear)
      .month(currentMonth)
      .date(wednesdays[0])
      .format("dddd, MMMM D, YYYY");
};
