// finding the shortest name
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let names = readFileLines('BabyNames/baby_names_2020_short.txt');

// variable set to compare the length of names against and update as necessary
let shortest = names[0];
// array to collect the shortest names and then clears and replaces if a shorter name is found
let shortNames = [];

for (var name = 0; name < names.length; name++) {
    //comparing the length of designated place holder against the length of each array index
    if (shortest.length > names[name].length) {
        // if above condition is met, update shortest to the new index,
        // clear shortNames and add the index to the empty array
        shortest = names[name];
        shortNames = [];
        shortNames.push(names[name]);
    } else if (names[name].length === shortest.length && !shortNames.includes(names[name])) {
        // if index is the same length as the designated placeholder, add index to shortNames
        shortNames.push(names[name]);
    }
}

console.log("The shortest name(s) are " + shortNames)