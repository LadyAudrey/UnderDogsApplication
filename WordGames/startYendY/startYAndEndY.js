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

let startsAndEndsWithY = []
for(let i = 0; i < words.length; i++) {
    let first = words[i].charAt(0);
    let last = words[i].charAt(words[i].length - 1);
    if (first == 'Y') {
        if (last == 'Y') {
            startsAndEndsWithY.push(words[i])
    }
}}

console.log("All the words that start and end with Y are " + startsAndEndsWithY)