// Write a function for doing an uniform, in-place shuffle of an array.

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {
  if(array.length <= 1) return
  
  for(let i = 0; i < array.length; i++) {
        // The random choice should be i or after. Indices before i have already been placed.
        const randomIndex = getRandom(i, array.length - 1);
        
        // If randomIndex === i, the value stays in place, if not...
        if( randomIndex !== i ){
          const prevValue = array[i];
          // Switch previous value with new, random value
          array[i] = array[randomIndex];
          array[randomIndex] = prevValue;
        }
      }
  

}