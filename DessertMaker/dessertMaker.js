const flavors = ["Cherry", "Pistachio", "Honey", "Raspberry"];
const desserts = ["Cake", "Pie", "Tart", "Pudding"];

const randomDessert = function () {
    let newDessert = "";
    let tastiness = Math.random();
    let dessert = Math.random();
    let randomFlavor = Math.ceil(tastiness * flavors.length - 1);
    let randomDessert = Math.ceil(dessert * desserts.length - 1);
    return "Your *amazing* dessert is " + flavors[randomFlavor] + " " + desserts[randomDessert]
}

console.log(randomDessert())

//Might need Math Fx's (math.floor/round/ceil/random)
//Math.ceil(x)

