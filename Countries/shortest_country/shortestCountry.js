// Program to find the shortest string
// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');

let shortestCountry = countries[0];
for (let j = 0; j < countries.length - 1; j++) {
    if (countries[j].length < shortestCountry.length) {
        shortestCountry = countries[j];
    }
}

console.log(shortestCountry);
