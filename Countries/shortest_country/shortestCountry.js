// Program to create a list of all countries containing "United"
// this gets the right answer, but for some reason the console.log at the end isn't printing for me
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');

let shortestCountry = 'United States of America';
for (let j = 0; j < countries.length; j++) {
    shortest = shortestCountry.length;
    test = countries[j].length;
    if (test < shortest)  {
        shortestCountry = countries[j]
      //   console.log(shortestCountry)
    }
}

console.log(shortestCountry)
