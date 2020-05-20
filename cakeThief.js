/*
Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.
*/

function maxDuffelBagValue(cakeTypes, weightCapacity) {
  // Case: Cakes with no weight
  
  if(!cakeTypes || weightCapacity < 1) {
  	return 0
  }
  
  // Array to hold the maximum possible value at every
  // integer capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0)
	
	for(let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
	  let currentMaxValue = 0;
	  
	  for(let j = 0; j < cakeTypes.length; j++) {
	    const cakeType = cakeTypes[j];

	    // Cake weighs 0 & has a value
	    if( cakeType.weight === 0 && cakeType.value > 0){
	      return Infinity;
	    }
	    // If the cake weighs as much or less than the current capacity
      // see what our max value could be if we took it!
	    if(cakeType.weight <= currentCapacity){
	      // Find out how much space would be left in duffle bag
	      // Add the max value at that leftover "space" value's max value
	      const maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];
	      currentMaxValue = Math.max(currentMaxValue, maxValueUsingCake);
	      maxValuesAtCapacities[currentCapacity] = currentMaxValue;
	    }
	    
	  }
	}
	
	return maxValuesAtCapacities[weightCapacity];
}
