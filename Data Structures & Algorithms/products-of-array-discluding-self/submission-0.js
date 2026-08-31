class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Loop through the array.
        // - Get the product of all numbers.
        // - Count the zeros.

        let product = 1;
        let zeroCount = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                product = product * nums[i];
            } else {
                zeroCount++;
            }
        }

        // If zeroCount is more than 1, that means all response indexes will be 0.
        // - Multiplying by 0 = 0.
        // - Multiplying all indexes, besides the current index, will be 0 because there is no 
        //   situation where 0 is not involved in the multiplication.
        // - If there was only 1 zero, we'd at least have one situation where there was no 0 
        //   involved.
        if(zeroCount > 1){
            return new Array(nums.length).fill(0);
        }

        const resultsArray = []; // return array of results.

        // Loop through the nums array.
        for(let i = 0; i < nums.length; i++){
            if(zeroCount === 1){
                // If zeroCount is 1...
                // - All indexes that aren't the 0, will be set to 0.
                // - The index with 0, will get the product of all the non 0 indexes.
                if(nums[i] === 0){
                    resultsArray.push(product);
                } else { 
                    resultsArray.push(0);
                }
            } else { 
                // Else, no 0s.
                // - Each index is the product of all other indexes divided by the current index.
                resultsArray.push(product / nums[i]);
            }
        }

        return resultsArray;
    }
}
