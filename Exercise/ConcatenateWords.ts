// Write a function that takes an array of words and returns a string by concatenating the words in the array, 
// separated by commas and - the last word - by an 'and'.
//  a.
//  Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function concatenateWords(arr: string[]): string {
    const lastWord = arr.pop();
    return arr.join(', ') + ', and ' + lastWord;
}

let word: string[] = ["apple", "banana", "cherry", "date", "banana"]
let result = concatenateWords(word);

console.log(result);

function concate (input: string[]){
    const str: string = input.pop() || ""
    return input.join(", ") + ", and " + str
}
console.log(concate(["apple", "banana", "cherry", "date"]));
