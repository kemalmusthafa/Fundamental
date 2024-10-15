// Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example : 
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// …
// ● Example : 
// ○ Input : AB
// ○ Output : 28

// function findIndexExcel (input: string) : number {
//     let res: number = 0;

//     let inputArr = input.toUpperCase().split(``);

//     for (let i = 0; i < inputArr.length; i++) {
//         let char = inputArr[i]
//         let charValue = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

//         res = res * 26 + charValue;
//     }
//     return res;
// }

// console.log(findIndexExcel("A"));
// console.log("AA".split(""));


function alpabetPlus(input: string): number {
    let result = 0;
    const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ' 

 
    for (let i = 0; i < input.length; i++) {
       
        const charIndex = alphabet.indexOf(input[i])
        result = result * 26 + charIndex
    }

    return result
} 

console.log(alpabetPlus("AA"));
