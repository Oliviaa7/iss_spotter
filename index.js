const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  passTimes.forEach(pass => {
    const risetime = new Date(pass.risetime * 1000);
    const duration = pass.duration;
    console.log(`Next pass at ${risetime} for ${duration} seconds!`);
})
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work.", error);
  }

  printPassTimes(passTimes);
  });

  module.exports = printPassTimes;