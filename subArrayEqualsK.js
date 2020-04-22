/*Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k. */

var subarraySum = function(nums, k) {
    // Key is accumulative sum
    // Value is number of times sum has been seen
    // For example, we've seen a sum of '0' 1 time
    const storeSums = new Map([[0, 1]]);
    let sum = 0;
    let subArrayTotal = 0;

    for (let num of nums) {
        sum += num;
        // Check if we've seen a previous sum that equals new sum - k. That is the starting point of a new subArray that equals k.
        // Increment
        subArrayTotal += (storeSums.get(sum - k) || 0);

        // Add new sum to the map or incremement that sum's value if it's already in the map
        storeSums.set(sum, (storeSums.get(sum) || 0) + 1); 

    }
    
    return subArrayTotal;
};