//Write a function to find the rectangular intersection of two given rectangles.

function findRectangularOverlap(rect1, rect2) {
  let xOverlap = overlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  let yOverlap = overlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);
  
  if( !xOverlap.overlapLength || !yOverlap.overlapLength ){
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null
    };
  }

  return { 
    leftX: xOverlap.startPoint, 
    bottomY: yOverlap.startPoint, 
    width: xOverlap.overlapLength, 
    height: yOverlap.overlapLength
  };
}

function overlap(point1, length1, point2, length2){
  const highestStart = Math.max(point1, point2);
  const lowestEnd = Math.min(point1 + length1, point2 + length2);
    
  // Return null if no overlap
  if( highestStart >= lowestEnd ) {
    return { startPoint: null, overlapLength: null };
  }
  
  const overlapLength = lowestEnd - highestStart;
  
  return { startPoint: highestStart, overlapLength: overlapLength };
}