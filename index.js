const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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