// function twoSum(nums: number[], target: number): number[]{

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]+nums[i + 1] == target) {
//             const x = [i, i + 1]
//             return x
//         }
//     }  
//     return []

// }

// console.log(twoSum([2,7,11,15], 9));

// function twoSum(nums: number[], target: number): number[] {

//     for (let i = 0; i < nums.length; i++) {

//             if (nums[i] + nums[i + 1] === target) {

//                 return [i, i + 1];
            
//         }
//     }

//     return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9)); 

function twoSum(nums: number[], target: number): number[] {
    // Loop pertama untuk memilih elemen pertama
    for (let i = 0; i < nums.length; i++) {
        // Loop kedua untuk memilih elemen kedua
        for (let j = i + 1; j < nums.length; j++) {
            // Jika pasangan elemen tersebut sama dengan target
            if (nums[i] + nums[j] === target) {
                // Kembalikan indeks dari elemen-elemen tersebut
                return [i, j];
            }
        }
    }
    // Jika tidak ada pasangan yang sesuai, kembalikan array kosong
    return [];
}

console.log(twoSum([2, 7, 11, 15], 13)); // Output: [0, 1]
