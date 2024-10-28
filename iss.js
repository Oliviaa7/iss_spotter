const needle = require("needle");

const url = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {

  needle.get(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      
      callback(Error(`Status code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    const ip = body.ip;
    callback(null, ip);

  });
};

const fetchCoordsByIP = function(ip, callback) {
  needle.get(`http://ipwho.is/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    if (!body.success) {
      callback(Error(`Success status was ${body.success}. Server message was ${body.message} when fetching for IP ${body.ip}.`), null);
      return;
    }

    const latitude = body.latitude;
    const longitude = body.longitude;

    callback(null, {latitude, longitude});
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };