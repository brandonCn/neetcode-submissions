class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicateNums = {};
        let foundDuplicate = false;
        
        for(let i = 0; i < nums.length; i++){
            if(duplicateNums?.[nums[i]]){
                // Num has already been found,
                //   so increment it's count.

                duplicateNums[nums[i]] += 1;
                foundDuplicate = true; // set duplicate flag to true.
                break; // break out of loop for console log.
            } else {
                duplicateNums[nums[i]] = 1;
            }
        }

        return foundDuplicate;
    }
}
