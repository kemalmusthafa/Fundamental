//tempalte object

class User {        //class huruf pertama harus besar
    firstName = ""
    #lastName = "" // # bentuk private
    static word = "Hello World"

    constructor(first: string, last: string = "") { //parameter = "" untuk bisa memasukan hanya satu value
        this.firstName = first
        this.#lastName = last
    }

    greet() {
        console.log(`Hello ${this.firstName}`);
    }
    getLastName() {
        return this.#lastName
    }
}

const userOne = new User("Frengky", "Sihombing")
const userTwo = new User("John", "Doe")
const userThree = new User("Jane", "Dine")

// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);
// console.log(userOne, userTwo, userThree);

// console.log(userOne.firstName);
// console.log(userTwo.firstName);
// console.log(userThree.firstName);

userOne.greet()
userTwo.greet()
userThree.greet()

console.log(User.word); //untuk pemanggilan static