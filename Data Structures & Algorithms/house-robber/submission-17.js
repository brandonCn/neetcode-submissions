class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {

        const cache = {};
        const dfsHousesToRob = (house) => {

            // If past array length/out of bounds,
            // invalid path return 0 to exit the search.
            if(house >= nums.length){
                return 0;
            }

            if(cache[house]){
                return cache[house];
            }

            // From this house,
            // Explore choices that return the greater value.
            // - Skip this house (i+1)
            // - Steal from this house, and then try 2 houses down.
            // Repeat these choices per house til at the last house.
            cache[house] = Math.max(
                dfsHousesToRob(house+1),            
                nums[house] + dfsHousesToRob(house+2)   
            )
            
            return cache[house]
        }

        // Start with house 0.
        return dfsHousesToRob(0);
    }
}
