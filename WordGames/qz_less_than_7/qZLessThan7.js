// What are all of the words that start with a Q, end with a Z
//and are less than or equal to 6 letters long? 

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

const QZ6 = [];
for(var i = 0; i<words.length; i++) {
   if (words[i].charAt(0) == "Q" && words[i].charAt(words[i].length-1) == "Z" && words[i].length < 7) {
      console.log(words[i]);
      QZ6.push(words[i]);
   }
}

console.log(QZ6);