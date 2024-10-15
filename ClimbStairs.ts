// ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
//  ● Example 1:
//  ○ Input: n = 2
//  ○ Output: 2
//  ○ Explanation: There are two ways to climb to the top.
//  ■ 1. 1 step + 1 step
//  ■ 2. 2 steps
//  ● Example 2:
//  ○ Input: n = 3
//  ○ Output: 3
//  ○ Explanation: There are three ways to climb to the top.
//  ■ 1. 1 step + 1 step + 1 step
//  ■ 2. 1 step + 2 steps
//  ■ 3. 2 steps + 1 step

// function stepClimbStairs(input: number): number {
//   if (input <= 2) {
//     return input;
//   }

//   let stepOne = 1;
//   let stepTwo = 2;
//   let current = 0;

//   for (let i = 3; i <= input; i++) {
//     current = stepOne + stepTwo;
//     stepOne = stepTwo;
//     stepTwo = current;
//   }

//   return current;
// }
// console.log(stepClimbStairs(4));

function fib (n: number) {
    const res: number[] = [0, 1]
    for (let i = 0; i < n; i++){
        res.push(res[i] + res[i + 1])
    }
    return res[n + 1]
}

console.log(fib(5));
