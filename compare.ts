//Setiap object tidak bisa dibadingkan walaupun isi nya sama (kecuali reference nya sama)

const arr = [1]
const arr2 = [...arr]

// console.log(arr == arr2);
// console.log(typeof arr);

const objOne = { name : "Andi" }
const objTwo = { name : "Andi" }

// console.log(objOne == objTwo);

const nullOne = null
const nullTWo = null

// console.log(nullOne == nullTWo);

const target = { a: 1, b: 2}
const source = { b: 4, c: 5}
const final = Object.assign(target, source)

Object.assign(target, {d: 10})

// console.log(target);
// console.log(source);
// console.log(final);

// let n = [1, 2, 3] // let masih bisa diubah
const n = [1, 2, 3] // const tidak bisa diubah
 
n[2] = 10
n[4] = 5

// n = [5, 6, 7] 

// console.log(n);

const num: any = { a: 1, b: 2, c: 3}

num["d"]