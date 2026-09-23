class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0; // No houses
        if (nums.length === 1) return nums[0]; // One house

        const maxChoice = new Array(nums.length);

        // Establish the baseline for recurrance pattern.
        // Between house 0 and house 1, choose what the best maxChoice
        // of the two is for maxChoice[1].
        maxChoice[0] = nums[0];
        maxChoice[1] = Math.max(nums[0], nums[1]); 

        // Recurrence pattern.
        for(let i = 2; i < nums.length; i++){
            // For house 3, which is greater?
            // - house3 money + house1 money
            // - Skipping house1 for house2 money
            maxChoice[i] = Math.max(
                maxChoice[i - 1], 
                nums[i] + maxChoice[i - 2]
            );
        }   

        return maxChoice[nums.length - 1];     
    }
}
