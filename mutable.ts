// let name: string = "Andi"

// let newName: string = name

// name = "Budi"

// console.log(newName); // manggil andi
// console.log(name); //manggil budi

const arr: number[] = [1, 2, 3]
// const newArr: number[] = arr
const newArr: number[] = [...arr] // copy value (spread operator (...))

arr.push(4)

// console.log(arr);
// console.log(newArr);

/*
    Mutable = Objects and Array (Non-Primitive)
    Immutable = Value types (Primitive)
*/

const person = {
    name: "Andi",
    age: 25
}

// // const newPerson = person  //reference type mengacu ke satu data yang sama
// const newPerson = {...person, hobby: "coding"} //agar tidak mengacu ke satu data yang sama

// newPerson.name = "Budi"

// console.log(person);
// console.log(newPerson);

//looping object
for (let key in person) {
    console.log(key);
    console.log(person[key as keyof typeof person]);    
}