const today = new Date();
const weekday = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

console.log(weekday[0]);

function getEventWeekday(days) {
  today.setDate(today.getDay() + days);
  return weekday[today.getDay()];
}

console.log(getEventWeekday(4));
