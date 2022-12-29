// Program to find the shortest word that has all the vowels


// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');

const vowels = ["A", "E", "I", "O", "U", "Y"];
let allVowels = true;

for (var i=0; i < words.length - 1; i++) {
    let word = words[i];
    for (var j = 0; j < vowels.length; j++) {
        let vowel = vowels[j];
        if (!word.includes(vowel)) {
            allVowels = false;
            console.log(word);
        }
        if (allVowels === true) {
            console.log(word);
        }
    }
}
