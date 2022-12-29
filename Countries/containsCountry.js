// There is at least one country name that contains another country name. Find all of these cases.

const fs = require("fs");
const countriesTxt = fs.readFileSync("/home/evergreen/UnderDogsAssignments/Countries/countries.txt").toString("utf-8");
const countriesArr = countriesTxt.split("\n");

const solutionFound = new Map();
for (let i = 0; i < countriesArr.length; i++) {
    let countryA = countriesArr[i].toUpperCase();
    for (let j = 0; j < countriesArr.length; j++) {
        let countryB = countriesArr[j].toUpperCase();
        if (countryA.includes(countryB) && countryA !== countryB){
                solutionFound.set(countryA, countryB);
            }
    }
}

console.log(solutionFound);