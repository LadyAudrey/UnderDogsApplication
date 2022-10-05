// Program to discover which letters never appeal consecutively
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignemnts/sowpods');

letters = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL",
           "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ"]
consecutive_letters = []

for(let i = 0; i < letters.length; i++) { 
    if (words[i].includes("UU")) {
        uu.push(words[i]);
    }

}
console.log("All the words with 2 consecutive Us are " + uu)