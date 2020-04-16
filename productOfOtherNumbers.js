// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Note: Please solve it without division and in O(n).

var productExceptSelf = function(nums) {
  if( nums.length < 2 ) {
    throw new Error("Not enough numbers, silly!");
  }

  let outputArr = [];
  let productSoFar = 1;
  
  // Grab products before index
  for(let i = 0; i < nums.length; i++){
    outputArr[i] = productSoFar;
    // Update productSoFar by multiplying by current index
    productSoFar *= nums[i];
  }
  
  // Reset productSoFar
  productSoFar = 1;
  
  // Grab products after index  
  for(let j = nums.length-1; j >= 0; j--){
    outputArr[j] *= productSoFar;
    productSoFar *= nums[j];
  }

  return outputArr;

};