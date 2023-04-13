// JS for scoreboard mockup
// getting element ID and assigning it to a variable to use  later
const homeCounter = document.getElementById("homeCounter");
const visitingCounter = document.getElementById("visitingCounter");

// creating values for Home and Visiting teams' counters
let home = 0;
let visit = 0;

// //  functions to hook up to buttons to change score
const addingHome = (count) => {
  home = home + count;
  homeCounter.textContent = home;
};

const addingVisit = (count) => {
  visit = visit + count;
  visitingCounter.textContent = visit;
};
