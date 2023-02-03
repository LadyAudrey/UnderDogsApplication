const breathingID = document.getElementById("breathing");

let i = 0;

const myCallback = () => {
  if (i === 0) {
    breathingID.style.transform = "scale(2)";
    breathingID.style.background = "red";
    i++;
  } else if (i === 1) {
    breathingID.style.transform = "scale(.5)";
    breathingID.style.background = "blue";
    i--;
  }
};

const breathing = window.setInterval(myCallback, 600);
