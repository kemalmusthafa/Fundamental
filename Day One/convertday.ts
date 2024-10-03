let days;

days = 400;

let year = Math.floor(days / 365);  
days = days % 365;                  

let month = Math.floor(days / 30);  
let day = days % 30;                

console.log(`400 days -> ${year} year, ${month} month, ${day} day`);

days = 366;

year = Math.floor(days / 365);      
days = days % 365;                  

month = Math.floor(days / 30);      
day = days % 30;                    

console.log(`366 days -> ${year} year, ${month} month, ${day} day`);
