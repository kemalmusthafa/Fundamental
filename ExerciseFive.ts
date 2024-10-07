// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]


function stringToArray(str: string): string[] {
    return str.split(' '); 
}

const result = stringToArray("Hello World");
console.log(result); 


// function stringToArray (str: string) {
//     return str.split(" ")
// }

// console.log(stringToArray("Hello World"));
