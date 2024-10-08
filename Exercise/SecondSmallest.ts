// Write a function from a given array of numbers and return the second smallest number
// a.
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function findSecondSmallest (arr: number[]){
    arr.sort((a, b) => a - b)
    if (arr.length < 2) {
        return null;
    }
    const newArr = arr.filter((item) => item > arr[0] || item !== arr[0])
    return newArr[0]
}
const numbers = [5, 3, 1, 1, 1, 1, 1, 7, 2, 6];
const secondSmallest = findSecondSmallest(numbers);
console.log(secondSmallest);
