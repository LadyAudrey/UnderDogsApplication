// Program to find all the words that contain BAT and no E and less than 5 letters long

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
const BATnoE = []
words.forEach(word => {
    if(word.includes("BAT") && !word.includes("E") && word.length < 5) {
        BATnoE.push(word);
    }
});

console.log("The words containing BAT, no E and less than 5 letters long are " + BATnoE);