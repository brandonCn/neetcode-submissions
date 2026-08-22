class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = {};

        for(let i = 0; i < nums.length; i++){
            numsMap[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++){
            const diff = target - nums[i];

            if(numsMap?.[diff] && numsMap[diff] !== i){
                return [i, numsMap[diff]]
            }
        }
    }
}
