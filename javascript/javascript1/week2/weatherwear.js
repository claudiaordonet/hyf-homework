//weatherwear

function temperature(degrees) {
  if (degrees <= 0) {
    return "Winter gear, glooves,scarf and hat";
  } else if (degrees <= 15) {
    return "Wear a Jacket, scarf and hat";
  } else if (degrees >= 16 && degrees <= 20) {
    return "wear a light jacket ";
  } else {
    return "shorts and a t-shirt";
  }
}

const whattowear = temperature(21);

console.log(whattowear);
