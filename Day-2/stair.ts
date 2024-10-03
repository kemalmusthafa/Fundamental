/*
    n = 5


    *
    **
    ***
    ****
    *****
*/

// const S: number = 5


// for (let i = 1; i <= S; i++) {
//     console.log("*".repeat(i))
// }

// for (let i = 1; i <= S; i++){
//     let res: string = ""
//     for (let j = 1; j <= i; j++) {
//         res += "*"
//     }
//     console.log(res);
// }

// let ress: string = ""
// for (let i = 1; i <= S; i++) {
//     ress += "*"
//     console.log(ress)
// }

// let S = 5;

// for (let i = 1; i <= S; i++) {
//     let spaces = " ".repeat(S - i);        
//     let stars = "*".repeat(i);     
//     console.log(spaces + stars);
// }

// let S = 5;

// for (let i = 1; i <= S; i++) {
//     let spaces = " ".repeat(S - i);        
//     let stars = "*".repeat(2 * i - 1);     
//     console.log(spaces + stars);
// }

// for (let i = S - 1; i >= 1; i--) {
//     let spaces = " ".repeat(S - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(spaces + stars);
// }

const S: number = 5

for (let i = 1; i <= S; i++){
    console.log(" ".repeat(S - i) + "*".repeat(i))
}