// Write a function that adds an element to the end of an array. However, the element should only be added if it is 
// not already in the array.
//  a.
//  Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
// b.
//  Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

function addElements(arr: number[], newELement: number): number[] {
    if (arr.includes(newELement) == false) {
        arr.push(newELement);
    }
    return arr;
}

let arrOne = [1, 2, 3, 4];
console.log(addElements(arrOne, 7));
console.log(addElements(arrOne, 4));
