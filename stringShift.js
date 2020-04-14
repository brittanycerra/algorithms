// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.


var stringShift = function(s, shift) {
  let arr = s.split('');
  let leftMovement = 0;
  let rightMovement = 0;

  // Total movement in each direction for shift
  for(let i = 0; i < shift.length; i++) {
    // Left
    if(shift[i][0] === 0) {
      leftMovement += shift[i][1];
    } else { // Right
      rightMovement += shift[i][1];
    }
  }

  if( leftMovement === rightMovement ){
    return s;
  }

  let newAmount = leftMovement - rightMovement;
  let absValue = Math.abs(newAmount);
  // If absolute value of newAmount is larger than arr length, use mod instead
  if( absValue > arr.length ){
    absValue = Math.abs(newAmount % arr.length);
  }

  if(newAmount > 0) {
    // Move left
    return moveMe(arr, "left", absValue );
  } else { 
    // Number is negative, so rightMovement must be greater than left. Move right.
    return moveMe(arr, "right", absValue );
  }
};

function moveMe(arr, direction, amount){
  if( direction == "left") {
    let moved = arr.splice(0, amount);
    arr.push(...moved);
  } else { // Moving right
    let moved = arr.splice(arr.length - amount);
    arr.unshift(...moved);
  }
    
  return arr.join('');
}


// Solution that doesn't calculate total direction
var stringShift2 = function(s, shift) {
    const chars = s.split('');

    for (let i = 0; i < shift.length; i++) {
        const [direction, amount] = shift[i];
        const isLeft = direction === 0;
        const isRight = direction === 1;

        if (isLeft) {
            const letters = chars.splice(0, amount);
            chars.push(...letters);
        } else if (isRight) {
            const letters = chars.splice(-amount);
            chars.unshift(...letters);
        }
    }

    return chars.join('');
};