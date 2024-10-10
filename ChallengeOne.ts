/*  soal no 1 maxchar
    input :
    str = "Purwadhika Bandung"
    n = 10
    output: "Purwadhika . . ."

    input :
    str = "Purwadhika Bandung"
    n = 15
    output: "Purwadhika Band . . ."

    input :
    str = "Purwadhika Bandung"
    n = 20
    output: "Purwadhika Bandung"
*/

function maxChar (input: string, n: number) {
    if (input.length > n) {
        return input.substring(0, n) + "..."
    } else {
        return input
    }
}
console.log(maxChar("Purwadhika Bandung", 1));

