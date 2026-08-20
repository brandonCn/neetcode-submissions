class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicateNums = {};
        
        for(let i = 0; i < nums.length; i++){
            if(duplicateNums?.[nums[i]]){
                // Num has already been found
                duplicateNums[nums[i]] += 1;
                return true;
            } else {
                duplicateNums[nums[i]] = 1;
            }
        }

        return false;
    }
}
