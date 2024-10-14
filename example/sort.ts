/*  sort by maxfirst and minfirst
    input = [1, 2, 3, 4, 5, 6]
    output = [6, 1, 5, 2, 4, 3]

    input = [11, 21, 22, 5, 30, 14]
    output = [30, 5, 22, 11, 21, 14]
*/

// function sortByMaxFirst (num: number[]) : number[] {
//     const arr = num.sort((a, b) => a - b)
//     const res: number[] = []
    
//     let left = 0;
//     let right = arr.length - 1

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             res.push(arr[right]);
//             right--;
//         } else {
//             res.push(arr[left]);
//             left++;
//         }
//     }
//     return res;
// }

// const n: number[] = [11, 23, 21, 5, 31, 15]

// console.log(sortByMaxFirst(n));

function myFunc (arr: number[]) {
    arr.sort((a, b) => a - b)
    const res: number[] = []

    for (let i = 0; i < arr.length / 2; i++) {
        res.push(arr[arr.length - 1 - i]) 
        res.push(arr[i])
    }
    return res
}

console.log(myFunc([1, 2, 3, 4, 5, 6]));
console.log(myFunc([11, 21, 22, 5, 14, 30]));

