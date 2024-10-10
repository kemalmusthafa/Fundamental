function findIntersection (numOne: any, numTwo: any):number {
    let hasil: any = {}
    ;

    for (let x in numOne){
        if (numTwo[x] !== undefined && numOne[x] === numTwo[x])
            hasil[x] = numOne[x];
    }
    return hasil;
}

const numberFirst = { a: 1, b: 2, c: 3} 
const numberSecond = { b: 2, c: 4, d: 5} 

console.log(findIntersection(numberFirst, numberSecond));
