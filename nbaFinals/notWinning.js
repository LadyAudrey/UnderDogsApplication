//// Which teams have made it to the NBA finals but have never won?

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

const solutionsArray = [];

// direct comparison of 2nd index to 1st indexes
// splitDataNBA.forEach(yearData){
//   const looser = yearData[2];
//   let notAWinner = true;
//   for (let i = 0; i < splitDataNBA.length; i++) {
//     const winner = splitDataNBA[1];
//     if (looser === winner) {
//       notAWinner = false;
//     }
//   }
//   if (notAWinner) {
//     solutionsArray.push(looser);
//   }
//   console.log(solutionsArray);
// };

const aFunction = () => {
  return 5;
};

const myArray = {
  1: 0,
  thisISHowYouAccess: "thisISTheData",
  forEach: function (x) {
    return x();
  },
};

console.log(myArray.forEach(aFunction));

// utilizing set as comparison
const winnersSet = new Set();

// higher order function === callbackfunction? * synonymous(ish)
// callback function is a type of higher order function
// not all higher order functions are callback functions

//homework - finish naiive implimentation above
//and add set implimentation option