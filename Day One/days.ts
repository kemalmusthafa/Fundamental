const n: number = 400

const sisa: number = n % 365
const sisa2: number = sisa % 30 //5

const tahun: number = (n-sisa) / 365
const bulan: number = (sisa-sisa2) / 30
const hari: number = sisa2

const result: string = `${tahun} year, ${bulan} month, ${hari} days`

console.log(result)