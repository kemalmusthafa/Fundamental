//  Write a code to change every letter a into * from a string of input
//  ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

// let input: string = 'An apple a day keeps the doctor away';
// let result: string = '';

// for (let i = 0; i < input.length; i++) {
//     if (input[i] === 'a' || input[i] === 'A') {
//         result += '*';
//     } else {
//         result += input[i];
//     }
// }

// console.log(result);  

const str: string = "An apple a day keeps the doctor away"
const res: string = str.replace(/a/gi, "*") //regEx (bisa pake .toLowercase atau double)

console.log(res);

const letter: string = "Hello@ Stu?dent Purwa4dhika"
console.log(letter.replace(/[^a-zA-Z\s]/g, ""));

