/*
    input = "Pig latin is cool"
    output = "igPay atinlay siay oolcay"
*/

function changeLetterAy (str: string) {
    return str.split(' ').map(item => item.slice(1) + item[0] + 'ay').join(' ');
}
const input = "Pig latin is cool";
const output = changeLetterAy(input);

console.log(output);

