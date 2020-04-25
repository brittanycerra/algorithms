/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.
 */
 
var canJump = function(nums) {
    
    // If there are 0 or 1 elements, we're already at the end
    // Return true
    if( nums.length < 2 ) {
        return true;
    }
    
    let lastJumpableIndex = nums.length - 1;
    
    // Walk backwards through array starting with 2nd to last element
    let i = nums.length -2;
    while(i > 0) {
        let distanceToJump = lastJumpableIndex - i;

        // If this index's "jump" will take you to the lastJumpableIndex
        if( nums[i] >= distanceToJump ){
            // New lastJumpableIndex is now i because anything that takes you to i will take you to the end
            lastJumpableIndex = i;
        }
        
        i--;
    }
    
    return nums[0] >= lastJumpableIndex ? true : false;
};