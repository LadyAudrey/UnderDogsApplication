// Program to find all the words containing X, Y and Z
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
let xyz = new Set();

for(let i = 0; i < words.length; i++) { 
    let word = words[i];
    if (word.includes("B") && word.includes("X") && word.includes("Y")) {
        xyz.add(words[i]);}}


console.log(xyz)