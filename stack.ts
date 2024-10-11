class Stack {
    #maxSize: number
    #container: number[] = []

    constructor(maxSize = 10){
        this.#maxSize = maxSize;
    }

    #isFull() {
        return this.#container.length >= this.#maxSize;
    }

    #isEmpty() {
        return this.#container.length == 0;
    }

    push(element: number){
        if (this.#isFull()) {
            console.log("Stack Overload")
            return
        }

        this.#container.push(element)

    }

    pop(){
        if (this.#isEmpty()) {
            console.log("Stack Underflow!")
            return
        }

        this.#container.pop()
    }

    getElement (){
        return this.#container
    }
}

const stack1 = new Stack(2)

stack1.push(1)
stack1.push(2)
stack1.push(3)

console.log(stack1.getElement())

stack1.pop()
stack1.pop()
stack1.pop()
console.log(stack1.getElement())