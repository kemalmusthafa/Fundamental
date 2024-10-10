// function factorialNum (x: number = 0): number {
//         if (x <= 1) {
//             return 1;
//         }
//         else {
//             return x * factorialNum(x - 1);
//         }
// }
// const input = 5;
// console.log(factorialNum(input));

// function factorialNum(x: number): string {
//     let result = 1;
//     let steps = `${x}! = `; // String untuk melacak langkah-langkah faktorial

//     for (let i = x; i > 0; i--) {
//         result *= i; // Menghitung faktorial
//         steps += i; // Menambahkan bilangan ke dalam string

//         if (i > 1) {
//             steps += " x "; // Menambahkan " x " antara angka
//         }
//     }

//     steps += ` = ${result}`; // Menambahkan hasil akhir faktorial

//     return steps;
// }

// const input = 5;
// console.log(factorialNum(input));

// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// function factorialNum (n: number ): number {
//     return n == 0 ? 1 : n * factorialNum (n - 1)
// }
// const factorialNum2 = (n: number): number => n == 0 ? 1 : n * factorialNum2(n - 1)

// console.log(factorialNum(5));
// console.log(factorialNum2(5));

function factorialWithSteps(n: number): string {
    function factorialRecursive(n: number, steps: string[] = []): [number, string[]] {
        if (n <= 1) {
            steps.push("1");
            return [1, steps];
        }
        
        const [subResult, subSteps] = factorialRecursive(n - 1, steps);
        const result = n * subResult;
        steps[steps.length - 1] = `${n} x ${subSteps[subSteps.length - 1]}`;
        
        return [result, steps];
    }

    const [result, steps] = factorialRecursive(n);
    const stepString = steps[0];
    return `${n}! = ${stepString} = ${result}`;
}
console.log(factorialWithSteps(5));
