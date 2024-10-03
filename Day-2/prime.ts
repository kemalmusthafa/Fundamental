// Write a code to check whether the number is prime number or not
//  ○ Example: 7 → 7 is a prime number
//  ○ Example: 6 → 6 is not a prime number

const num: number = 361

let divider: number = 0
for (let i = 1; i <= num; i++){
    if (num %i == 0) {
        divider++
    }
}

console.log(
    divider == 2 ?
    `${num} is a prime number` :
    `${num} is not a prime number`
)

// console.log(
//     num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0 ?
//     `${num} is not a prime number` :
//     `${num} is a prime number`
// )

// let num: number = 15

// if (num % 2 == 0) {
//     console.log("is not a prime number")
// } else if (num % 3 == 0) {
//     console.log("is not a prime number")
// } else {
//     console.log("is a prime number")
// }