"use strict";
// function calculator (a: number, b: number) {
//     return a + b
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function displayer (something: any) {
//     console.log(something);   
// }
// const res = calculator(5, 10)
// displayer(res)
// function calculator (a: number, b: number) {
//     displayer(a + b)
// }
// function displayer (something: any) {
//     console.log(something);   
// }
// calculator(5, 10)
function calculator(a, b, callback = displayer) {
    callback(a + b);
}
function displayer(something) {
    console.log(something);
}
// calculator(5, 10, displayer)
function multiplyer2(num) {
    console.log(num * 2);
}
calculator(10, 5, multiplyer2);
