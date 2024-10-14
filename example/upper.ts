/* 
    input = "Hello Purwadhika"
    output = [13, 2]

    input = "B4ndung"
    output = "5, 1"
*/

function findIndexLowerUp (input: string): number[] {
    let resUpper:number = 0
    let resLower:number = 0
    let inputArr = input
            .replace(/[" "]/g,"")          // regex global spasi
            .replace(/[\s/0-9]/g, "")  //regex global number
            .split("")
            .map((item) => item == item.toLowerCase() ? resUpper++ : resLower++)

        return [resUpper, resLower]
}

// console.log(findIndexLowerUp("Hello Purwa dhika"));
// console.log(findIndexLowerUp("B4444ndun6"));

function myFunc (str: string) {
    const letter = str.replace(/[\s/0-9!-+]/g, "")
    const lower = letter.replace(/[A-Z]/g, "")

    return [lower.length, letter.length - lower.length]
}

console.log(myFunc("Hallo Purwa dhika"));
console.log(myFunc("B4ndung###"));
