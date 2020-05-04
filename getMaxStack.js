// You want to be able to access the largest element in a stack
// Implement the push, pop, and getMax methods

class MaxStack {
  constructor() {
    this.items = [];
    this.max = [];
  }

  push(item) {
    this.items.push(item);
    
    // If there's only one item in the stack or the item is greater than or equal to the last max item
    if( this.items.length < 2 || item >= this.max[this.max.length - 1] ){
      // Update max stack with new item
      this.max.push(item);
    }
  }

  pop() {
    if( !this.items.length ){
      return null;
    }
    
    let popped = this.items[this.items.length - 1];
    // If last item in the stack is the most recently added max item, remove it from the max stack
    if( popped === this.max[this.max.length - 1] ){
      this.max.pop();
    }
    
    return this.items.pop();
  }

  getMax() {
    return this.max[this.max.length - 1];
  }
}

class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}