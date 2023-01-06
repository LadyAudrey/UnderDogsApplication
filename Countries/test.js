// a function that prints hello workd

const helloWorld = function (phrase) {
    let whatWeSay = phrase + " line 29";
    return whatWeSay;
}

const phrase2 = helloWorld("Hello, World!");

const aFunction = function(a) {
    console.log(a)
    let a = a;
    return a;
}

aFunction(phrase2);