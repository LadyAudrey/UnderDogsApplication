// Program to find all the words containing B and X, that are less than 5 letters long
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('//home/evergreen/UnderDogsAssignemnts/sowpods');
b = []
bx = []
bxLessThan5 = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("B")) {
        b.push(words[i]);
    }

for(let j = 0; j < b.length; j++) { 
    if (b[j].includes("X")) {
        bx.push(b[j]);
    }
}
console.log("All the words that contain B and X and < 5 letters long are " + b)}