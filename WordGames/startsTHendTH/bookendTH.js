// Program to find all the words that begin and end with TH

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

const bookendsTH = []
for (var i=0; i < words.length; i++) {
    if (words[i].slice(0, 2) == "TH" && words[i].slice(-2) == "TH") {
        bookendsTH.push(words[i]);
    }
}

console.log(bookendsTH)