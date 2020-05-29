/* Given a m * n matrix of ones and zeros, return how many square submatrices have all ones. */

var countSquares = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let newMatrix = new Array(rows);
    
    for(let i = 0; i < rows; i++){
        newMatrix[i] = new Array(cols).fill(0);
    }
    count = 0;
    
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(row === 0 || col === 0){
                newMatrix[row][col] = matrix[row][col];
            } else{
                if( matrix[row][col] === 1 ){
                    let topLeft = newMatrix[row - 1][col - 1];
                    let top = newMatrix[row - 1][col];
                    let left = newMatrix[row][col - 1];

                    newMatrix[row][col] = Math.min(topLeft, top, left) + 1;
                } else {
                    newMatrix[row][col] = 0;
                }
            }
            
            count += newMatrix[row][col];
        }
    }
    
    return count;
    
};