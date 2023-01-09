// What are all of the words that have only “E”s for vowels and are at least 15 letters long?

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

const potentialSolutions = [];
const wordPlayFunction = function (forbiddenLetters, wordsArray, lengthFunction) {
const potentialSolutions = [];
const forbiddenLettersSet = new Set(forbiddenLetters);
for(let i = 0; i < wordsArray.length; i++){
    let onlyE = true;
    const word = wordsArray[i].toUpperCase();
    for(let j = 0; j < word.length ; j++){
        const letter = word[j];
        if(forbiddenLettersSet.has(letter)){
            onlyE = false;
        }
    }
    if(onlyE && lengthFunction(word.length + 7)){
        potentialSolutions.push(wordsArray[i]);
    }
}return potentialSolutions
}

console.log(wordPlayFunction(["A", "I", "O", "U", "Y"], words, v => v >= 15));