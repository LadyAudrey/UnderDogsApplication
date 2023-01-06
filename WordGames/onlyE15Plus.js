// What are all of the words that have only “E”s for vowels and are at least 15 letters long?

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
let miniWords = readFileLines('/home/evergreen/UnderDogsAssignments/mini.sow.pods');



