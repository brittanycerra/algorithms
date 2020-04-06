
// Say you have an array for which the ith element is the price of a given stock on day i.
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

var maxProfit = function(prices) {
  let currentPotential = 0;
  let bestProfitSoFar = 0;

  for(let i = 1; i < prices.length; i++){
  	let currentPrice = prices[i];
    let prevPrice = prices[i - 1];
    let newPotential = currentPrice - prevPrice;
    
    currentPotential = Math.max(currentPotential, newPotential + currentPotential);
    bestProfitSoFar = Math.max(bestProfitSoFar, currentPotential);
    
  }
  
  return bestProfitSoFar;
    
};