const fs = require("fs");
const countriesTxt = fs.readFileSync("countries.txt").toString("utf-8");
const countriesArr = countriesTxt.split("\n");

var forbiddenLetters = ["A", "E", "I", "O", "U", "Y"];
var solutionArr = [];

for (var i = 0; i < countriesArr.length - 1; i++) {
    var country = countriesArr[i].toUpperCase();
    var isSolution = true;
    for (var j = 0; j < forbiddenLetters.length - 1; j++) {
        if (country.startsWith(forbiddenLetters[j]) || country.endsWith(forbiddenLetters)) {
            isSolution = false;
        }
    }
    if (isSolution === true) {
        solutionArr.push(country);
    }
}
console.log(solutionArr);

/////////////////////////////////////////////
// const fs = require("fs");
// const sowpodsTxt = fs.readFileSync("sowpods.txt").toString("utf-8");
// const sowpodsArr = sowpodsTxt.split("\n");

// var forbiddenLetters = ["A", "E", "I", "O"];
// var solutionArr = [];
// for (var i = 0; i < sowpodsArr.length - 1; i++) {
//     var word = sowpodsArr[i];
//     var isSolution = true;
//     for (var j = 0; j < forbiddenLetters.length - 1; j++) {
//         if (word.includes(forbiddenLetters[j])) {
//             isSolution = false;
//         }
//     }
//     if (isSolution === true) {
//         solutionArr.push(word);
//     }
// }
// console.log(solutionArr);