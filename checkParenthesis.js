/**
 Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
 */
 
var checkValidString = function(s) {
  if( s === '' ){
    return true;
  }

  let openOptions = ['(', '*'];
  let closeOptions = [')', '*'];
  let count = 0;
  
  // Moving forward through string
  for(let i = 0; i < s.length; i++){
    if( openOptions.indexOf(s[i]) > -1 ){ // Sequence has begun
      count++;
    } else {
      // If a sequence has been counted yet, this char is out of place
      if( count < 1 ) {
        return false;
      }
      // Consider sequence closed
      count--;
    } 
  }

  // Reset count and move backward
  count = 0;

  for(let i = s.length - 1; i >= 0; i--){
    if( closeOptions.indexOf(s[i]) > -1 ){ // Reverse sequence has begun
      count++;
    } else {
      // If a sequence has been counted yet, this char is out of place
      if( count < 1 ) {
        return false;
      }
      // Consider sequence closed
      count--;
    }
  }
  
  return true;
};