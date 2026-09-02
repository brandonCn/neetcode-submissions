class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // Map of Characters found and their latest index:
        // {'char' -> latestIndex}
        let charMap = {};

        let l = 0;      // left pointer of window.
        let res = 0;    // max length of unique substrings.

        // Loop right pointer of window through each index.
        // - the right expands the window.
        // - when duplicates are found, the left srinks the window until the duplicates
        //   are gone.
        for (let r = 0; r < s.length; r++) {
            
            // If the char is in the map already.
            // Move the left of the window to the 
            if (charMap[s[r]] !== undefined) {
                l = Math.max(charMap[s[r]] + 1, l);
            }

            charMap[s[r]] = r;
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}