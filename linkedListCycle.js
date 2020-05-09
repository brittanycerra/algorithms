// You have a singly-linked list ↴ and want to check if it contains a cycle.

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
// Version 1 using a set
let valueSet = new Set();

function containsCycle(firstNode) {
  
  if( firstNode.next != null ){
    if( valueSet.has(firstNode.next.value) ){
      return true;
    }
    
    valueSet.add(firstNode.value);
    
    containsCycle(firstNode.next);
  }
  
  return false;
}
*/

function containsCycle(firstNode) {
  // Start both pointers at the beginning
  let slowGuy = firstNode;
  let fastGuy = firstNode;
  
  // Loop through nodes until it hits the end of the list
  while(fastGuy && fastGuy.next) {
    slowGuy = slowGuy.next;
    fastGuy = fastGuy.next.next;
    
    // If fast pointer is about to lap slow pointer
    if( fastGuy === slowGuy ){
      return true;
    }
  }
  
  // Fast pointer hit the end of the list first
  // No loop
  return false;
}
