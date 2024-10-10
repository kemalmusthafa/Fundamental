function sensor(input: string){
    let arr = input.split(" ")
    let kasar = ["anjing", "babi", "monyet"]
    for (let i = 0;i<=arr.length;i++){
        if(kasar.includes(arr[i])){
            let word = arr[i];
            arr[i] = word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
        }
    }

    return arr.join(" ");
}

console.log(sensor("seekor anjing dan babi bermain di taman"));
console.log(sensor("monyet makan pisang"));


function beepWords (str: string) {
    const wordBeep = ["anjing", "babi", "monyet"]
    const res: string[] = []

    str.split(' ').forEach((item) => {
        if (wordBeep.includes(item.toLowerCase())){
            const first = item.charAt(0)
            const last = item.charAt(item.length - 1)
            const middle = "*".repeat(item.length - 2)

            res.push(first + middle + last)
        } else {
            res.push(item)
        }
    })

    return res.join(' ')
}

console.log(beepWords("seekor anjing dan babi bermain di taman"));
console.log(beepWords("monyet makan pisang"));

