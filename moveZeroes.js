// Move zeroes to end of array in place
// Moving forward
var moveZeroes = function(nums) {
  let zeroesCounter = 0;
  
  for(let i = 0; i < nums.length; i++){
    if( nums[i] == 0 ){
      nums.unshift(nums.splice(i, 1)[0]);
      zeroesCounter++;
    }
  }
  
  if(zeroesCounter > 0) {
  	let arrayToPush = nums.splice(0, zeroesCounter);
    nums.push.apply(nums, arrayToPush);
  }
  
  return nums
};


// Better solution
// Moving backward
var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let num = nums[i];
        if (!num) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};