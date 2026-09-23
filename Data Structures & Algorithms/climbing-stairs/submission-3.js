class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const stairs = new Array(n);

        stairs[0] = 1;
        stairs[1] = 2;
        
        for(let i = 2; i < stairs.length; i++){
            stairs[i] = stairs[i-1] + stairs[i-2];
        }

        return stairs[n - 1]
    }
}
