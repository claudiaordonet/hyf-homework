const seriesDurations = [
  { title: "buffy", days: 3, hours: 1, minutes: 0 },
  {
    title: "friends",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "CSI MIAMI",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  const hoursinmy80 = 80 * 365 * 24;

  let percentagetotalLife = 0;

  seriesDurations.forEach((takefrom) => {
    const seriesDurationhours =
      takefrom.days * 24 + takefrom.hours + takefrom.minutes / 60;

    const percentage = (seriesDurationhours / hoursinmy80) * 100;
    console.log(
      seriesDurations.title,
      "took",
      percentage.toFixed(3),
      "of my life"
    );
    percentagetotalLife = percentagetotalLife + percentage;
  });
  console.log("In total that is", percentagetotalLife.toFixed(3), "of my life");
}

logOutSeriesText();
