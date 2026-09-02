class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Use a set to keep track of active unique characters (no duplicates).
        const activeCharSet = new Set();

        let l = 0; // left pointer
        let maxSubString = 0; // store the max substring (max window length found)
        
        // r = right pointer.
        // - both L and R start at same spot in this example.
        // - the right expands the window.
        // - when duplicates are found, the left srinks the window until the duplicates
        //   are gone (could go all the way down to window size of 1 in some cases).        
        for(let r = 0; r < s.length; r++){

            // If current char is already in the set, we've found a duplicate.
            // - While the character remains the in set, 
            //   keep deleting the left from the set then incrememnt the left.
            //   This will eventually remove the duplicate.
            while(activeCharSet.has(s[r])){
                activeCharSet.delete(s[l]);
                l++;
            }

            activeCharSet.add(s[r]); // at current char to the set.

            // Calculate and store max substring found.
            // - if current substring length is larger, store that as the new maxSubString
            // - current substring is r pointer - l pointer + 1.
            maxSubString = Math.max(maxSubString, (r - l) + 1);
        }

        return maxSubString;

    }
}
