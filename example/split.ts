/*  split by Uppercase
    input = "helloWorld"
    output = ["hello", "World"]

    input  = "johnDoeMiller"
    output = {"john", "Doe", "Miller"}
*/

// function splitWordByUp (input: string): string[] {
//     return input.split(/(?=[A-Z])/);
//  }
// console.log(splitWordByUp("HelloWorld"));
// console.log(splitWordByUp("johnDoeMiller"));

function splitUpper (str: string){
    return str
        .split("")
        .map((item) => item == item.toUpperCase() ? ` ${item}` : item)
        .join("")
        .split(" ")
}

console.log(splitUpper("helloWorld"));
console.log(splitUpper("johnDoeMiller"));
