// Importing the fs module
let fs = require("fs");

// Intitializing the readFileLines with the file
const readFileLines = (filename) =>
  fs.readFileSync(filename).toString("UTF8").split("\n");

// Calling the readFiles function with file name
let words = readFileLines("/home/evergreen/UnderDogsAssignments/sowpods");
let miniWords = readFileLines(
  "/home/evergreen/UnderDogsAssignments/mini.sow.pods"
);

function letterCount(phrase) {
  // Write a function that takes a string phrase and returns a
  // dictionary containing counts of how many times every character
  // appears in phrase.
  var letterDict = {};
  for (var i = 0; i < phrase.length - 1; i++) {
    var letter = phrase[i];
    if (letter in letterDict) {
      letterDict[letter] += 1;
    } else {
      letterDict.letter = 1;
    }
  }
  return letterDict;
}

letterCount(
  "Today is when I realized how much my ADHd has effected my adult life."
);
