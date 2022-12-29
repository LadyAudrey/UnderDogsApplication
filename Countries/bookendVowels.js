// What countries both begin and end with a vowel?

const fs = require("fs");
const countriesTxt = fs.readFileSync("./countries.txt").toString("utf-8");
const countriesArr = countriesTxt.split("\n");

var desiredLetters = ["A", "E", "I", "O", "U", "Y"];
var solutionArr = [];

const word = "ANGULAR";
console.log(desiredLetters.includes(word[0]));

countriesArr.forEach(element => {
    var country = element.toUpperCase();
    if (desiredLetters.includes(country.substring(0, 1)) && (desiredLetters.includes(country.substring(country.length -1)))) {
        solutionArr.push(country);
    }
})
console.log(solutionArr)