// defining, calling, passing

// defining!!
const addingFunction = (a, b) => {
    const result = a + b;
    return result;
}

const addingFunction2 = function(a, b) {
    return a + b;
}

function naming (a, b) {
    return a + b;
}
// value = "WednesdayHumpday"
const saved = addingFunction("Wednesday", "Humpday");

addingFunction2("WednesdayHumpday"(2, 5), 111)

naming(8, 7)

const add = function (a, b) {
    return a + b;
} 

const sub = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const calculate = function (x, y, z){
    return x(y, z);
}
// calculate(add(1, 3))
calculate(add,1 ,3)

calculate(sub, 5, 7)

calculate(multiply, 1, 7)

calculate(divide, 100, 25)

// keep subdividing code- pick apart pieces into chunks until they're digestable
// this is the issue I had with addEventListener
//// (second argument is a function definition; it's called later by the browser)