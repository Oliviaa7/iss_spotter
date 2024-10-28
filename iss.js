const needle = require("needle");

const url = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {

  needle.get(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      
      callback(Error( `Status code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    const ip = body.ip;
    callback(null, ip);

  });
};

module.exports = { fetchMyIP };