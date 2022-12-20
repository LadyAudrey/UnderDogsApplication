// Create a variable containing the names from 1880 and 2020
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name to create names array
let names1880 = readFileLines('baby_names_1880_short.txt');
let names2020 = readFileLines('baby_names_2020_short.txt');

const popularNames = new Set (names1880.concat(names2020));

console.log(popularNames);
