class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Create a map to count frequency of each character.
        let count = new Map();

        // Store the largest window size found of duplicate characters.
        // - including using k to swap non duplicates for duplicates.
        let res = 0;

        let l = 0, // left window pointer.
            maxf = 0; // larger character frequency

        // Slide right window pointer across total string.
        for (let r = 0; r < s.length; r++) {

            // Update the character frequency map for this character (+1)
            count.set(s[r], (count.get(s[r]) || 0) + 1);

            // If this character has the highest frequency, store it.
            maxf = Math.max(maxf, count.get(s[r]));

            // If the window size minus most frequent character is greater than k
            // strink the window. Because we cannot swap more than k characters.
            while (r - l + 1 - maxf > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }

            // Store window size.
            // If current window is larger than largest found, update storage 
            // with the new largest.
            res = Math.max(res, r - l + 1);
        }

        return res;        
    }
}
