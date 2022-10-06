// Program to find all the words with no A's or E's and are at least 15 letters long
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
noEA = []
noEAPlus15 = []

for(let i = 0; i < words.length; i++) { 
    if (!words[i].includes("E") && !words[i].includes("A")) {
        noEA.push(words[i]);}}

for(let j = 0; j < noEA.length; j++) { 
    if (noEA[j].length >= 15 ) {
        noEAPlus15.push(noEA[j]);
    }}
console.log("The words containing no E's or A's and at least 15 letters long are " + noEAPlus15)