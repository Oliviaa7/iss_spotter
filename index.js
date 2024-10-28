const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work.", error);
  }

  passTimes.forEach(pass => {
    const risetime = new Date(pass.risetime * 1000);
    const duration = pass.duration;

    console.log(`Next pass at ${risetime} for ${duration} seconds!`);
  });
});