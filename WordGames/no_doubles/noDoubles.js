// Program to discover which letters never appeal consecutively
// Nor Currently working
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

letters = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL", "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ"]
consecutive_letters = []

for(let i = 0; i < letters.length; i++ ) {
    for(let j = 0; j < words.length; j++) {
        if (words[j].indexOf("letters[i]")) === -1;
            consecutive_letters.push(letters[i])
            console.log(consecutive_letters)
    }}

console.log(consecutive_letters)
//console.log("Letters that are not consecutively are " + letters)