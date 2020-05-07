//  Implement the enqueue and dequeue methods

class QueueTwo {
  constructor(){
    this.inStack = [];
    this.outStack = [];
  }
  
  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if( this.outStack.length === 0 ){
      // Move items from inStack to outStack, reversing order
      while( this.inStack.length > 0 ) {
        const newItem = this.inStack.pop();
        this.outStack.push(newItem);
      }
      
      // If outStack is still empty, throw error
      if( this.outStack.length === 0 ){
        throw new Error("The queue was empty. Can't dequeue.")
      }
    }
    
    return this.outStack.pop();
  }
}