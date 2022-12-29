// Program to find all the words with only one vowel

// Importing the fs module
let fs = require("fs");
const { on } = require("stream");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

// Refactoring with set tactic

const vowels = ["A", "E", "I", "O", "U", "Y"];
const solutionsFound = new Set();

for (let i = 0; i < words.length; i++) {
   let vowelsUsed = new Set();
   const word = words[i];
   for (let j = 0; j < word.length; j++) {
      let word = words[i];
      const letter = word[j];
      if (vowels.includes(letter)) {
         vowelsUsed.add(letter);
      }
      if (j === word.length - 1) {
         if (vowelsUsed.size === 1) {
            solutionsFound.add(words[i]);
         }
      }
   }
}

console.log(solutionsFound);

///// Niave way
// const onlyA = [];
// const onlyE = [];
// const onlyI = [];
// const onlyO = [];
// const onlyU = [];
// const onlyY = [];

// // //Classic For Loop with If and else if statements
// for (var i=0; i<words.length; i++) {
//     if (words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
//             onlyA.push(words[i]);
//     } else if (!words[i].includes("A") && words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
//             onlyE.push(words[i]);
//     } else if (!words[i].includes("A") && !words[i].includes("E") && words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
//         onlyI.push(words[i]);
//     } else if (!words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
//         onlyO.push(words[i]);
//     } else if (!words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && words[i].includes("U") && !words[i].includes("Y")) {
//         onlyU.push(words[i]);
//     } else if (!words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && words[i].includes("Y")) {
//     onlyY.push(words[i]);
// }
// }
