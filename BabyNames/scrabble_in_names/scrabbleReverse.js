// Find the name that when reversed is a legal scrabble word with array
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// // beginning of functions timer
// console.time();

// // Calling the readFiles function with file name to create names array
// let names = readFileLines('baby_names_2020_short.txt');

// // Calling the readFiles function with file name to create words array
// let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

// const nameScrabble = [];

// for (var word = 0; word < words.length; word++) {
//     for (var name = 0; name < names.length; name++) {
//         let reversedName = names[name].toUpperCase()
//         .split("")
//         .reverse()
//         .join("");
//         if (words[word] === reversedName) {
//             nameScrabble.push(names[name]);
//             nameScrabble.push(words[word]);
//         }
//     }
// }

// console.log(nameScrabble);
// console.timeEnd();

// beginning of functions timer
console.time();

// Calling the readFiles function with file name to create names array
let names = readFileLines('baby_names_2020_short.txt');
let namesSet = new Set(names);

// Calling the readFiles function with file name to create words array
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
let wordsSet = new Set(words);

const nameScrabble = [];

namesSet.forEach(element => {
    let reversedName = element.toUpperCase()
        .split("")
        .reverse()
        .join("");
    if (wordsSet.has(reversedName)) {
        console.log(reversedName);
        nameScrabble.push(element);
    }

}
);

// {
//     console.log(wordsSet[word]);
//     for (var name = 0; name < namesSet.length; name++) {
//         let reversedName = namesSet[name].toUpperCase()
//         .split("")
//         .reverse()
//         .join("");
//         if (wordSet[word] === reversedName) {
//             nameScrabble.push(names[name]);
//             nameScrabble.push(words[word]);
//         }
//     }
// }

console.log(nameScrabble);
console.timeEnd();