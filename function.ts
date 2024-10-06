// function declaration 
function reverseStr (input: string) { //parameter
    return input.split("").reverse().join("")
}

console.log(reverseStr("Hello World!")); //argumen

// //function expression
// const sum = function (a: number, b: number) {
//     return a + b
// }

// console.log(sum(10, 5));

// // function scope (hanya bisa di panggil di dalam function)
// const sum = function (a: number, b: number) {
//     let n : number = 10
//     return a + b
// }

// rest parameters
const sum = function (a: number = 0, b: number = 0, ...others: number[]) {
    const jumlah = a + b
    console.log(others);
    return jumlah
}

console.log(sum(10, 3, 1, 2, 3, 4));

// nested function 
function getMessage (firstName: string) {
    function sayHello () {
        return "Hello " + firstName
    }

    function welcomeMessage () {
        return "Welcome to Purwadhika"
    }

    return sayHello() + ", " + welcomeMessage ()
}

console.log(getMessage("Kemal"));

// closure function 
function greeting (name: string) {
    const defaultMsg: string = "Hello "
    return function () {
        return defaultMsg + name
    }
}

const greetingKemal = greeting("Kemal")
console.log(greetingKemal());

function capitalize (str: string) {
    let res: string = ""
    for (let i = 0; i < str.length; i++) {
        if (i == 0 || str.charAt(i - 1) == " ") {
        res += str.charAt(i).toUpperCase()
    } else {
        res += str.charAt(i).toLowerCase()
        }   
    }
    return res
}
console.log(capitalize("hello world"));
console.log(capitalize("purwadhika bandung"));
console.log(capitalize("david disini"));

function checkOddEven (num: number) {
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(checkOddEven(9));

// currying
function multiplier (factor: number) {
    return function (num: number) {
        return factor * num
    }
}

const mul3 = multiplier(3)
const mul5 = multiplier(5)
console.log(mul3(4));
console.log(mul5(4));

// recursive function
function countDown (fromNumber: number) {
    console.log(fromNumber);

    let nextNumber: number = fromNumber - 1

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
    
}

countDown(10)

// arrow function 
const square = (a: number, b: number) => a * b
console.log(square(4,2));
