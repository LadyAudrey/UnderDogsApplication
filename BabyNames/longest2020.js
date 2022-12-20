// finding the longest name(s)
// Importing the fs module
let fs = require("fs");
const { stringify } = require("querystring");

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let names = readFileLines('BabyNames/baby_names_2020_short.txt');

let longest = names[0];
let longNames = new Set();

for (var name = 0; name < names.length; name++) {
    if (longest.length < names[name].length) {
        longest = names[name];
        longNames.clear();
        longNames.add(names[name]);
    }
    if (longest.length === names[name].length) {
        longNames.add(names[name]);
    }
}

console.log(longNames)
