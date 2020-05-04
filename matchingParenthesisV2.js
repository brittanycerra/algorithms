/*
Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
*/

function getClosingParen(sentence, openingParenIndex) {

  // Find the position of the matching closing parenthesis
  let count = 1;
  
  for(let i = openingParenIndex + 1; i < sentence.length; i++){
    if( sentence[i] == "(" ){
      count++;
    } else if( sentence[i] == ")" ) {
      count--;
    }
    
    if( count === 0 ){
      return i;
    }
  }
  
  // Count doesn't equal zero at the end of loop
  // here's a mismatch
  throw new Error("mismatch");
}