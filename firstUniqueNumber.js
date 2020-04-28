/**
 You have a queue of integers, you need to retrieve the first unique integer in the queue.

Implement the FirstUnique class:

FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
void add(int value) insert value to the queue.
 */
 
var FirstUnique = function(nums) {
    this.numsArr = nums;
    this.numsMap = new Map();
    
    // Add numsArr to map
    for(let i = 0; i < this.numsArr.length; i++){
        let val = this.numsMap.get(this.numsArr[i]);
        // If val exists, increment by 1. Otherwise, set val equal to 1
        val = val ? val += 1 : 1;
        
        this.numsMap.set(this.numsArr[i], val);        
    }
    
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    
    if( !this.numsArr.length ){
        return -1;
    }
    
    for(let i = 0; i < this.numsArr.length; i++){
        // Return value numsMap has this key with a value of <= 1
        if( this.numsMap.get(this.numsArr[i]) <= 1 ){
            return this.numsArr[i];
        }
    }
    
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    let prevVal = this.numsMap.get(value);
    
    // Add to back of array
    this.numsArr.push(value);
    
    // Update map with value or update existing value's count
    prevVal = prevVal ? prevVal += 1 : 1;
    
    this.numsMap.set(value, prevVal);
    
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

 // Improvement 
 var FirstUnique = function(nums) {
    this.uniques = new Set()
    this.duplicates = new Set()
    nums.forEach(n => this.add(n))
};

FirstUnique.prototype.showFirstUnique = function() {
    if (this.uniques.size == 0) {
        return -1;
    }

    return this.uniques.keys().next().value;
};

FirstUnique.prototype.add = function(n) {
    if (this.duplicates.has(n)) {
        return;
    }

    if (!this.uniques.has(n)) {
        return this.uniques.add(n);
    }

    this.uniques.delete(n);
    this.duplicates.add(n);

    return;
};