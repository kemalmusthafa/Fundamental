/* soal no 2 phone format 

    input = "123456789"
    output = "(123) - 456 - 789"

    input = "987654321"
    output = "(987) - 456 - 789"
*/

// function phoneFormat (num: string) {
//     return `(${num[0]}${num[1]}${num[2]})-${num[3]}${num[4]}${num[5]}-${num[6]}${num[7]}${num[8]}` 
// }
// console.log(phoneFormat("123456789"));

function myFunc (str: string) {
    let res = "(xxx)-xxx-xxx"
    for (let i = 0; i < str.length; i++) {
        res = res.replace("x", str.charAt(i))
        console.log(res);
    }
    return res
}

console.log(myFunc("123456789"));
