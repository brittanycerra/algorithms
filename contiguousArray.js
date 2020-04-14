// Given a binary array, find the maximum length of a contiguous subarray with an equal number of 0s and 1s
var findMaxLength = function(nums) {
    // Store count:index in object
    let storeCounts = {0: -1};
    let count = 0;
    let highest = 0;

    for (let i = 0; i < nums.length; i++) {
        // If zero, decrement 1
        // If one, increment 1
        nums[i] === 0 ? count -= 1 : count += 1;

        if (storeCounts[count] != null) {
            // This entry already exists
            // Highest is the max of current highest and the difference between the indices with the same count
            highest = Math.max(highest, i - storeCounts[count]);
        } else { // New count, store the index
          storeCounts[count] = i;
        }
    }
    
    return highest;
};