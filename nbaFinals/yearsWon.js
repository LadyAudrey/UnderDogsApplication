////Write a function that takes as an argument a year
//and returns the winner of the NBA finals that year.

// Importing fs module
let fs = require("fs");

// Initializing the ReadFileLines with the file
const readFileLines = (filename) => {
  return fs.readFileSync(filename).toString("UTF8").split("\r\n");
};

const dataNBA = readFileLines(
  "/home/evergreen/UnderDogsAssignments/nbaFinals/nba_finals.csv"
);

const splitDataNBA = [];

for (let i = 0; i < dataNBA.length; i++) {
  const splitDataNBAIndex = dataNBA[i].split(",");
  splitDataNBA.push(splitDataNBAIndex);
}

const winnerForYear = (year) => {
  for (let i = 0; i < splitDataNBA.length; i++) {
    if (year === splitDataNBA[i][0]) {
      return splitDataNBA[i][1];
    }
  }
  return "we do not have data for that year, sorry!";
};


