//Write a function that takes as an argument a year
//and returns the winner of the NBA finals that year.

// Importing fs module
let fs = require("fs");

// Initializing the ReadFileLines with the file
const readFileLines = (filename) => {
  return fs.readFileSync(filename).toString("UTF8").split("\n");
};

const dataNBA = readFileLines(
  "/home/evergreen/UnderDogsAssignments/nbaFinals/nba_finals.csv"
);

const dataNBADict = {};

for (let i = 1; i < dataNBA.length; i++) {
  const indexSplit = dataNBA[i].split(",");
  const year = indexSplit[0];
  const teamName = indexSplit[1];
  dataNBADict[year] = teamName;
}

const findYearWinner = function (year) {
  return dataNBADict[year]
    ? dataNBADict[year]
    : "I do not have access to that information, sorry";
  //if year is key, console log year and winning team
  //   if (dataNBADict[year]) {
  //     return dataNBADict[year];
  //   }
  //   // if year is not a key, return "I do not have access to that information, sorry"
  //   else {
  //     return "I do not have access to that information, sorry";
  //   }
};

console.log(findYearWinner(2010));
console.log(findYearWinner(5));
console.log(findYearWinner(2450));
console.log(findYearWinner(2005));
console.log(findYearWinner("#$"));
