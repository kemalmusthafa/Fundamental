// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are 
// of the same length.
//  a.
//  Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function sumTwoElements (arrOne: number[], arrTwo: number[]){
    const result: number[] = [];
    
    for (let i = 0; i < arrOne.length; i++) {
        result.push(arrOne[i] + arrTwo[i]);
    }

    return result;
}

const arrOne = [1, 2, 3];
const arrTwo = [3, 2, 1];
const result = sumTwoElements(arrOne, arrTwo);
console.log(result);
