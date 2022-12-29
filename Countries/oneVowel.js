// What countries use only one vowel in their name (the vowel can be used multiple times)

const fs = require("fs");
const countriesTxt = fs.readFileSync("/home/evergreen/UnderDogsAssignments/Countries/countries.txt").toString("utf-8");
const countriesArr = countriesTxt.split("\n");

// Variable for boolean logic
let oneVowel = false;
let solutionFound = new Set ();
// creating a set to hold Vowel characters
let vowelArr = ["A", "E", "I", "O", "U", "Y"]
let vowelSet = new Set (vowelArr);

const onlyOneVowel = function(a) {
    for (let i = 0; i < countriesArr.length; i++) {
        let vowelsUsedSet = new Set ();
        let countryUpperCase = countriesArr[i].toUpperCase();
        for (j = 0; j < countryUpperCase.length; j++){
                    if (vowelSet.has(countryUpperCase[j])){
                        vowelsUsedSet.add(countryUpperCase[j]);
                        if (j === countryUpperCase.length -1 ) {
                            if (vowelsUsedSet.size === 1) {
                                solutionFound.add(countriesArr[i]);
                            }
                        }
                    }
                }
        } console.log(solutionFound);
}
console.log(onlyOneVowel(countriesArr));

// for (let i = 0; i < countriesArr.length; i++) {
//     let vowelsUsedSet = new Set ();
//     let countryUpperCase = countriesArr[i].toUpperCase();
//     for (j = 0; j < countryUpperCase.length; j++){
//         if (vowelSet.has(countryUpperCase[j])){
//             vowelsUsedSet.add(countryUpperCase[j]);
//             if (j === countryUpperCase.length -1 ) {
//                 if (vowelsUsedSet.size === 1) {
//                     solutionFound.add(countriesArr[i]);
//                 }
//             }
//         }
//     }
// }

// console.log(solutionFound)