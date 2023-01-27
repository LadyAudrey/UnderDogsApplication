// Write a function that takes a string prefix as the first argument,
// a string suffix as the second argument, and an integer length as the third argument.
// It should return an array of all of the words that start with that prefix,
// end with that suffix, and are that length.

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

const solutionFound = [];

const prefixSuffixLength = (prefix, suffix, length, array) => {
  array.forEach((word) => {
    if (
      word.startsWith(prefix) &&
      word.endsWith(suffix) &&
      word.length === length
    ) {
      solutionFound.push(word);
    }
  });
  return solutionFound;
};

console.log(prefixSuffixLength("PRO", "ING", 11, words));
