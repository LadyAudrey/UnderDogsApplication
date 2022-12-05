// This file needs to be in the same folder as a copy of sowpods.txt
// to run.
const fs = require("fs");
const text = fs.readFileSync("/home/evergreen/UnderDogsAssignments/sowpods").toString("utf-8");
const words = text.split("\n");

var specialLetters = "QXYZ";
var answers = [];

for (let i = 0; i < words.length - 1; i++) {
    var isAMatch = true;
    for (let j = 0; j < specialLetters.length - 1; j++) {
	    if (!words[i].includes(specialLetters[j])) {
	        isAMatch = false;
	    }
    }
    if (isAMatch) {
	    answers.push(words[i]);
    }
}

for (let i = 0; i < answers.length; i++) {
    console.log(answers[i]);
}

// What does this code do (what question is it answering)?
// Answer: I believe the intent is to create an array of all the words containing Q, X, Y and Z.
////However, the words in answers does not have any Z's (checked; there are no words that contain Q, X Y *and* Z
////if the program actually adhered to those guidelines answers would be empty
////I wonder if this is an issue of treating specialLetters like an array, when it is a string
////and if the program is achieving it's desired goal.

// What is the data type of `text`? String

// What data type is returned by `text.split("\n")`? Array (object)

// What data type is returned by the includes method? Boolean

// How many times does line 10 (the outer for loop) execute, in terms of the data being used? 267750
// How many times does line 12 (the inner for loop) execute, in terms of the data being used? 803250
// How many times does line 18 (`answers.push(words[i])`) execute, in terms of the data being used? 4