// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”

let str: string = "Hello World"
let searchStr: string = "ell"

let result: string = str.replace(searchStr, "");

console.log(result);
