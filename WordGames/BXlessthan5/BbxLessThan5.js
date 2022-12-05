// Program to find all the words containing B and X, that are less than 5 letters long
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file

const readFileLines = function (filename) {
    let file = fs.readFileSync(filename);
    let fileAsString = file.toString();
    const formattedString = fileAsString.split('\n');
    // split('\n');
    console.log(formattedString);
};
readFileLines('/home/evergreen/UnderDogsAssignments/sowpods')

// const readFileLines = filename =>
//    fs.readFileSync(filename)
//    .toString('UTF8');
//    .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
// console.log(words)

// let bxLessThan5 = [];

//     for(let i = 0; i < words.length; i++) { 
//         if (words[i].includes("B") && words[i].includes("X") && words[i].length < 5) {
//             bxLessThan5.push(words[i]);
//         }
//     }

// console.log("All the words that contain B and X and < 5 letters long are " + bxLessThan5)