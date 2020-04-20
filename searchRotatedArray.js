/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).
*/

var search = function(nums, target) {
    let floor = 0;
    let ceiling = nums.length - 1;

    while(floor <= ceiling){
      
      if( nums[floor] === target ) {
        return floor;
      } 
      
      if( nums[ceiling] === target ){
        return ceiling;
      }

      floor++;
      ceiling--;
    }
    
  return -1;
};

// Improvements would include keeping track of rotation point & the side of the rotation where the target is located. 
// Instead of blindly incrementing/decrementing, the while loop would hone in on the correct side