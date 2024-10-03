const dateOne: Date = new Date("2024-10-01")
const dateTwo: Date = new Date("2024-10-05")

const diff:number = dateTwo.getTime() - dateOne.getTime()

console.log(diff / (24 * 60 * 60 * 1000))