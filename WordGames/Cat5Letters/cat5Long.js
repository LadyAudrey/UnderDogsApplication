// Program to find all the words containing cat and are 5 letters long
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
cat = []
cat5 = []

for(let i = 0; i < words.length; i++) { 
    if (words[i].includes("CAT")) {
        cat.push(words[i]);
    }

for(let j = 0; j < cat.length; j++) { 
    let long = cat[j].length;
    if (long = 5) {
        cat5.push(cat[j]);
        }
        }

}
console.log(cat5)

//console.log("All the words with 2 consecutive Us are " + cat)}
