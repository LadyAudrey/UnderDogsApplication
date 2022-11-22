// Program to create a list of all countries containing one vowel

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');
var oneVowel = []
for (let j = 0; j < countries.length; j++) {
   if ((countries[j].includes("A")) || (countries[j].includes("E")) || (countries[j].includes("I")) || (countries[j].includes("O"))) || (countries[j].includes("U") || (countries[j].includes("Y"))) {
      oneVowel.push(countries[j]);
   }
}

console.log(oneVowel)