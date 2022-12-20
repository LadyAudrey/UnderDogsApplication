// What are all of the words that have only “U”s for vowels?

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

let onlyU = [];
const vowels = ["A", "E", "I", "O", "Y"]

for (let i = 0; i < words.length; i++) {
    if (!words[i].includes("A") && !words[i].includes("E") 
    && !words[i].includes("I") && !words[i].includes("O") && words[i]. includes("U") 
    && !words[i]. includes("Y")) {
            onlyU.push(words[i]);
    }
}

console.log(onlyU);