/*
    input : "Purwadhika"
    output : 4

    input : "Bandung"
    output : 2
*/


function findVocal (input: string) {
    const vocal: string[] = ["a", "i", "u", "e", "o"]
    let res = 0

    for (let i = 0; i < input.length; i++) {
        if (vocal.includes(input.charAt(i))) {
            res ++
        }
    }
    return res
}
console.log(findVocal("Purwadhika"));
console.log(findVocal("Bandung"));
