const arr: any[] = ["A", "B", "C"]
const arr2 = new Array ("A", "B", "C") 

console.log(arr);
console.log(arr[1]);
console.log(arr.length);

// menambahkan value dibelakang
arr.push("D")

// menambahkan value di depan
arr.unshift("0")

console.log(arr);

// menghapus value terakhir atau dibelakang
arr.pop()

console.log(arr);

// menghapus value pertama atau depan
arr.shift()

console.log(arr);

// mengahapus index ke-
arr.splice(1, 1)

console.log(arr);

// mengganti index ke-
arr.splice(1, 1, "Z")

console.log(arr);

// menambahkan index ke-
arr.splice(1, 0, "Z")

console.log(arr);

// membuat urutan ascending - descending hanya numbers
const numArr: number[] = [1, 3, 2, 5, 4, 7, 6]

numArr.sort((a, b) => a - b) // asc
console.log(numArr);

numArr.sort((a, b) => b - a) // desc
console.log(numArr);

// membuat urutan ascending - descending alphabetic atau string
const arrStr : string[] = ["A", "D", "C", "B"]

arrStr.sort() //asc
console.log(arrStr);

arrStr.sort().reverse() //desc
console.log(arrStr);

// menyeleksi ganjil
const oddNumber: number[] = numArr.filter((item) => item % 2 == 1)
console.log(oddNumber);

const oddNumber2: number[] = numArr.filter((item) => item % 2 == 1 && item > 2).sort((a, b) => a - b) //multiple kondisi
console.log(oddNumber2);

// menyeleksi genap
const evenNumber: number[] = numArr.filter((item) => item % 2 == 0)
console.log(evenNumber);

// pemisah string menjadi array 
const str: string = "Purwadhika Bandung"

console.log(str.split(""));
console.log(str.split("").toString());
console.log(str.split("").join("-"));

// // palindrome
// console.log(str.split("").reverse().join(""));

// looping array 
// const newArray: number[] = [10, 20, 30, 40, 50]

// newArray.forEach((item, idx) => {
//     console.log(item, idx);
    
// })

// looping array dengan return aray baru 
const newArray: number[] = [10, 20, 30, 40, 50]
const newArray2: number[] = newArray.map((item) => item += 5)
const newArray3: number[] = []

newArray.forEach((item) => {
    newArray3.push(item +5)
})

console.log(newArray2);
console.log(newArray3);

//mengetahui index
newArray.map((item, idx) => {
    console.log(item, idx);
}) 

// looping for of (array)
for (let item of newArray) {
    console.log(item);
    
}