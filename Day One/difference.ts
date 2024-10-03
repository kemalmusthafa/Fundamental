let date1: Date = new Date("2022-01-20");
let date2: Date = new Date("2022-01-22");

let timeDifference: number = date2.getTime() - date1.getTime();

let differenceInDays: number = timeDifference / (1000 * 60 * 60 * 24);

console.log(differenceInDays);
