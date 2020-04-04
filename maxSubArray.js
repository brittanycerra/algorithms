// Solution to finding the max subarray problem
var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let maxSoFar = nums[0];
    
    for(let i = 1; i < nums.length; i++){
    	currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(currentMax, maxSoFar);
    }
    
    return maxSoFar;
};