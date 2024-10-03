// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

const n: number = 15
let a: number = 0
let b: number = 1
let description: string = "";

for (let i = 0; i <= n; i++) {
    description += a + " ";
    let nextNumber = a + b
    a = b
    b = nextNumber
}

console.log(description.trim());