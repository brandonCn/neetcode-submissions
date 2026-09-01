class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort in ascending order, for two pointer logic.
        nums.sort((a,b) => a - b);

        const results = []; // result storage of tripple combos that sum to 0.

        // Loop through all nums
        // - current index is a constant variable for the math,
        //   so the other two variables can be used for two pointer math.
        //   *remember the target is 0.
        for(let i = 0; i < nums.length; i++){
            const a = nums[i]; // constant to use against the two pointer.

            // Skip previous duplicate we've already checked.
            if( i > 0 && nums[i] === nums[i - 1] ){
                continue; // Jumps to next iterator in the for loop.
            }

            // Start left pointer right of current index.
            // - b/c current index is furthest left in the array already.
            let l = i + 1;

            // Right point set to end of array.
            let r = nums.length - 1;

            // Start two pointer logic loop.
            while(l < r){
                // Sum we are checking equals 0.
                // - a = constant current iterator of for loop (num[i]).
                // - num[l] = left pointer.
                // - num[r] = right pointer.
                const sum = a + nums[l] + nums[r];

                if(sum > 0){
                    // too big, reduce right.
                    r--;
                } else if(sum < 0){
                    // too small, increase left.
                    l++;
                } else {
                    // equals 0, submit combination.
                    results.push([a, nums[l], nums[r]]);

                    // Move two pointers inwards for the next while loop run.
                    // - To find other pointer combos that may work with the constant
                    //   (nums[i]).
                    r--;
                    l++;

                    // Check if the newly moved inward left & right pointers
                    // are pointing to values that have already been used for them
                    // to avoid duplicates.
                    // - also make sure the pointers haven't overlapped/crossed.
                    while(l < r && nums[l] === nums[l - 1]){
                        l++;
                    }

                    while(r > l && nums[r] === nums[r + 1]){
                        r++;
                    }
                }
            }
        }

        return results;
    }
}
