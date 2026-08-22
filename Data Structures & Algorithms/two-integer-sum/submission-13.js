class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}; // MAP for numbers and indexes. Num -> Index


        // Loop through num array. 
        for(let i = 0; i < nums.length; i++){

            // Get diff of current number and target
            const diff = target - nums[i];

            // If diff is in the hash map, 
            // return the diff index and current index num.
            if(map[diff] !== undefined){
                return [map[diff], i]
            }

            // Diff isn't in the hash map, add it.
            map[nums[i]] = i;
        }

        return [];
    }
}
