//What are all of the words that can be made from only the letters in “RSTLNE”?
//Not all of those letters need to be used, and letters can be repeated
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

const desiredLetters = new Set(["R", "S", "T", "L", "N", "E"])
const possibleSolutions = [];
const solutionsArray = [];

for (const word of words) {
   let validWord = true;
   for (const letter of word) {
      if(!desiredLetters.has(letter)){
         validWord = false;
      }
   }
   if(validWord){
      possibleSolutions.push(word);
   }
}
if (possibleSolutions == []){
   return
}
possibleSolutions.sort((a, b) => {return a.length - b.length});
const longestLength = possibleSolutions[possibleSolutions.length - 1].length;

for(let i = possibleSolutions.length - 1; i >= 0; i--){
   if(possibleSolutions[i].length === longestLength){
      solutionsArray.push(possibleSolutions[i]);
   } else {
      break
   }
}

console.log(solutionsArray)