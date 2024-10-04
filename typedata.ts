// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
// type.
//  ○ Example : “hello” → 1

// let input: any = "hello"; 
// let result: number;

// if (typeof input === 'string') {
//     result = 1;
// } else if (typeof input === 'number') {
//     result = 2;
// } else {
//     result = 3;
// }

// console.log(result);

const input: any = "hallo"
const typeInput: string = typeof input

console.log(typeInput == "string" ? 1 : typeInput == "number" ? 2 : 3);
