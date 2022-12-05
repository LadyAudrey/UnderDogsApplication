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
   let country = countries[j].toUpperCase();
   console.log(country)
   if ((country.includes("A")) || (country.includes("E")) || (country.includes("I")) || (country.includes("O")) || (country.includes("U")) || (country.includes("Y"))) {
      oneVowel.push(countries[j]);
   }
}

console.log(oneVowel)