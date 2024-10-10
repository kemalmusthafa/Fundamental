function switchFunc (input: any) {
    const res: any = {}

    for (let key in input[0]) {
        res[input[0][key]] = key
    }
    return [res]
}

console.log(switchFunc([{ name: "David", age: 20}, { name: "Kemal", age: 20}]));
