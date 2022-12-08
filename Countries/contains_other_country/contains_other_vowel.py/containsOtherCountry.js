// Program to create a list of all countries that contain another countries name

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');

let containsOtherCountries = [];


for (var countryA = 0; countryA < countries.length - 1; countryA++) {
    for (var countryB = 0; countryB < countries.length - 1; countryB++ ) {
        if (countries[countryA] !== countries[countryB] 
            && countries[countryA].includes(countries[countryB])) {
            containsOtherCountries.push(countries[countryA]);
            containsOtherCountries.push(countries[countryB]);
        }
    }
}

console.log(containsOtherCountries)