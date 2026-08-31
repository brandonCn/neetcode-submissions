class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Simply check if the correct patterns exist.
        // - We can rely on the fact that the inner most parentheses will have a matching pattern
        //   if true. Which means we can work from inside matching patterns to outside.

        // string.includes() - finds exact matching pattern (not fuzzy match).
        // string.replace()
        // - replaces exact matching pattern.
        // - if no match, leaves string alone/as is.
        while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
            s = s.replace('()', '');
            s = s.replace('{}', '');
            s = s.replace('[]', '');
        }

        // If all patterns have been removed, this will resolve to true; else, false.
        return s === '';
    }
}
