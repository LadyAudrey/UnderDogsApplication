// What are all of the words that both start with a “TH” and end with a “TH”?

// Importing the fs module
let fs = require("fs");
const { on } = require("stream");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

let bookendTH = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("TH") && words[i].endsWith("TH")) {
        bookendTH.push(words[i]);
    }
}

console.log(bookendTH);