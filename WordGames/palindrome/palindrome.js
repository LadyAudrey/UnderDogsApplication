// Program to find all the words containing two consecutive U's
// Not Currently Working
// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines = filename =>
   fs.readFileSync(filename)
   .toString('UTF8')
   .split('\n');

// Calling the readFiles function with file name
let words = readFileLines('/home/evergreen/UnderDogsAssignments/sowpods');
let palindromes = []
let longestPalindrome = ['AA']

// Cycle through words and find all the palindromes by comparing last letter for first letters
for (let i = 0; i < words.length - 2; i++) {
    let reverseWord = words[i].split('').reverse().join('');
    if (words[i] === reverseWord) {
        palindromes.push(words[i])
    }}

// Find the longest index in palindrome
for(let j = 0; j < words.length; j++) {
    if (palindromes[j].length > longestPalindrome.length) {
        let longestPalindrome = palindromes[j];
    }}


console.log("All the words that are palindromes are " + palindromes)
console.log("The longest palindrome is " + longestPalindrome)