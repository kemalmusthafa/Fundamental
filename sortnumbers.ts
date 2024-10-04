// Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

let num1: number = 42;
let num2: number = 27;
let num3: number = 18;

// if (num1 <= num2 && num1 <= num3) {
//     if (num2 <= num3) {
//         console.log(num1 + ", " + num2 + ", " + num3);
//     } else {
//         console.log(num1 + ", " + num3 + ", " + num2);
//     }
// } else if (num2 <= num1 && num2 <= num3) {
//     if (num1 <= num3) {
//         console.log(num2 + ", " + num1 + ", " + num3);
//     } else {
//         console.log(num2 + ", " + num3 + ", " + num1);
//     }
// } else {
//     if (num1 <= num2) {
//         console.log(num3 + ", " + num1 + ", " + num2);
//     } else {
//         console.log(num3 + ", " + num2 + ", " + num1);
//     }
// }

if (num1 > num2) {
    const n : number = num1
    num1 = num2
    num2 = n
}
if (num2 > num3) {
    const n : number = num2
    num2 = num3
    num3 = n
}
if (num1 > num2) {
    const n : number = num1
    num1 = num2
    num2 = n
}

console.log(num1, num2, num3);
