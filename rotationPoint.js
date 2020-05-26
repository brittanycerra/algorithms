/* Write a function for finding the index of the alphabetical "rotation point" */

function findRotationPoint(words) {
  const firstWord = words[0];
  let floorIndex = -1;
  let ceilingIndex = words.length;
  
  while(floorIndex + 1 < ceilingIndex) {
    let guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

    if( words[guessIndex] < firstWord ) { // past rotation point. go left

      if( words[guessIndex] < words[guessIndex - 1]) {
        return guessIndex;
      }
      
      ceilingIndex = guessIndex;
    } else {
      floorIndex = guessIndex;
    }
  }
    
  console.log('No rotation.')
    
}
