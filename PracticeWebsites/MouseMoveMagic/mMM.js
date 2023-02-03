// Hw-finish this project and add a rainbow effect; as mouse goes down, rotates through shades
// potentially prints value to console
// potentially print difference between current even local and previous event local

const box = document.getElementById("box");
let opacity = 0.5;
let red = 0;
let green = 0;
let blue = 0;

document.getElementById("box").addEventListener("mousemove", function (e) {
  box.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  //if client x axis goes down, opacity decreases and if client x axis goes up, opacity increases
  let xPos = e.clientX;
  let yPos = e.clientY;
  opacity = xPos / 1000;
  red = yPos / 3;
  green = xPos / 4;
  blue = xPos / 4;
});

let xPosClickDown = 0;
let yPosClickDown = 0;
let xPosClickUp = 0;
let yPosClickUp = 0;

let xUsed = 0;
let yUsed = 0;

let lastClickPosition = [];

let mouseDown = document.addEventListener("mousedown", function (e) {
  console.log((xPosClickDown = e.clientX));
  console.log((yPosClickDown = e.clientY));
  lastClickPosition = [xPosClickDown, yPosClickDown];
});

let hypotenuseP = document.getElementById("hypotenuse");
let mouseUp = document.addEventListener("mouseup", function (e) {
  console.log((xPosClickUp = e.clientX));
  console.log((yPosClickUp = e.clientY));
  let absX = Math.abs(xPosClickDown - xPosClickUp);
  let absY = Math.abs(yPosClickDown - yPosClickUp);

  const distance = Math.hypot(absX, absY);
  hypotenuseP.textContent =
    "The area of the square you drew is " + distance * distance + " pixels";

  // box div to hold the shape and apply CSS
  this.getElementById("shape").style.width = distance + "px";
  this.getElementById("shape").style.height = distance + "px";
  this.getElementById("shape").style.backgroundColor =
    "rgba(255, 255, 255, .5)";

  //
  if (xPosClickDown < xPosClickUp) {
    this.getElementById("shape").style.left = xPosClickDown + "px";
    xUsed = xPosClickDown;
  } else {
    this.getElementById("shape").style.left = xPosClickUp + "px";
    xUsed = xPosClickUp;
  }

  if (yPosClickUp < yPosClickDown) {
    this.getElementById("shape").style.top = yPosClickUp + "px";
    yUsed = yPosClickUp;
  } else {
    this.getElementById("shape").style.top = yPosClickDown + "px";
    yUsed = yPosClickUp;
  }
});

// listen for key a strike and shift shape placement
document.addEventListener("keydown", (e) => {
  // use arrow keys to move shape
  if (e.key === "a") {
    xUsed = xUsed - 5;
    document.getElementById("shape").style.left = xUsed + "px";
  }
});

// listen for key d strike and shift shape placement
document.addEventListener("keydown", (e) => {
  // use arrow keys to move shape
  if (e.key === "d") {
    xUsed = xUsed + 5;
    document.getElementById("shape").style.left = xUsed + "px";
  }
});

// listen for key s strike and shift shape placement
document.addEventListener("keydown", (e) => {
  // use arrow keys to move shape
  if (e.key === "s") {
    yUsed = yUsed + 5;
    document.getElementById("shape").style.top = yUsed + "px";
  }
});

// listen for key w strike and shift shape placement
document.addEventListener("keydown", (e) => {
  // use arrow keys to move shape
  if (e.key === "w") {
    yUsed = yUsed - 5;
    document.getElementById("shape").style.top = yUsed + "px";
  }
});

