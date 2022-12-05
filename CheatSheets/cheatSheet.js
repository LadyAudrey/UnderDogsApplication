//// doc to keep syntax handy and notes of how things work
// lists to keep on tap
const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"]

//// Method Calls (Typical function)
//// Guidelines: function calls use () and *not* []
// right way// countries[i].slice(0, 1);
// wrong way// countries[i].slice[0, 1];

//// Function practice
//Basic Function
// function anything() {
//     return "It's Tuesday, yay";
// } console.log(anything())

////Appropriate console.log hygiene
// console.log(countries[i].slice(0, 1) + "line 20");
// console.log(vowels[j] + "line 21");

//playing with a string and slice

let aString = "Hi, I'm a String";
for (i=0; i < aString.length -1; i++) {
    let newString = aString.pop(1);
    console.log(newString)
}
