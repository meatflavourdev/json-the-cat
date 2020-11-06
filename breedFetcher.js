// breedFetcher.js
const request = require("request");

// Configuratoion
const URL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedID, callback) {
  const requestURI = URL + breedID;

  request(requestURI, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('No Results Found');
      return;
    }
    callback(undefined, data[0].description);
  });
};

module.exports = { fetchBreedDescription };
