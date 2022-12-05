// Program to find the shortest word that has all the vowels


// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

const vowels = [];
let shortest = "AMARYLLIDACEOUS";

for (var i=0; i < words.length - 1; i++) {
    if (words[i].includes("A") && words[i].includes("E") && words[i].includes("I") && words[i].includes("O") &&words[i].includes("U") &&words[i].includes("Y")) {
        vowels.push(words[i]);
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
}
console.log(shortest);