/**
Given a non-empty binary tree, find the maximum path sum.
For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
The path must contain at least one node and does not need to go through the root.

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxPathSum = function(root) {
    let maxSoFar = Number.NEGATIVE_INFINITY;
    
    currentPathSum(root);
    
    return maxSoFar;
    
    // Helper function calculates max from bottom level to the root
    function currentPathSum(node){
         if( !node ) {
          return 0;
        }

        let leftMax = Math.max(0, currentPathSum(node.left));
        let rightMax = Math.max(0, currentPathSum(node.right));

        maxSoFar = Math.max(maxSoFar, leftMax + rightMax + node.val);
        console.log(`node is ${node.val} and maxSoFar is ${maxSoFar}`)
        return Math.max(leftMax, rightMax) + node.val;
    }
}
