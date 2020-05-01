/**
Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 
We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.
Definition for a binary tree node:

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

var isValidSequence = function(root, arr) {
    return checkIfValid(root, arr, 0);
}

function checkIfValid(node, arr, currentIndex){
    if( node === null ){
        return false;
    }
    
    if( arr[currentIndex] !== node.val ) {
        return false;
    }
    
    // End of arr. Check that the node doesn't have children.
    if( currentIndex === arr.length - 1 ){
        if( node.left === null && node.right === null ){
            return true;
        } else {
            return false;
        }
    }
    
    return checkIfValid(node.left, arr, currentIndex + 1) || checkIfValid(node.right, arr, currentIndex + 1);
}