class Queue {
    constructor() {
      this.items = {};
      this.rear = 0;
      this.front = 0;
    }
  
    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }
  
    isEmpty() {
      return this.rear === this.front;
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
      } else {
        return null;
      }
    }
    size() {
      return this.rear - this.front;
    }
  
    peek() {
      return !this.isEmpty() ? this.items[this.front] : null;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  const queue = new Queue();
  console.log(queue.dequeue()); //null;;
  console.log(queue.peek()) //null
  
  queue.enqueue(10)
  queue.enqueue(20)
  queue.enqueue(30)
  
  console.log(queue.peek()) //10
  console.log(queue.size()) //3
  
  console.log(queue.print())
  console.log(queue.dequeue()) //10