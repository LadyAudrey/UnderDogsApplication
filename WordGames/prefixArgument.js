//Write a function that takes a string prefix as an argument
//and returns an array of all of the words that start with that
//prefix (the prefix has to be at the beginning of the word).

// Importing the fs module
const { checkPrime } = require("crypto");
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");

// Calling the readFiles function with file name
let words = readFileLines("/home/evergreen/UnderDogsAssignments/sowpods");
let miniWords = readFileLines(
  "/home/evergreen/UnderDogsAssignments/mini.sow.pods"
);
const superMini = [
  "STAY",
  "REST",
  "NEST",
  "PROFILE",
  "ABCDEFGHIJ",
  "ANGULAR",
  "PROGRAMING",
];
const solutionArray = [];

//function to compare a string against a substring for prefixes
const prefixFinder = (prefix, characters) => {
  if (characters.startsWith(prefix)) {
    return true;
  }
  return false;
};

//looping through an array and return a index
const indexFinder = (prefix, array) => {
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (prefixFinder(prefix, word)) {
      solutionArray.push(word);
    }
  }
  return solutionArray;
};

console.log(indexFinder("UND", words));

