// Delete a node from a singly-linked list, given only a variable pointing to that node.
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(nodeToDelete) {
  let nextNode = nodeToDelete.next;
  
  if( nextNode ){
    nodeToDelete.value = nextNode.value;
    nodeToDelete.next = nextNode.next;
  } else {
    // This is the last node. It can't be deleted using this technique.
    throw new Error("No!!! Can't do it.")
  }

}