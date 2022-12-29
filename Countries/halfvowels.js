// What country names are > 50% vowels?
const fs = require("fs");
const countriesTxt = fs.readFileSync("/home/evergreen/UnderDogsAssignments/Countries/countries.txt").toString("utf-8");
const countriesArr = countriesTxt.split("\n");

const solutionSet = new Set ();
const vowels = ["A", "E", "I", "O", "U", "Y"]
const vowelSet = new Set (vowels);

countriesArr.forEach(country => {
    let vowelCount = 0;
    for (let i = 0; i < country.length; i++) {
        let countryUpper = country.toUpperCase();
        if (vowelSet.has(countryUpper[i])) {
            vowelCount++;
        }
    }
    if  (vowelCount > country.length / 2) {
        solutionSet.add(country);
    }
});

console.log(solutionSet);