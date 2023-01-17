// const sub = (mystery, b, c) => {
//     return b - c,
// }

const add = function (b, c) {
    let sum = b + c;
    return sum;
}

const multiply = function(a, b, c) {
    return a(b + c);
}

// multiply(add(1,2))
console.log(multiply(add(100, 3), 1, 2))