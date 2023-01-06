// What is the shortest country name? Make sure your solution can handle ties.
// to be reviewed with Bradley next week

const fs = require("fs");
const countriesTxt = fs.readFileSync("/home/evergreen/UnderDogsAssignments/Countries/countries.txt").toString("utf-8");
const countriesArr = countriesTxt.split("\n");

const exampleArray = ["ABC", "D", "EFGH", "IJ"];

// Using sort to find the shortest indexes
let sortingFunction = function (a, b) {
    console.log(a + " line 11");
    console.log(a.length + " line 12");
        console.log(b + " line 13")
        console.log(b.length + " line 14");
        // return a.length - b.length;
};

sortingFunction(exampleArray[0], exampleArray[1]);

// using sort to use the sortingfunction on countriesArr

// let sortedCountriesArr = countriesArr.sort(sortingFunction);

//creating a modified function of sorting
// const modifiedSort = function (array, customSort) {
//     for (let i = 0; i < array.length - 1; i++) {
//         const firstCountry = array[i];
//         console.log(firstCountry + " firstCountry")
//         const secondCountry = array[i + 1];
//         console.log(secondCountry + " secondCountry")
//         let myNewString = secondCountry + " line 29";
//         customSort(firstCountry, myNewString);
//             // console.log(firstCountry + " line 23");
//             // console.log(secondCountry + " line 24");
//             // if (a.length <= b.length)
//             // console.log("Keep the Same- firstCountry <= second Country")
//                 // console.log("Swap countries- firstCountry > second Country")
//     }
// }

// modifiedSort(exampleArray, sortingFunction);
// console.log(modifiedSort(countriesArr, sortingFunction));

// // creating a set to hold the shortest countries after it's been sorted
// let shortestCountriesSet = new Set ();

// for (let i = 0; i < sortedCountriesArr.length; i++) {
//     if (sortedCountriesArr[i].length === sortedCountriesArr[0].length) {
//         shortestCountriesSet.add(sortedCountriesArr[i]);
//     }
// }

// console.log(shortestCountriesSet);

// mapping tactic
// niave tactic
// let shortest = countriesArr[0];

// countriesArr.forEach(element => {
//     if (shortest.length > element.length) {
//         shortest = element;
//     }
// });
