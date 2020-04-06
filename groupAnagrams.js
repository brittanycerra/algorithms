// Given an array of strings, group anagrams together.
var groupAnagrams = function(strs) {
	let sortedWords = new Map();
  
	for(let i = 0; i < strs.length; i++){
  	    let currentCheck = strs[i].split('').sort().join('');
    
        if( sortedWords.get(currentCheck) ) {
            let currentArray = sortedWords.get(currentCheck);
          currentArray.push(strs[i]);
          sortedWords.set(currentCheck, currentArray);
        }
        else {
            sortedWords.set(currentCheck, [strs[i]]);
        }
    }
  
    return Array.from(sortedWords.values());

};

// Improvements
var groupAnagrams2 = function(strs) {
    let sortedWords = {};
    for (let str of strs) {
        let currentCheck = str.split('').sort().join('');

        if (sortedWords[currentCheck] == null){
            sortedWords[currentCheck] = [str];
        }
        else {
            sortedWords[currentCheck].push(str);
        }
    }

    return Object.values(sortedWords);
};