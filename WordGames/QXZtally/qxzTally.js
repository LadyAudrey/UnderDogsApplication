// Program to find all the words containing B and X, that are less than 5 letters long
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
let q = 0;
let x = 0;
let z = 0;

for (let i = 0; i < words.length; i++) { 
    if (words[i].match(/[Q]/g)) {  
        //count the number of Qs in each index
        let lettersArray = words[i].split("");
        let qCounter = (lettersArray).filter(letter => letter.match(/[Q]/g));
            q += qCounter.length;
    }
}

for (let i = 0; i < words.length; i++) { 
    if (words[i].match(/[X]/g)) {  
        //count the number of Xs in each index
        let lettersArray = words[i].split("");
        let xCounter = (lettersArray).filter(letter => letter.match(/[X]/g));
            x += xCounter.length;
    }
}

for (let i = 0; i < words.length; i++) { 
    if (words[i].match(/[Z]/g)) {  
        //count the number of Qs in each index
        let lettersArray = words[i].split("");
        let zCounter = (lettersArray).filter(letter => letter.match(/[Z]/g));
            z += zCounter.length;
    }
}

// Compare q, x, and z to print out the least used letter
if (q < x && q < z) {
    console.log("Q is the least used letter")
}

if (x < q && x < z) {
    console.log("X is the least used letter")
}

if (z < x && z < q) {
    console.log("Z is the least used letter")
}
