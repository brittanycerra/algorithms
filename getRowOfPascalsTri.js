// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
// Note that the row index starts from 0.
// Use recursion

function getRow(rowIndex) {
    // Base case:
    if (rowIndex < 2) {
        return new Array(rowIndex + 1).fill(1);
    }
    
    let previousRow = getRow(rowIndex - 1);
    
    for (let i = 0; i < previousRow.length - 1; i++) {
        previousRow[i] += previousRow[i+1];
    }
    
    previousRow.unshift(1);
    
    return previousRow;
}