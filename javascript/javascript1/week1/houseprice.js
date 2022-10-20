//Housey pricey (A house price estimator)

let houseWidth = 8;
let houseDeep = 10;
let houseHigh = 10;

let volumeInMeters = houseWidth * houseDeep * houseHigh;
let gardenSizeInM2 = 100;

let housePricePeter = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePricePeter < 2500000) {
  console.log("Peter overpaid for the house");
}

let houseWidth2 = 5;
let houseDeep2 = 11;
let houseHigh2 = 8;

let volumeInMeters2 = houseWidth2 * houseDeep2 * houseHigh2;
let gardenSizeInM2julia = 70;

let housePricejulia = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM2julia * 300;

if (housePricejulia > 1000000) {
  console.log("Julia paid a good price");
} else {
  console.log("Julia overpaid");
}
