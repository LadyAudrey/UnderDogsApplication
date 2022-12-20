// Program to create a list of all countries containing "United"

// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let countries = readFileLines('/home/evergreen/UnderDogsAssignments/Countries/countries.txt');

// const united = [];
// for (var i = 0; i < countries.length -1; i++) {
//    if (countries[i].includes("United")) {
//       united.push(countries[i]);
//    }
// }

// console.log(united)

const states = [];
for (var i = 0; i < countries.length -1; i++) {
   if (countries[i].includes("States")) {
      states.push(countries[i]);
   }
}

console.log(states)