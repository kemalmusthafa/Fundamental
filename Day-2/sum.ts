// Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

const N: number = 5

let res: number = 0
let desc: string = ""
for (let i = 1; i <= N; i++) {
    res += i
    if (i == 1) {
        desc += "1"
    }   else {
            desc += ` + ${i}`
        }
}  

console.log(res)
console.log(`${desc} = ${res}`)

// let N = 5;
// let K: number = 0;

// for (let i = 1; i <= N; i++) {
//     K = K + i;
// }
// console.log(`${K}`);

// let sum: number = 1;

// while(true) {
//     let value: number = 1;
//     if (sum === 5) break;
//     sum += value;
// }

// console.log("sum : " + sum)