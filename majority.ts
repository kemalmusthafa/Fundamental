// Given an array nums of size n, return the majority element. The majority element is the element that 
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//  ● Example 1:
//  ○ Input: nums = [3,2,3]
//  ○ Output: 3
//  ● Example 2:
//  ○ Input: nums = [2,2,1,1,1,2,2]
//  ○ Output: 2

function findMajority (arr: number[]): number|null{
    const majorityCount = Math.floor(arr.length/2);

    for (let num of arr) {
        const count  = arr.filter((item)=> item === num).length;
        if (count > majorityCount) {
            return num;
        }
    }

    return null;
}
// console.log(findMajority([2, 2, 4, 4, 4, 4, 4, 1, 1, 1]));

function majorityElement(nums: number[]): number {
    return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
  };

console.log(majorityElement([1,2,3,4,5,6,7]))
