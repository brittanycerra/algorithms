// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

var lastStoneWeight = function(stones) {
    while( stones.length > 1 ) {
        stones.sort( (a,b) => {
            return a -b;
        });
      
        let length = stones.length;
        let x = stones[length - 2];
        let y = stones[length - 1];
        let newStone = 0;

        if( x !== y ){ // x must be smaller than y
            newStone = y - x;
        }

        // Remove last two elements from array
        stones.splice(length - 2);

        // Add new stone weight to end of array
        if(newStone){
            stones.push(newStone);
        }
    }
    
    // If there is a stone left, return its weight
    // Otherwise, return 0
    return stones.length ? stones[0] : 0;
    
};