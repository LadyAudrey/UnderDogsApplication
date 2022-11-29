// Program to find all the words containing QYZ and >= 10 letters
//not currently working right
// Importing the fs module
const { count } = require("console");
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

const QYZ10 = [];
for (var i=0; i<words.length; i++) {
    if (words[i].includes("Q") && words[i].includes("Y") && words[i].includes("Z") && words[i].length >= 10) {
        QYZ10.push(words[i]);
    }
}
console.log("All the words containing Q, Y and Z, that are also ten more letters long" + QYZ10)