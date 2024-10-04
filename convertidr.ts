// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”

// let nominal: number = 1000

// let nominalStr: string = nominal.toFixed(2);

// let parts: string[] = nominalStr.split('.');
// let integerPart: string = parts[0];
// let decimalPart: string = parts[1];

// let rupiah: string = '';
// let count = 0;

// for (let i = integerPart.length - 1; i >= 0; i--) {
//     rupiah = integerPart[i] + rupiah;
//     count++;

//     if (count === 3 && i !== 0){
//         rupiah = '.' + rupiah;
//         count = 0;
//     }
// }

// let formattedCurrency: string = 'Rp. ' + rupiah + ',' + decimalPart;

// console.log(formattedCurrency);

// const nominal: number = 1000

// console.log(nominal.toLocaleString("id-ID", { style: 'currency', currency: 'IDR'}));

const nominal: number = 123456789
const nominalStr: string = nominal.toString()
let count: number = 0

let res: string = ""

for (let i = nominalStr.length -1; i >= 0; i--) {
    if (count % 3 == 0 && count > 0) {
        res = "." + res
    }

    res = nominalStr.charAt(i) + res
    count++
}

console.log(`Rp ${res}, 00`);
