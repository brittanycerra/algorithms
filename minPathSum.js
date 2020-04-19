/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

var minPathSum = function(grid) {
  let height = grid.length;
  let width = grid[0].length;

  // Set up sums array to keep track of cost of each path
  let sums = new Array(height);

  for(let i = 0; i < height; i++){
    sums[i] = new Array(width).fill(0);
  }

  for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
      // Make top/left super costly if it isn't possible to have traveled from one of those positions
      let top = i === 0 ? Number.POSITIVE_INFINITY : sums[i-1][j];
      let left = j === 0 ? Number.POSITIVE_INFINITY : sums[i][j-1];
      // Min of top and left will give least expensive path to bottom, right el
      // Min is 0 for the sums[0][0] because we didn't travel from any other position to arrive there
      let min = ( i > 0 || j > 0 ) ? Math.min(top, left) : 0;
        
      // El is itself plus min
      sums[i][j] = grid[i][j] + min;
    }
  }

  return sums[height - 1][width - 1];
};