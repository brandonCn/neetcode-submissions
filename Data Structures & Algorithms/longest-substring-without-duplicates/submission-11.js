class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Use a set to keep track of active unique characters (no duplicates).
        //const activeCharSet = new Set();
        const activeCharHash = {};

        let l = 0; // left pointer, start of window.
        let maxSubString = 0; // store the max substring (max window length found)
        
        // r = right pointer, end of window.
        // - both L and R start at same spot in this example.
        // - the right expands the window as the loop progresses.
        // - when duplicates are found, the left srinks the window until the duplicates
        //   are gone (could go all the way down to window size of 1 in some cases).
        //   A set is used to detect duplicates.
        // - The max window length found is stored at the end of each loop
        //   so we don't lose the max found if the window srinks later.        
        for(let r = 0; r < s.length; r++){

            // If current char is already in the set, we've found a duplicate.
            // - While the character remains the in set, 
            //   keep deleting the left from the set then incrememnt the left.
            //   This will eventually remove the duplicate.
            //   Could also delete all avaiable characters, making the new window smaller.
            // while(activeCharSet.has(s[r])){
            //     activeCharSet.delete(s[l]);
            //     l++;
            // }

            while(activeCharHash[s[r]] !== undefined){
                delete activeCharHash[s[l]];
                l++;
            }

            //activeCharSet.add(s[r]); // at current char to the set.
            activeCharHash[s[r]] = 1;

            // Calculate and store max substring found.
            // - if current substring length is larger, store that as the new maxSubString
            // - current substring is r pointer - l pointer + 1.
            maxSubString = Math.max(maxSubString, (r - l) + 1);
        }

        return maxSubString;

    }
}
