// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//  ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.
//  ● Example 1:
//  ○ Input: s = "anagram", t = "nagaram"
//  ○ Output: true
//  ● Example 2:
//  ○ Input: s = "rat", t = "car"
//  ○ Output: false

// function findAnagram (input: string, input2: string): boolean {
//     let inpOne = input.toUpperCase().split("").sort().join()
//     let inpTwo = input2.toUpperCase().split("").sort().join()

//     const x = (str: string) => str.toUpperCase().split("").sort().join()
//     if (inpOne !== inpTwo) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(findAnagram("niagara", "nigaraa"));

// clean code 

function findAnagram(input: string, input2: string): boolean {
    const x = (str: string) => str.toUpperCase().split("").sort().join();
  
    return x(input) === x(input2);
  }
  
  console.log(findAnagram("niagara", "nigaraa"));
