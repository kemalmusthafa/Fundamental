class Product {
    productName = ""
    productPrice = 0

    constructor(name: string, price: number) {
        this.productName = name
        this.productPrice = price
    }
}

class Book extends Product {
    title = ""
    author = ""

    constructor(title: string, author: string, price: number) {
        super("Buku", price)
        this.title = title
        this.author = author
    }
}

const bookOne = new Book("Harry Potter", "JK. Rowling", 150000)

console.log(bookOne);
console.log(bookOne instanceof Book);
console.log(bookOne instanceof Product);
