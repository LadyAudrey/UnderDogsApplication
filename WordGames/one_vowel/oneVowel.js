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

const onlyA = [];
const onlyE = [];
const onlyI = [];
const onlyO = [];
const onlyU = [];
const onlyY = [];

//Classic For Loop with If and else if statements
for (var i=0; i<words.length; i++) {
    if (words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
            onlyA.push(words[i]);
    } else if (!words[i].includes("A") && words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
            onlyE.push(words[i]);
    } else if (!words[i].includes("A") && !words[i].includes("E") && words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
        onlyI.push(words[i]);
    } else if (!words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
        onlyO.push(words[i]);
    } else if (!words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && words[i].includes("U") && !words[i].includes("Y")) {
        onlyU.push(words[i]);
    } else if (!words[i].includes("A") && !words[i].includes("E") && !words[i].includes("I") && !words[i].includes("O") && !words[i].includes("U") && words[i].includes("Y")) {
    onlyY.push(words[i]);
}
}




// Using a switch statement
//stuff I deleted

console.log("The words who's only vowel is A are " + onlyA)
// console.log("The words who's only vowel is E are " + onlyE)
// console.log("The words who's only vowel is I are " + onlyI)
// console.log("The words who's only vowel is O are " + onlyO)
// console.log("The words who's only vowel is U are " + onlyU)
// console.log("The words who's only vowel is Y are " + onlyY)