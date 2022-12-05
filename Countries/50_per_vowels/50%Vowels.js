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
const countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');

// const vowels50Percent = [];

// for (var i = 0; i < countries.length; i++) {
//    let vowelsCount = 0;
//    let upperCaseCountry = countries[i].toUpperCase();
//    for (var j = 0; j < upperCaseCountry.length; j++) {
//       if (upperCaseCountry[j] == "A" ||
//       upperCaseCountry[j] == "E" ||
//       upperCaseCountry[j] == "I" ||
//       upperCaseCountry[j] == "O" ||
//       upperCaseCountry[j] == "U" ||
//       upperCaseCountry[j] == "Y") {
//          vowelsCount++;
//       }
//    } 
//    if (vowelsCount > upperCaseCountry.length / 2) {
//       vowels50Percent.push(countries[i]);
//    }
// }

// console.log(vowels50Percent)

// Refactoring to use Sets

// const vowelSet = new Set(["A", "E", "I", "O", "U", "Y"]);
// const vowels50Percent = [];

// for (var i = 0; i < countries.length; i++) {
//    let vowelsCount = 0;
//    let upperCaseCountry = countries[i].toUpperCase();
//    for (var j = 0; j < upperCaseCountry.length; j++) {
//       if (vowelSet.has(upperCaseCountry[j])) {
//          vowelsCount++;
//       }
//       }
//    if (vowelsCount > upperCaseCountry.length / 2) {
//       vowels50Percent.push(countries[i]);
//    }
// }

// console.log(vowels50Percent)

// creating a "helper function"

const vowelSet = new Set(["A", "E", "I", "O", "U", "Y"]);

function isAVowel (x) {
   return vowelSet.has(x);
}

const vowels50Percent = [];

for (var i = 0; i < countries.length; i++) {
   let vowelsCount = 0;
   let upperCaseCountry = countries[i].toUpperCase();
   for (var j = 0; j < upperCaseCountry.length; j++) {
      if (isAVowel(upperCaseCountry[j])) {
         vowelsCount++;
      }
   }
   if (vowelsCount > upperCaseCountry.length / 2) {
      vowels50Percent.push(countries[i]);
   }
}

console.log(vowels50Percent)