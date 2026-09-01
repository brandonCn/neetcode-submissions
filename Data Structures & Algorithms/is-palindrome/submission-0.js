class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        // Condition String
        // - string are immutable, so you need to create a new string.
        const conditionedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        console.log(conditionedString);

        // Two pointers, left & right
        let [leftIndex, rightIndex] = [0, conditionedString.length - 1];
        console.log(leftIndex, rightIndex);

        // Compare the pointers
        // - if chars equal, increment left & decrement right. 
        while(leftIndex < rightIndex){
            if(conditionedString[leftIndex] === conditionedString[rightIndex]){
                leftIndex++;
                rightIndex--;
            } else {
                return false;
            }
        }

        return true;

    }
}
