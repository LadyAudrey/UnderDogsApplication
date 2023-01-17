// Write a function that takes a string `substring` as an argument and
//returns an array of all of the words that contain that substring
//(the substring can appear anywhere in the word).


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
const superMini = ["STAY", "REST", "NEST", "PROFILE", "ABCDEFGHIJ", "PROGRAMING"];

const containsSubString = function(array, substring) {
    const subStringUpper = substring.toUpperCase(substring);
    console.log(subStringUpper)
    // if(substring)
}

containsSubString(superMini, "aa")