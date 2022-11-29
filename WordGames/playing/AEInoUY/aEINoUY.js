// Program to find all the words containing A, E and I but no U or Y's and 14 letters long
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

const aEInoOUY = []

for (var i=0; i<words.length; i++) {
   if (words[i].includes("A") && words[i].includes("E") && words[i].includes("I") && words[i].includes("E") && words[i].includes("I") && !words[i].includes("O") && words[i].includes("U") && !words[i].includes("Y")&& words[i].length==14){
      aEInoOUY.push(words[i]);
   }
}
console.log("All the words containing A, E, I, no U, Y or S and 14 letters long are " + aEInoOUY);

