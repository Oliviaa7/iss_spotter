const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP('154.5.114.214', (error, data) => {
//   if (error) {
//     console.log("It didn't work...", error);
//     return;
//   }

//   console.log("It worked. Returned coordinates: ", data);
// });

// fetchISSFlyOverTimes({ latitude: 50.2670137, longitude: -119.2720107 }, (error, data) => {
//   if (error) {
//     console.log("It didn't work...", error);
//     return;
//   }

//   console.log("It worked. Returned data: ", data);
// });