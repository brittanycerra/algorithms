// Implement pow(x, n), which calculates x raised to the power n (xn)

var myPow = function(x, n, result) {
    
    result = result || 1;
    
    // Handle negative exponents
    if( n < 0) {
        x = 1/x;
        n = -n;
    }
    
    if( n === 0 ) {
       return 1;
    }
    
    if( n === 1 ) {
        return x * result;
    }
    
    return n % 2 === 0 ? myPow(x * x, n/2, result) : myPow(x * x, Math.floor(n/2), result * x);

};