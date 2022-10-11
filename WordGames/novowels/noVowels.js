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
noVowels = []

// Cycle through words and append words that do not have AEIO or U in them to noVowels
for(let i = 0; i < words.length; i++) {
    if (!words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y"))
        noVowels.push(words[i]);}


console.log("The words containing no vowels are " + noVowels)

//setting variables to compare index in noVowels
let longestNoVowels = "SH";
for (let j = 0; j < noVowels.length; j++) {
    if (noVowels[j].length > longestNoVowels.length) {
        longestNoVowels = noVowels[j];
    } else {
        continue
    }}
console.log("The longest word with no vowels is " + longestNoVowels)