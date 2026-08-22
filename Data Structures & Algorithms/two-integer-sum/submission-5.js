class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[i,j]} - return the two indexes of the array,
     *   which have values that sum to the target.
     */
    twoSum(nums, target) {
        let numsMap = {}; // HashMap to store the numbers with their index.
        for(let i = 0; i < nums.length; i++){
            numsMap[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++){
            const jDifference = target - nums[i];

            if(numsMap?.[jDifference] && numsMap[jDifference] !== i){
                return [i, numsMap[jDifference]];
            }
        }

        return [];
    }
}
