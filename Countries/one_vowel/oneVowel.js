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

const vowels = "AEIOUY"
var oneVowel = []

// Ex: Chad, Argentina, AU, AA

for (let j = 0; j < countries.length; j++) {
   let vowelSet = new Set ();
   let country = countries[j].toUpperCase();
   for (let k = 0; k < country.length; k++) {
      if (vowels.includes(country[k])) {
         vowelSet.add(country[k]);
      }
   }
   if (vowelSet.size === 1) {
      oneVowel.push(countries[j]);
   }
}
      // first vowel, gets added to the set
      // second vowel, is not the same, rejects and breaks to the next word
      // second vowel, is the same, proceeds to check the rest of the letters for vowels


console.log(oneVowel)