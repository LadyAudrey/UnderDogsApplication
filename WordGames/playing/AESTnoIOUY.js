// program to find words that contain A, E, S T but no S, I, O, U or Y

const fs = require("fs");
const text = fs.readFileSync("/home/evergreen/UnderDogsAssignments/sowpods").toString("utf-8");
const words = text.split("\n");

const aestNoIOUY = [];

for (var i = 0; i < words.length - 1; i++) {
    if (words[i].includes("A") && words[i].includes("E") && words[i].includes("S") && words[i].includes("T") && !words[i].includes("I") && !words[i].includes("N") && !words[i].includes("O") && !words[i].includes("U") && !words[i].includes("Y")) {
        aestNoIOUY.push(words[i])
    }
}

console.log(aestNoIOUY)