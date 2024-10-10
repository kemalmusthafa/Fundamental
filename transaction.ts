class Product {
    name: string = ""
    price: number = 0

    constructor(nama: string, harga: number) {
        this.name = nama
        this.price = harga
    }
}

const productOne = new Product("Apple", 20000)
const productTwo = new Product("Banana", 30000)
const productThree = new Product("Cherry", 50000)

// console.log(productOne);

class Transaction {
    #total: number = 0
    #products: object[] = []

    addToCart(product: Product, qty: number) {
        this.#products.push({...product, qty, total: product.price*qty})
        this.#total += product.price * qty
    }
    show () {
        this.#products.push({ total: this.#total})
        console.table(this.#products)
    }
    checkout(money: number) {
        if (money < this.#total) {
            // throw new Error("Uang anda tidak cukup")
            console.log("Uang anda tidak cukup")
        } else {
            console.log(`Cash: ${money}`);
            console.log(`Return: ${money - this.#total}`);
            console.log(`~~~ Thank You ~~~`);  
        }
    }
}

const transtactionOne = new Transaction()
transtactionOne.addToCart(productOne, 2)
transtactionOne.addToCart(productTwo, 1)
transtactionOne.addToCart(productThree, 3)

console.log(transtactionOne);
transtactionOne.show()
transtactionOne.checkout(100000)

