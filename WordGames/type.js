// Program to find all the words containing 'type'
// Importing the fs module
let fs = require("fs");
//const { type } = require("os");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

// Cycle through words and if "type" is in the index, add it to type
const typeWord = new Set;

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("TYPE")) {
        typeWord.add(words[i]);}}

console.log(typeWord)