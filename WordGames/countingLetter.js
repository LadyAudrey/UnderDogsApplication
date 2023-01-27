// Write a function that takes a string word as an argument and returns a count of all of the “A”s in that string.

// Importing the fs module
const { checkPrime } = require("crypto");
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");

// Calling the readFiles function with file name
let wordsArray = readFileLines("/home/evergreen/UnderDogsAssignments/sowpods");
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

const howManyAs = (word, character) => {
  let upperWord = word.toUpperCase();
  let upperLetter = character.toUpperCase();
  const wordArray = Array.from(upperWord);
  let counter = 0;
  for (const letter of wordArray) {
    if (letter.includes(upperLetter)) {
      counter++;
    }
  }
  return counter;
};

console.log(howManyAs("aardvark", "a"));
