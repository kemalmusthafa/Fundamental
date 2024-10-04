// Write a code to check whether a string is a palindrome or not.
//  ○ Example : ‘madam’ → palindrome

// const Name: string = "madam"

// let reversedCheck: string = ""

// for (let i = Name.length - 1; i >= 0; i--){
//     reversedCheck += Name[i]
// }
// // console.log(reversedCheck)
// if (reversedCheck.toUpperCase() === Name.toUpperCase()){
//     console.log(`${Name} is a palindrome`)
// } else {
//     console.log(`${Name} is not a palindrome`)
// }

const st: string = "kasur rusak"
let reverseStr: string = ""

for (let i = st.length - 1; i >= 0; i--) {
    reverseStr += st.charAt(i)
}

console.log(st == reverseStr ? "Palindrome" : "not Palindrome");
