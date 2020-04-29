//Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.
function fib(n) {
  // Edge case: n is negative
  if( n < 0 ) {
    throw new Error('Fib cannot be negative');
  }
  
  if( n === 0 || n === 1) {
    return n;
  }
  
  // Build up fib sequence from the bottom up
  let previousPrev = 0;
  let prev = 1;
  let current;
  
  for(let i = 1; i < n; i++){
    current = prev + previousPrev;
    previousPrev = prev;
    prev = current;
  }
  
  return current;
  
}