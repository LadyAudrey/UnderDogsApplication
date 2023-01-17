const flavors = ["Cherry", "Pistachio", "Honey", "Raspberry"];
const desserts = ["Cake", "Pie", "Tart", "Pudding"];
const colors = ["purple", "blue", "red", "yellow", "green", "light-blue"];

const randomDessert = function () {
    let tastiness = Math.random();
    let dessert = Math.random();
    let randomFlavor = Math.ceil(tastiness * flavors.length - 1);
    let randomDessert = Math.ceil(dessert * desserts.length - 1);
    return "Your *amazing* dessert is " + flavors[randomFlavor] + " " + desserts[randomDessert]
}

const button = document.getElementById("doingit");
button.onclick = function () {
    const text = document.createElement("h2");
    text.textContent = randomDessert();
    document.body.appendChild(text);
    console.log(randomDessert());
}

// Creating a button to get Taylor Swift quotes
const quotesTS = [
    "People have not always been there for me but music always has"
];

const randomTSQuote = function () {
    let random = Math.random();
    let chosenQuote = Math.ceil(random * quotesTS.length - 1);
    return quotesTS[chosenQuote];
}

const button1 = document.getElementById("TaylorQuotes");
button1.onclick = function () {
    const text = document.createElement("h2");
    text.textContent = randomTSQuote();
    document.body.appendChild(text);
    let color = Math.random();
    let randomColor = Math.ceil(color * colors.length - 1);
    document.body.style.backgroundColor=colors[randomColor];
    console.log(randomTSQuote());
}

button1.style.padding="20px";
const doingIt = document.querySelector("doingit")
document.body.style.backgroundColor="green";
//Might need Math Fx's (math.floor/round/ceil/random)
//Math.ceil(x)y

function createMenuItem(name) {
    let li = document.createElement('menu');
    li.textContent = name;
    return li;
}
// get the ul#menu
const menu = document.querySelector('menu');

// add menu item
menu.appendChild(createMenuItem('Home'));
menu.appendChild(createMenuItem('Services'));
menu.appendChild(createMenuItem('About Us'));