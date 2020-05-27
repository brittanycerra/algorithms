/**
 * @param {number[]} cost
 * @return {number}

On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
Once you pay the cost, you can either climb one or two steps. 
You need to find minimum cost to reach the top of the floor, 
and you can either start from the step with index 0, or the step with index 1.

*/
var minCostClimbingStairs = function(cost) {
    // Initiate costSoFar with first 2 steps' costs
    let costSoFar =  [cost[0], cost[1]];
    let length = cost.length;
    
    for(let i = 2; i < length; i++){
        // minCost is the min of the previous two costs + the current cost
        let minCost = Math.min(costSoFar[i-1], costSoFar[i - 2]) + cost[i];
        
        costSoFar.push(minCost);
    }
    
    // Push min of last two steps to get final cost
    costSoFar.push(Math.min(costSoFar[length - 1], costSoFar[length-2]));
    
    return costSoFar[length];
};