// A website for buttons that increment a number up and down and change the gradient

// number variable that increments with button clicking
let number = 50;
// opacity that increments with button clicking
let opacity = 0.50;
let green = 175;
let color = `rgba(76, ${green}, 80, ${opacity})`;
// let newColor = "rgba("76" + "green" + "80" + "opacity";
// Play more in the browser console and node


const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.onclick = function () {
    const text = document.createElement("h2");
    number = number + 1;
    text.textContent = number;
    document.body.appendChild(text);
    opacity = opacity + 0.01;
    color = `rgba(76, ${green}, 80, ${opacity})`;
    document.body.style.backgroundColor=color;
    console.log(number);
}

const buttonSub = document.getElementById("buttonSub");
buttonSub.onclick = function () {
    const text = document.createElement("h2");
    number = number - 1;
    text.textContent = number;
    document.body.appendChild(text);
    opacity = opacity - 0.01;
    color = `rgba(76, ${green}, 80, ${opacity})`;
    document.body.style.backgroundColor=color;
    console.log(number);
}

const moreGreen = document.getElementById("moreGreen");
moreGreen.onclick = function () {
    green = green + 5;;
    color = `rgba(76, ${green}, 80, ${opacity})`;
    document.body.style.backgroundColor=color;
    if (green >= 255) {
        const maxGreen = document.createElement("h2");
        maxGreen.textContent = "We are already maxed out with the Green!";
        document.body.appendChild(maxGreen);
    }
}

const lessGreen = document.getElementById("lessGreen");
lessGreen.onclick = function () {
    green = green - 5;
    color = `rgba(76, ${green}, 80, ${opacity})`;
    document.body.style.backgroundColor=color;
    if (green <= 0) {
        const noGreen = document.createElement("h2");
        noGreen.textContent = "We don't have any Green to reduce!";
        document.body.appendChild(noGreen);
    }
}

// read up on template literal strings (interpolation)