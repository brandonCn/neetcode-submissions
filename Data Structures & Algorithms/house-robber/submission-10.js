class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0; // No houses
        if (nums.length === 1) return nums[0]; // One house
        //if (nums.length === 2) return Math.max(nums[0], nums[1]);

        const houses = new Array(nums.length);

        houses[0] = nums[0];
        houses[1] = Math.max(nums[0], nums[1]);

        for(let i = 2; i < nums.length; i++){
            //nums[i] = Math.max(nums[i - 1], nums[i] + nums[i - 2])
            houses[i] = Math.max(houses[i - 1], nums[i] + houses[i - 2]);
        }   

        //return nums[nums.length - 1];     
        return houses[nums.length - 1];     
    }
}
