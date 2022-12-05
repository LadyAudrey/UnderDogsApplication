// doc to explore different types of functions

// //Basic Function
// let a = 1;
// let b = 2
// function basic(a, b) {
//     return a + b;
// }
// console.log(basic(a, b))

// //Nesting Functions
// function nest(a, b) {
//     return a + b + " line 12";
// }

// console.log(nest(basic, 0))

// Function Expression or Anonymous Function
const anonymousFunction = function(x, z) {
    return x + z;
}

// console.log(anonymousFunction(1,1))

const playing = anonymousFunction(7,8);

console.log(playing)