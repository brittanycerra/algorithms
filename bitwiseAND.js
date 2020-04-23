// Inclusive range of m to n where m <= n
var rangeBitwiseAnd = function(m, n) {
    // Keep track of offset so that we can shift back later
    let offset = 0;
    
    // If m !== n, the last bit will never be 1 because it flips 1/0 with each increase
    // Divide by two until m === n
    while (m !== n) {
        // Increment offset
        offset++;
        // Shift right to divide each number by 2
        m >>= 1;
        n >>= 1;
    }
    
    // Left shift by the # of times right shifted
    return m << offset;
};