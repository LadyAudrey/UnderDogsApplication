// Program to find all the words containing "ghtly""
// Not currently working
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
ghtly = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("GHTLY")) {
        ghtly.push(words[i]);
    }

}
console.log("All the words containing ghtly are " + ghtly)