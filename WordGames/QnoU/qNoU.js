// Program to find all the words with Q's but no U's
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
console.log(typeof(words))
qNoUs = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("Q") && !words[i].includes("U")) {
        qNoUs.push(words[i]);
    }
}

console.log("The words that contains Q's but not U's are " + qNoUs)