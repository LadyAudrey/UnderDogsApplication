//// What are all of the words that have only “U”s for vowels?
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

// conditional of true that changes to false if letter included in forbidden letterslet onlyU = true;
const solutionFound = [];
const forbiddenLettersSet = new Set(["A", "E", "I", "O", "Y"]);

// refactoring for a function
// isOnlyU accept a string as argument and returns a boolean value (onlyU)
// returns true if the only vowels are U's
const isOnlyU = function(word){
    let onlyU = true;
    for (let j = 0; j < word.length; j++) {
        const letter = word[j];
        //compare against forbidden letters array
        if (forbiddenLettersSet.has(letter)) {
            // change onlyU conditional as appropriate
            onlyU = false;
            break
        }
    }
    return onlyU;
}

for (let k = 0; k < words.length; k++) {
    const wordTest = words[k];
    if (isOnlyU(wordTest)) {
        solutionFound.push(words[k]);
    }
}

console.log(solutionFound)




// // for each words
// for (let i = 0; i < words.length; i++) {
//     let onlyU = true;
//     const word = words[i];
//     //for each letter
//     for (let j = 0; j < word.length; j++) {
//         const letter = word[j];
//         //compare against forbidden letters array
//         if (forbiddenLettersSet.has(letter)) {
//             // change onlyU conditional as appropriate
//             onlyU = false;
//             break
//         }
//     }
//     // test if onlyU is till true and add to solutionFound
//     if (onlyU === true){
//         solutionFound.push(word);
//     }
// }

// console.log(solutionFound);