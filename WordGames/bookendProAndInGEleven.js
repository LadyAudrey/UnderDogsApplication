// What are all of the words that start with “PRO”, end in “ING”,
// and are exactly 11 letters long?
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
const superMini = ["PROGRAMING", "STAY", "PROFILE"]

// function to find if string starts with "PRO"
const startsWithPro = function (index) {
    let pro = true;
    if(index.startsWith("PRO")){
        pro = true;
    }
    else {
        pro = false;
    }
    return pro;
}
// function find if string ends with "ING"
const endsWithING = function(aString) {
    let ing = true;
    if(aString.endsWith("ING")){
        ing = true;
    } else {
        ing = false;
    }
    return ing;
}

//function to find if a string is 11 characters long
const isElevenLong = function(aString){
    let eleven = true;
    if(aString.length === 11){
        eleven = true;
    } else {
        eleven = false;
    }
    return eleven;
}

const solutionFound = [];
words.forEach(element => {
    if (startsWithPro(element)){
        if(endsWithING(element)){
            if(isElevenLong(element)){
                solutionFound.push(element)
                console.log(element)
            }
        }
    }
    return solutionFound;
});