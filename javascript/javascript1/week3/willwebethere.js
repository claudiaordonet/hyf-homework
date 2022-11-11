const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculatetravelTime() {
  const hours = travelInformation.destinationDistance / travelInformation.speed;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  {
    return `${rhours} hours  ${rminutes}  minutes;
  `;
  }
}

const travelTime = calculatetravelTime(travelInformation);
console.log(travelTime);
