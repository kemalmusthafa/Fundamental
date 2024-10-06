// function triangle (height: number) {
//     for (let i = 1 ; i <= height; i++) {
//         let res: string = ""
//         for (let j = 1; j <= i; j++) {
//             res += `${j} `
//         }
//         console.log(res);  
//     }
// }

// triangle(5)
// function triangle (height: number) {
//     let result: string = ""
//     for (let i = 1 ; i <= height; i++) {
//         let res: string = ""
//         for (let j = 1; j <= i; j++) {
//             res += `${j} `
//         }
//         if (i !== height) res += '\n'
//         result += res
//     }
//     return result
// }

// console.log(triangle(5));
function triangle (height: number) {
    let result: string = ""
    for (let i = 1 ; i <= height; i++) {
        let res: string = " "
        res += "  ".repeat(height - i)
        for (let j = 1; j <= i; j++) {
            res += `${j} `
        }
        if (i !== height) res += '\n'
        result += res
    }
    return result
}

console.log(triangle(5));
