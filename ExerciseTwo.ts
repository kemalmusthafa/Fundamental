// Create a function that can loop the number of times according to the input we provide, and will 
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with 
// "FizzBuzz".
//  ● Parameters : n → total looping
//  ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
//  ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz


function fizzBuzz(n:number) {
    let res:string = '';
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res += 'FizzBuzz '
        }else if (i % 3 === 0) {
            res += 'Fizz '
        }else if (i % 5 === 0) {
            res += 'Buzz '
        }else{
            res += `${i}, `
        }
    }
    console.log(res);
}
fizzBuzz(15)

// function fizzBuzz (n: number) {
//     const res: (string | number)[] = []
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             res.push("FizzBuzz")
//         } else if (i % 3 == 0) {
//             res.push("Fizz")
//         } else if (i % 5 == 0) {
//             res.push ("Buzz")
//         } else {
//             res.push(i)
//         }
//     }
//     return res.join(', ')
// }

// console.log(fizzBuzz(15))