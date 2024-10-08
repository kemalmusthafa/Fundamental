// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a.
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

const arr: number[] = [12, 5, 23, 18, 4, 45, 32];

function getStatsWithSort (arr: number[]) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    return {
        lowest : sortedArr[0],
        highest : sortedArr[sortedArr.length - 1],
        average : arr.reduce((sum, num) => sum + num, 0) / arr.length
    }
}
const resulWithSort = getStatsWithSort(arr);

console.log(resulWithSort);

function getStatsWithoutSort (arr: number[]) {
    let lowest = arr[0];
    let highest = arr[0];

    for (const num of arr) {
        if (num < lowest) lowest = num;
        if (num > highest) highest = num;
    }

    return {
        lowest,
        highest,
        average : arr.reduce((sum, num) => sum + num, 0) / arr.length
    }
}
const resultWithoutSort = getStatsWithoutSort(arr);
console.log(resultWithoutSort);

function minMax (arr: number[]) {
    const lowest: number = Math.min(...arr)
    const highest: number = Math.max(...arr)
    const average: number = arr.reduce((a, b) => a + b) /arr.length
    
    return {
        lowest: lowest,
        highest: highest,
        average: average
    }
}

console.log(minMax([12, 5, 23, 18, 4, 45, 32]));
