//What are the longest countries that don't contain an E? Make sure your solution can handle ties. 
const fs = require("fs");
const countriesTxt = fs.readFileSync("Countries/countries.txt").toString("utf-8");
let countriesArr = countriesTxt.split("\n");

// an array to add potential answers to and a Set to add actual answers to
const cleanOfForbiddenLetters = [];
const solutionFoundSet = new Set();

// a sorting function to put data into sort method later
const sortingFunction = function (a, b) {
    return a.length - b.length;
}

// a function to find countries without specified letters, and then find the longest ones
const sansForbiddenLongest = function(notTheseLetters, array) {
    // creating a variable to contain the specified undesirable letters\
    let notTheseLettersString = notTheseLetters.toString().toUpperCase();
    let notTheseLettersArray = Array.from(notTheseLettersString);
    let undesirable = new Set(notTheseLettersArray);
    // looping through array, selecting indexes that are sans undesirable letters
    // using boolean logic to add appropriate index to cleanOfForbiddenLetters
    for (let i = 0; i < array.length; i++) {
        let notForbidden = true;
        let country = array[i].toUpperCase();
        for(let j = 0; j < country.length; j++) {
            const letter = country[j];
            if (undesirable.has(letter)) {
                notForbidden = false;
            }
        }
        if (notForbidden === true) {
        cleanOfForbiddenLetters.push(array[i]);
        console.log(cleanOfForbiddenLetters)
    }
    // // sorting potential solutions array
    // // finding the longest ones by comparison and adding them to Solutions array
    } const sortedCleanOfForbiddenLetters = cleanOfForbiddenLetters.sort(sortingFunction);
    for (let i = 0; i < sortedCleanOfForbiddenLetters.length; i++) {
        let country = sortedCleanOfForbiddenLetters[i];
        if (country.length == sortedCleanOfForbiddenLetters[sortedCleanOfForbiddenLetters.length - 1].length) {
            solutionFoundSet.add(country);
        }
    }
    console.log(solutionFoundSet)
    return solutionFoundSet
}

// the first argument is the undesirable letters and the second is the array we're passing through
console.log(sansForbiddenLongest(["X", "A"], countriesArr));

// const sansEArr = [];
// // find all country names sans E
// for (let i = 0; i < countriesArr.length; i++) {
//     const country = countriesArr[i];
//     if (!country.includes("E") && !country.includes("e")) {
//         sansEArr.push(countriesArr[i]);
//     }
// }

// const sortedSansEArr = sansEArr.sort(sortingFunction);
// const solutionFound = new Set();

// for (let j = 0; j < sortedSansEArr.length; j++) {
//     const country = sortedSansEArr[j];
//     if (country.length == sortedSansEArr[sortedSansEArr.length - 1].length) {
//         solutionFound.add(country);
//     }
// }

// console.log(solutionFound);
//refactor as function that takes input for the letter that's excluded (any datatype desired)
//returns longest countries that has letters
//refactor to reject multiple letters


// sort sans E names and find the longest ones

//// THIS WEEK:
///// GOAL: Systematic debugging
//-- minimal set of inputs, console.logs methodically to find the dysfunctional line
//