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
let = ssNot = []
words.forEach(word => {
    if (word.includes("SS") && !word.includes("T") && word.includes("Z")) {
        ssNot.push(word)
    }
})
console.log(ssNot);