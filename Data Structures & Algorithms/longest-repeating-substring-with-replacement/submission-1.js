class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Store the max window length found.
        // - As we loop through, we will update this value whenever a larger 
        //   valid window has been found. This will be our answer.
        let maxWindowFound = 0;

        // A set of all the unique characters in the string.
        // - We will loop through the string once per unique character. 
        let charSet = new Set(s);

        // "How long can the window be if we want the entire window to become c using at    
        //  most k replacements?"
        for (let c of charSet) {
            // Keep track of how many times this character is duplicated.
            let count = 0; 
            let l = 0; // Start of window.

            // r is end of window.
            // From the start of the string, slide the window to the right
            // until the end of the string.
            for (let r = 0; r < s.length; r++) {

                if (s[r] === c) {
                    // If character matches, increase the frequency of this
                    // character found in the window.
                    count++;
                }

                // If the number of characters that don't match c is greater
                // than k, the window is invalid and we need to shrink it.
                // - Calcuate non c characters via length of window minus count of c
                while (r - l + 1 - count > k) {

                    if (s[l] === c) {
                        // If the window is losing the character (c) 
                        // we are counting duplicates of, reduce the duplicate count.
                        // to keep the duplicate count accurate for the new window.
                        count--;
                    }
                    l++; // reduce window size.
                }

                // Non c characters are less than k.
                // Store the current window size, if larger than largest ever found.
                maxWindowFound = Math.max(maxWindowFound, r - l + 1);
            }
        }
        return maxWindowFound;        
    }
}
