// Given an integer array arr, count element x such that x + 1 is also in arr.
// If there're duplicates in arr, count them seperately.

var countElements = function(arr) {
    let counter = 0;
    
     for(let i = 0; i < arr.length; i++){
     	if( arr.indexOf(arr[i] + 1) > -1 ){
      	    counter++;
        }
     }
    
    return counter;
};