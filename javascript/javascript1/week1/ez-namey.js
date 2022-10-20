//Ez Namey (Startup name generator) Optional

let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Creative",
  "Let",
  "Make",
  "Space",
  "Fox",
  "Hi",
  "Great",
];
let secondWords = [
  "Peace",
  "Deal",
  "partner",
  "ideas",
  "dream",
  "possible",
  "around",
  "lox",
  "there",
  "team",
];

let startupName = () =>
  `${firstWords[Math.floor(Math.random() * firstWords.length)]} ${
    secondWords[Math.floor(Math.random() * secondWords.length)]
  }`;

console.log(startupName());
