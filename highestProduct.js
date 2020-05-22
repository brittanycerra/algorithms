function highestProductOf3(arrayOfInts) {
  if(arrayOfInts.length < 3){
    throw new Error("we have an error!");
  }
  
  /* 
  // Slower O(n lg n) version
  let sorted = arrayOfInts.sort((a, b) => {
    return a - b;
  });
  
  let len = sorted.length;
  let topThree = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  let bottomThree = sorted[0] * sorted[1] * sorted[len - 1];
  
  return Math.max(topThree, bottomThree);
  */
  
  
  // Calculate the highest product of three numbers
  let first = arrayOfInts[0];
  let second = arrayOfInts[0];
  let third = arrayOfInts[0];
  let lowest = 0;
  let secondLowest = 0;
  
  for(let i = 0; i < arrayOfInts.length; i++){
    let current = arrayOfInts[i];
    
    // Find lowest & second to lowest numbers if less than zero
    if (current < 0 ) {
    	if(current < lowest) {
      	secondLowest = lowest;
        lowest = current;
      } else if(current === lowest){
        secondLowest = lowest;
      }
    }
    
    // Current belongs in first or second & moves the values down
    if(current >= first){
      third = second;
      if(current === first){
        second = current;
      } else {
        second = first;
        first = current;
      }
    } else if(current >= second) {
      if(current === second){
        third = current;
      } else {
        third = second;
        second = current;
      }
    } else if(current > third) {
      third = current;
    }
    
  }
  
  let theProduct = first * second * third;
  
  if(lowest < 0 && secondLowest < 0){
    let otherProduct = lowest * secondLowest * first;
    
    theProduct = Math.max(otherProduct, theProduct);
    
    
  }
  
  return theProduct;
  
}