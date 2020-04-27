/**
Given two strings text1 and text2, return the length of their longest common subsequence.
A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
If there is no common subsequence, return 0.
 */
 
var longestCommonSubsequence = function(text1, text2) {
    let table = [];
    let maxSub = 0;
    
    // Construct table with extra space alloted in row & col
    for(let i = 0; i <= text1.length; i++) {
        table.push(new Array(text2.length + 1).fill(0));
    }
    
    for(let row = 1; row < table.length; row++) {
        for(let col = 1; col < table[0].length; col++) {
            // If el at row-1 and col-1 is the same, add 1 to count stored in table's row-1, col-1 spot
            if(text1[row-1] === text2[col-1]) {
                table[row][col] = table[row-1][col-1] + 1
            } else { // The elements are not the same, so take higher of count at table's row-1, col or row, col-1
                table[row][col] = Math.max(table[row-1][col], table[row][col-1]);
            }
            
            // Update maxSub with new highest count in table
            maxSub = Math.max(maxSub, table[row][col]);
        }
    }
    return maxSub;
};