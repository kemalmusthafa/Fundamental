// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World"

// let main: string = "hello world"
// let mainStr: string =""

// let capital: string = main.replace(mainStr,"H");

// console.log(capital);

const main: string = "hello world"

let ress: string = ""

// for (let i = 0; i < main.length; i++) {
//     if (i == 0 || main.charAt(i - 1) == " ") {
//         ress += main.charAt(i).toUpperCase()
//     } else {
//         ress += main.charAt(i).toLowerCase()
//     }
// }

let isCapital : boolean = true

for (let i = 0; i < main.length; i++) {
    if (isCapital) {
        ress += main.charAt(i).toUpperCase()
        isCapital = false
    } else {
        ress += main.charAt(i).toLowerCase()
    }
    if (main.charAt(i) == " ") {
        isCapital = true
    }
}
console.log(ress);
