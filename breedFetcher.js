// breedFetcher.js
const request = require('request');

//Get command line args
const args = process.argv.slice(2);
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const searchString = args[0].slice(0,4).toLowerCase();
const requestURI = URL + searchString;

request(requestURI, (error, response, body) => {
  if (error) {
    console.log('error:', error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('No Results!');
    return;
  }
  console.log(data[0]);
});