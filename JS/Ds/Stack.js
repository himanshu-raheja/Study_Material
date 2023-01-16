class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0
    }
    peek() {
        return this.items[this.items.length]
    }
    print() {
        console.log(this.items.toString())
    }
    
}

const stack = new Stack()
stack.isEmpty() //true
stack.push(1)
stack.push(2)
stack.push(3)

stack.pop() //3
stack.print() // 1,2
stack.peek() // 2
