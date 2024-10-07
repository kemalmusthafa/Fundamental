// Create a function that can create a triangle pattern according to the height we provide like the 
// following :
//  01
//  02  03
//  04  05  06
//  07  08  09  10
//  ● Parameters : height → triangle height

function Triangle (height: number): void {
    let num = 1;
    for (let i = 1; i <= height; i++){
        let res = '';
        for (let j = 1; j <= i; j++) {
            res += (num < 10 ? '0' : '') + num + ' ';
            num++;
        }
        console.log(res.trim()); 
    }
}
Triangle(5)
