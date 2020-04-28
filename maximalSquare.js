/**
 Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 */
 
var maximalSquare = function(matrix) {
    // Edge case
    // If matrix has no elements
    if( !matrix.length || !matrix[0].length ){
        return 0;
    }
 
    let smallestCase = false;
    let mLen = matrix.length;
    let mWidth = matrix[0].length;
    let squareTracker = new Array(mLen);
    let maxSoFar = 0;
    
    // Construct helper array to match matrix length
    // Match the values of the first row and column of the matrix
    for(let i = 0; i < mLen; i++){
        squareTracker[i] = new Array(mWidth);
        squareTracker[i][0] = parseInt(matrix[i][0]);

        // Update smallestCase var if there's a one in this row
        if( !smallestCase ){
          smallestCase = checkForOne(matrix[i]);
        }
    }

    for(let j = 1; j < mWidth; j++){
        squareTracker[0][j] = parseInt(matrix[0][j]);
    }
    
    // Start at 2nd row and col
    // If element is a 1, record 1 + min(left, up, diagonal up-left) relevant to element in squareTracker
    // Values of 1 imply there's a zero in the square
    for(let row = 1; row < mLen; row++){
        for(let col = 1; col < mWidth; col++){
          if( matrix[row][col] == 1 ){
              squareTracker[row][col] = Math.min(squareTracker[row-1][col], squareTracker[row-1][col-1], squareTracker[row][col-1]) + 1;
              maxSoFar = Math.max(maxSoFar, squareTracker[row][col]);
          } else { // Element is zero
              squareTracker[row][col] = 0;
          }
        }
    }

    // If maxSoFar is 0 (no 2x2 squares) and smallestCase is true ('1' in the matrix), add 1 to maxSoFar
    if( !maxSoFar && smallestCase ){
      maxSoFar += 1;
    }

    return maxSoFar *= maxSoFar;
    
};

function checkForOne(array){
  return array.indexOf('1') > -1 ? true : false;
}