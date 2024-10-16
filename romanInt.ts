// Create a function to convert roman numeral to integer.
//  ● Example 1:
//  ○ Input: s = "III”
//  ○ Output: 3
//  ○ Explanation: III = 3.
//  ● Example 2:
//  ○ Input: s = "LVIII"
//  ○ Output: 58
//  ○ Explanation: L = 50, V= 5, III = 3.
//  ● Example 3:
//  ○ Input: s = "MCMXCIV"
//  ○ Output: 1994
//  ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4

function romanToInt(s: string): number {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    // for (let i = 0; i < s.length; i++) {
    //     const currentVal = romanMap[s[i]];
    //     const nextVal = romanMap[s[i + 1]];

    //     if (currentVal < nextVal) {
    //         total -= currentVal;
    //     } else {
    //         total += currentVal;
    //     }
    // }

    for (let i = 0; i < s.length; i++) {
        const curr = romanMap[s.charAt(i)]
        const next = romanMap[s.charAt(i + 1)]

        curr < next ? total -= curr : total += curr
    }

    return total;
}

console.log(romanToInt("III"));   
console.log(romanToInt("LVIII"));   
console.log(romanToInt("MCMXCIV")); 
console.log(romanToInt("XL"));
