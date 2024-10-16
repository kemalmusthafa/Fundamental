// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//  ● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock.
//  ● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
// return 0.
// ● Example 1:
//  ○ Input: prices = [7,1,5,3,6,4]
//  ○ Output: 5
//  ○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//  ○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
// sell.
//  ● Example 2:
//  ○ Input: prices = [7,6,4,3,1]
//  ○ Output: 0
//  ○ Explanation: In this case, no transactions are done and the max profit = 0.

// function maxProfit(prices: number[]): number {
//     let profit = 0;
//     let termurah = Infinity;

//     for (let i = 0; i < prices.length; i++) {
//       if (prices[i] < termurah) {
//         termurah = prices[i];
//       } else if (prices[i] - termurah > profit) {
//         profit = prices[i] - termurah;
//       }
//     }

//     return profit;
//   };
//   let prices = [7,1,5,3,6,4]
//   console.log(maxProfit(prices))

// function maximumProfit(input: number[]) {
//   //deklarasi semua varibel bantu
//   let res: number[][] = [];
//   let result: number[] = [];

//   input.forEach((item, _idx, arr) => {
//     res.push(arr.map((val) => item - val));
//   });

//   for (let i = 0; i < res.length; i++) {
//     for (let j = i + 1; j < res[i].length; j++) {
//       result.push(res[i][j]);
//     }
//   }

//   if (result.every((item) => item >= 0)) return 0;
//   return -result.sort((a, b) => a - b)[0];
// }

// console.log(maximumProfit([1,2,3,4,5,6,7]));

function profit (arr: number[]) {
    // const min = Math.min(...arr)
    // const idxMin = arr.indexOf(min)
    // const newArr = arr.splice(idxMin)
    // const max = Math.max(...newArr)

    // return {min, idxMin, newArr, max}
    // return max - min

    const res = []
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            res.push(arr[i] - arr[j])
        }
    }
    return res
    return Math.max(...res)
}

console.log(profit([8, 3, 2]));

