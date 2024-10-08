// interface Icar {
//     brand: string
//     model: string            // Bisa di inheritence (dipakai untuk objects)
//     price: number
// }

type Car = {
    brand: string, 
    model: string,
    price: number
}

const car: Car = {
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000,
}

interface User {
    name: string
    hobby?: string
    address?: {
        street: string
        country: string
    }
    greeting(input: string): void // tidak mereturn
}

const user: User = {
    name: "David", // key sama value nya = property (name = key)
    greeting(input: string) { // method merupakan function dalam objects
        console.log("Hello" + input)
    }
}
// console.log(user.name); //cara pemanggilan key (akses value dalam objects)
// console.log(user["name"]); //cara kedua
// user.greeting() //cara panggil method

user.hobby = "ngoding"
console.log(user);

delete user.hobby        // menghapus hobby
console.log(user);

console.log(user.hobby); //karena hobby sudah dihapus jadi undefined

user.address = {
    street: "Braga",
    country: "Indonesia"
}
console.log(user.address);

//optional chaining
console.log(user.address?.street);

console.log(Object.keys(user));

