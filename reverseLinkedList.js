// Write a function for reversing a linked list. Do it in place.
//Your function will have one input: the head of the list.
//Your function should return the new head of the list.

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverse(headOfList) {
  let current = headOfList;
  let prev = null;
  let next = null;
  
  // Loop through until end of list
  while(current){
    next = current.next;
    
    // Reverse 'next' pointer
    current.next = prev;
    
    prev = current;
    current = next;
  }

  return prev;
}