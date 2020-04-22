/*
Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.
*/

let diameterOfBinaryTree = function(root) {

    let total = {val:0};
    
    checkForChild(root, total);

    return total.val;
}

let checkForChild = function(node, total) {
  if( !node ) {
      return 0;
  }
  
  // These vars will total the longest branches
  let leftCount = checkForChild(node.left, total);
  let rightCount = checkForChild(node.right, total);
  
  // Update total with combined longest left & right branches
  total.val = Math.max(total.val, leftCount + rightCount);
    
  // Return longest branch from this iteration
  return 1 + Math.max(leftCount, rightCount);
}