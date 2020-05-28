/*Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place */

function reverseWords(message) {
  reverseCharacters( message, 0, message.length - 1 );
  
  function reverseCharacters( message, firstIndex, lastIndex ) {
    // Decode the message by reversing the words
    let left_index = firstIndex;
    let right_index = lastIndex;
    
    while( left_index < right_index ) {
      // Swap
      const temp_index = message[left_index];
      message[left_index] = message[right_index];
      message[right_index] = temp_index;
      
      // Get closer to middle
      left_index++;
      right_index--;
      
    }
  }
  
  // Grab start and end of each word
  let currentWordStartIndex = 0;
  
  for( let i =0; i <= message.length; i++ ) {
    // If this is the last char or this index is a space, this is the end of the word
    if( i === message.length || message[i] === ' ' ) {
      // Reverse word
      reverseCharacters( message, currentWordStartIndex, i - 1 );
      
      // Update start index so we grab next word
      currentWordStartIndex = i + 1;
      
    }
  }
  
  return message;
}