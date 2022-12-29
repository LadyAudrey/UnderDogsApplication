// Program to find all the words containing B and X, that are less than 5 letters long
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file

const readFileLines = filename =>
fs.readFileSync(filename).toString('UTF8').split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');


let solutionFound = new Set();

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("B") && words[i].includes("X") && words[i].length < 5) {
        solutionFound.add(words[i]);
    }
}

console.log(solutionFound)
