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
const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"]
for (var i=0; i < countries.length -1; i++) {
   for (var j=0; j < vowels.length - 1; j++) {
      if (countries[i].slice(0, -1) == vowels[j] && countries[i].slice(-1)) {
         bookendVowels.push(countries[i]);
      }
   }
}

console.log(bookendVowels)
