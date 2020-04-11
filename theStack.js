// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

let theStack;
let theMin;
/**
 * initialize your data structure here.
 */
var MinStack = function() {
	theStack = [];
    theMin = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	theStack.push(x);
  
    if(theMin === null || x < theMin ) {
        theMin = x;
    }
  
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if( theStack.length ){
        let popped = theStack.pop();

        if(popped === theMin){
            theMin = Math.min(...theStack);
        }
     }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return theStack.length ? theStack[theStack.length - 1]: null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return theMin;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */