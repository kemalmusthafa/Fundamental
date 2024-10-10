// Create a function to check if two objects are equal 
// ● Example
//  ○ Input :  { a: 2 } & { a: 1 }
//  ○ Output: false
//  ● Example
//  ○ Input :  { a: “Hello” } & { a: 1 }
//  ○ Output: false
//  ● Example
//  ○ Input :  { a: 1 } & { a: 1 }
//  ○ Output: true

// class ObjectComparer {
// public objectEqual(objOne: any, objTwo: any): boolean {

//     const keysOne = Object.keys(objOne);
//     const keysTwo = Object.keys(objTwo);

//     if (keysOne.length !== keysTwo.length) {
//         return false;
//     }

//     for (const key of keysOne) {
//         if (objOne[key] !== objTwo[key]){
//             return false;
//         }
//     }
//     return true;
//     }
// }

// const comparer = new ObjectComparer();

// const objOne = { a: 2};
// const objTwo = { a: 1};
// console.log(comparer.objectEqual(objOne, objTwo));

// const objThree = { a: "Hello"};
// const objFour = { a: 1};
// console.log(comparer.objectEqual(objThree, objFour));

// const objFive = { a: 1};
// const objSix = { a: 1};
// console.log(comparer.objectEqual(objFive, objSix));

interface Input {
    [x: string]: any
}

const objOne: Input = { a: 1}
const objTwo: Input = { a: 2}

function isEqual (objOne: Input, objTwo: Input) {
    if (Object.keys(objOne).length !== Object.keys(objTwo).length) {
        return false
    }
    for (let key in objOne) {
        if(objOne[key] !== objTwo[key]) {
            return false
        } 
    }
    return true
}
console.log(isEqual(objOne,objTwo));
