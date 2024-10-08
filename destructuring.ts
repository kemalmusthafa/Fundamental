const person = {
    name: "David",
    age: 25,
    hobby: "Coding"
}

//object destructuring
const { name, age, hobby } = person

// console.log(name);
// console.log(age);
// console.log(hobby);

// untuk array 
const arr = [1, 2, 3]
const [a, b, c] = arr //harus berurutan

// console.log(a);
// console.log(b);
// console.log(c);

//penggunaan this
const user = {
    firstName: "Frengky",
    lastName: "Sihombing",
    greet() {
        console.log(`Hello ${this.firstName}`);
        
    }
}
user.greet()

console.log(Object.entries(user));
// Object.freeze(user) // untuk tidak bisa diubah atau dihapus

console.log(user.hasOwnProperty("firstName")); //untuk check property
console.log(Object.isFrozen(user)); //untuk check property
console.log(Object.values(user)); //untuk check property


user.firstName = "Andi"

console.log(user);
