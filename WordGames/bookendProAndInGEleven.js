// What are all of the words that start with “PRO”, end in “ING”,
// and are exactly 11 letters long?

// What are the shortest words that start with “PRO” and end in “ING”?
// Make sure your solution can handle ties.
// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");

// Calling the readFiles function with file name
let words = readFileLines("/home/evergreen/UnderDogsAssignments/sowpods");
const superMini = ["PROGRAMING", "STAY", "PROFILE"];

// function to find if string starts with "PRO"
const startsWithPro = function (index) {
  let pro = true;
  if (index.startsWith("PRO")) {
    pro = true;
  } else {
    pro = false;
  }
  return pro;
};
// function find if string ends with "ING"
const endsWithING = function (aString) {
  let ing = true;
  if (aString.endsWith("ING")) {
    ing = true;
  } else {
    ing = false;
  }
  return ing;
};

//function to find if a string is 11 characters long
const isElevenLong = function (aString) {
  let isEleven = aString.length === 11;
  return isEleven;
};

const solutionFound = [];
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (startsWithPro(word)) {
    if (endsWithING(word)) {
      solutionFound.push(word);
      //   if (isElevenLong(word)) {
      //     solutionFound.push(word);
      //   }
    }
  }
}

// loop through solutionFound, and compare index lengths, push to shortest array as appropriate
let shortestWordLength = solutionFound[0].length;
let shortestWordsArray = [];

// solutionFound.forEach((word) => {
//   if (word.length === shortestWordLength) {
//     shortestWordsArray.push(word);
//   }
//   if (word.length < shortestWordLength) {
//     shortestWordLength = word.length;
//     shortestWordsArray = [];
//     shortestWordsArray.push(word);
//   }
// });

const callItWhatYouWant = function (word) {
  if (word.length === shortestWordLength) {
    shortestWordsArray.push(word);
  }
  if (word.length < shortestWordLength) {
    shortestWordLength = word.length;
    shortestWordsArray = [];
    shortestWordsArray.push(word);
  }
};

// console.log(shortestWordsArray);
const myForEach = function (array, callBackFn) {
  for (let i = 0; i < array.length; i++) {
    callBackFn(array[i]);
  }
};

myForEach(solutionFound, callItWhatYouWant);
console.log(shortestWordsArray);
