// Program to find all the words containing B and X, that are less than 5 letters long
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file

const readFileLines = filename =>
fs.readFileSync(filename).toString('UTF8').split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');


let bxLessThan5 = [];

// for(let i = 0; i < words.length; i++) { 
//     if (words[i].includes("B") && words[i].includes("X") && words[i].length < 5) {
//         bxLessThan5.push(words[i]);
//     }
// }

// // console.log("All the words that contain B and X and < 5 letters long are " + bxLessThan5)

// refactoring to use Set
const bX = new Set();

for (var i = 0; i < words.length - 1; i++) {
    // the simple thing would be to put <5 in the conditional, but I want set practice
    if (words[i].includes("B") && words[i].includes("X")) {
        bX.add(words[i]);
    }
}

for (var j = 0; j < bX.length -1; j++) {
    if (bX[j].length < 5) {
        bxLessThan5.push(bX[j]);
    }
}

console.log(bxLessThan5)