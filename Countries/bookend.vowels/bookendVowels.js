// Program to create a list of all countries containing "United"

// Importing the fs module
const { count } = require("console");
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');

const bookendVowels = [];
const vowelSet = new Set(["A", "E", "I", "O", "U", "Y"]);

for (var i=0; i < countries.length - 1; i++) {
   let upperCaseCountry = countries[i].toUpperCase();
   if (vowelSet.has(upperCaseCountry.slice(0, 1)) && vowelSet.has(upperCaseCountry.slice(-1))) {
      bookendVowels.push(countries[i]);
   }
}

console.log(bookendVowels)

//          return vowelSet.has(x);
// && vowelSet.has(upperCaseCountry[i].slice(-1))