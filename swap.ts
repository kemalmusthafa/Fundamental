// Write a code to swap the case of each character from string 
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX

// let str: string = 'The QuiCk BrOwN Fox';
// let swappedStr: string = '';

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
    
//     if (char === char.toUpperCase()) {
//         swappedStr += char.toLowerCase();
//     } else {
//         swappedStr += char.toUpperCase();
//     }
// }

// console.log(swappedStr);

const str: string = "The QuiCk BrOwN Fox"

let res: string = ""

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == str.charAt(i).toUpperCase()) {
        res += str.charAt(i).toLowerCase()
    } else {
        res += str.charAt(i).toUpperCase()
    }
}

console.log(res);
