// Program to find all the words with no vowels
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

// creating lists to compare and add to as appropriate
let solutionFound = [];
const forbiddenLetters = ["A", "E", "I", "O", "U", "Y"];

// Cycle through words and append words that do not have AEIO or U in them to noVowels
for(let i = 0; i < words.length; i++) {
    let noVowels = true;
    let word = words[i];
    for (let j = 0; j <= word.length; j++) {
        let letter = word[j];
        if (forbiddenLetters.includes(letter)) {
            noVowels = false;
        }
        if (j === word.length - 1 && noVowels == true) {
            solutionFound.push(words[i]);
        }
    }
}

console.log(solutionFound);
const sortFunction = function(a, b) {
    if (a.length < b.length) {
        return a.length - b.length;
    }
    if (a.length == b.length) {
        return 0;
    }
    else {
        return a.length - b.length;
    }
}

let sortedNoVowels = solutionFound.sort(sortFunction);


console.log(sortedNoVowels.slice(sortedNoVowels.length -1 ));