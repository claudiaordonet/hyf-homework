const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
  {
    if (names[i] === "Ahmad") {
      names.splice(i, 1);
    }
  }
}

console.log(names);
