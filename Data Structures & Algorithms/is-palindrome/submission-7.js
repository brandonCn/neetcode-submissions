class Solution {

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        // Two pointers, left & right
        let [leftIndex, rightIndex] = [0, s.length - 1];
        console.log(leftIndex, rightIndex);

        // Compare the pointers
        // - if chars equal, increment left & decrement right. 
        while(leftIndex < rightIndex){

            // While leftIndex char is not alphanumeric
            // - ignore it, and shift pointer right.
            // - if leftIndex is no longer smaller than right
            //   break the loop as there are no more characters to check.
            while(leftIndex < rightIndex && !this.isAlphanumeric(s[leftIndex])){
                leftIndex++;
            }

            // While rightIndex char is not alphanumeric
            // - ignore it, and shift pointer right.
            // - if rightIndex is no longer smaller than left
            //   break the loop as there are no more characters to check.
            while(rightIndex > leftIndex && !this.isAlphanumeric(s[rightIndex])){          
                rightIndex--;
            }

            if(s[leftIndex].toLowerCase() === s[rightIndex].toLowerCase()){
                leftIndex++;
                rightIndex--;
            } else {
                return false;
            }
        }

        return true;
    }  

    /**
     * Check if a character is alphanumeric
     * @param {char} char
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }      
}
