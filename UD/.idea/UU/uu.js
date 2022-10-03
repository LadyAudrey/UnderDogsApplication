// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UD/.idea/SowPods');
uu = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("UU")) {
        uu.push(words[i]);
    }

}
console.log("All the words with 2 consecutive Us are " + uu)