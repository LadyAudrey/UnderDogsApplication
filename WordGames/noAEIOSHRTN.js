// What are all of the words that can be made without the letters in “AEIOSHRTN”
// (in other words, without the most common letters)?
// Not all of those letters need to be used, and letters can be repeated.

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
let miniWords = readFileLines('/home/evergreen/UnderDogsAssignments/mini.sow.pods');
const superMini = ["STAY", "REST", "NEST", "PROFILE", "ABCDEFGHIJ", "PROGRAMING"];

const desiredLetters = new Set(["A", "E", "I", "O", "S", "H", "R", "T", "N"])
const solutionFound = [];

for(let i = 0; i < words.length; i ++){
    let isValidWord = true;
    let word = words[i];
    for(let j = 0; j < word.length; j++){
        let letter = word[j];
        if(desiredLetters.has(letter)){
            isValidWord = false;
        }
    }
    if (isValidWord){
        solutionFound.push(word);
    }
}

const mySort = function (a, b){
    return a.length - b.length;
}

solutionFound.sort(mySort)
const longestWord = solutionFound[solutionFound.length -1].length;

const solutionArray = [];

for(let i = 0; i < solutionFound.length; i++){
    let word = solutionFound[i];
    if( word.length === longestWord){
        solutionArray.push(word)
    }
}

console.log(solutionArray)

// Focus: writing functions (different than higher order functions)
// Write a function that takes a string substring as an argument and returns
// an array of all of the words that contain that substring (the substring can appear anywhere in the word).