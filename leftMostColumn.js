/*
A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.
*/

var leftMostColumnWithOne = function(binaryMatrix) {
    const length = binaryMatrix.dimensions()[0];
    const width = binaryMatrix.dimensions()[1];
    // Start in top, left corner
    let row = 0;
    let col = width - 1;
    let mostLeft = -1;

    while( row < length && col >= 0 ) {
        // Go left
        if( binaryMatrix.get(row,col) === 1 ){
            mostLeft = col;
            col--;
        } else { // Go right
            row++;
        }
    }
    
    return mostLeft;
}