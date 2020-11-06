// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
const searchString = args[0].slice(0,4).toLowerCase();

fetchBreedDescription(searchString, (error, description) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(`Description: ${description}`);
  }
});