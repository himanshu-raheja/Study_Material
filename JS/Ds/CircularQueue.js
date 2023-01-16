class CircularQueue {
    constructor(capacity) {
      this.capacity = capacity
      this.currentLength = 0
      this.rear = -1
      this.front = -1
      this.items = []
    }
    enqueue(element) {
      if(!this.isFull()) {
        this.rear = (this.rear + 1)%this.capacity
        this.items[this.rear] = element
        this.currentLength++;
        if(this.front === -1) {
          this.front = this.rear
        }
      }    
    }
    dequeue(){
      if(!this.isEmpty()) {
        const item = this.items[this.front]
        this.items[this.front] = ''
        this.front = (this.front+1)%this.capacity
        this.currentLength--;
        return item
      }
      return null
    }
    isFull() {
      return this.currentLength === this.capacity
    }
    isEmpty() {
      return this.currentLength === 0
    }
    peek() {
      if(!this.isEmpty()) {
        return this.items[this.front]
      }
      return null
    }
    print() {
      console.log(this.items)
    }
    size() {
      console.log(this.currentLength)
    }
  }
  
  const circularQ = new CircularQueue(5);
  circularQ.size()
  circularQ.dequeue()
  circularQ.peek()
  
  circularQ.enqueue(10)
  circularQ.enqueue(20)
  circularQ.enqueue(30)
  circularQ.enqueue(40)
  circularQ.enqueue(50)
  
  console.log(circularQ.dequeue())
  circularQ.print()
  console.log(circularQ.peek())
  circularQ.enqueue(60)
  circularQ.print()
  console.log(circularQ.peek())
  console.log(circularQ.dequeue())
  console.log(circularQ.dequeue())
  console.log(circularQ.dequeue())
  console.log(circularQ.dequeue())
  console.log(circularQ.peek())
  
  
  circularQ.enqueue(10)
  circularQ.enqueue(20)
  circularQ.enqueue(30)
  console.log(circularQ.peek())
  
  
  
  
  