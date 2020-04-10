// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
var backspaceCompare = function(S, T) {
    arrS = S.split('');
    arrT = T.split('');
    
    return dealWithBackspace(arrS) === dealWithBackspace(arrT);
    
};

function dealWithBackspace(arr){
	let newArr = [];

	for(let i = 0; i < arr.length; i++){
    if( arr[i] !== '#') {
      newArr.push(arr[i]);
    } else {
      newArr.pop(arr[i-1]);
    }
  }
   
   return newArr.join('');
}

// Space complexity improvement: Pointer solution
var backspaceCompare = function(S, T) {
    return dealWithBackspace(S) === dealWithBackspace(T);
};

function dealWithBackspace(str){
	let newStr = '';
    let skip = 0;

	for( let i = str.length - 1; i >= 0; i-- ) {
        if( str[i] === '#' ) {
            skip += 1;
        } else if( skip ) {
            skip -= 1;
        } else {
            newStr += str[i];
        }
  }
   return newStr;
}