/*
    a = 1
    b = 2
    c = 3
    ...
    z = 26
    
    input = "Abcd"
    output = 10 => 1 + 2 + 3 + 4

    input = "Bandung"
    output = 63 => 2 + 1 + 14 + 4 + 21 + 14 + 7
*/

function letterValue(input: string): number {
    let sum: number = 0;

    let a = input.toLowerCase().split(` `);

    for (let i = 0; i < a.length; i++) {
        let char = a[i];
        let charValue = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        sum += charValue;
    }
    return sum;
}

console.log(letterValue("BB I"));

function myFunc(str: string) {
  const alpha: string[] = " abcdefghjklmnopqrstuvwxyz".split("");

  return str
    .split("")
    .map((item) => alpha.indexOf(item.toLowerCase()))
    .reduce((a, b) => a + b);
}
console.log(myFunc("Bandung"));
console.log(myFunc("Purwadhika"));
