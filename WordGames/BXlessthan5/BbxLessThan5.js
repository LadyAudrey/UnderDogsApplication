// Program to find all the words containing B and X, that are less than 5 letters long
//not currently working right
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

let bx = []
let bxLessThan5 = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("B") && words[i].includes("X")) {
        bx.push(words[i]);}}

for(let j = 0; j < bx.length; j++) { 
    if (bx[j].length < 5 ) {
        bxLessThan5.push(bx[j]);
    }}

console.log("All the words that contain B and X and < 5 letters long are " + bxLessThan5)