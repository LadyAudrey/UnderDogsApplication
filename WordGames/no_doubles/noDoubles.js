// Program to discover which letters never appeal consecutively
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

for(let i = 25; i < letters.length; i-- ) 
    for(let j = 0; j < words.length; j++) 
        if (words[j].includes(letters[i])); {
            letters.splice(letters[i], 1);

}
console.log(letters)
//console.log("Letters that are not consecutively are " + letters)