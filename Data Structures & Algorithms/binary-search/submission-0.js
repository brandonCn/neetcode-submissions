class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let L = 0; // Start of array index pointer.
        let R = nums.length - 1; // End of array index pointer.

        //console.log('nums length', nums.length);
        //console.log('l', L);
        //console.log('r', R);

        // Calculate midpoint index
        // - (left index pointer + right index pointer) / 2.
        // - Then the value round it down.
        //let midpoint = Math.floor((l + r) / 2);
        //console.log('midpoint', midpoint);

        // ALTERNATIVE CALCULATE MIDPOINT MATH (AVOID INTEGER OVERFLOW IN SOME LANGUAGES)
        // - Get the distance of index between (right and left) / 2, then round down.
        //   Then add the left index.
        // const midpointTwo = l + Math.floor((r - l) / 2);
        // console.log('midpointTwo', midpointTwo);
    

        // While left pointer is before OR equal to right pointer.
        // - once the pointers meet or cross, drop out of the loop.
        while(L <= R){

            // Calculate midpoint index
            // - (left index pointer + right index pointer) / 2.
            // - Then the value round it down.            
            let midpoint = Math.floor((L + R) / 2);

            if(nums[midpoint] < target){
                // If midpoint is less than the target,
                // shift the left pointer to the index after the midpoint.
                // shifting the search area to the greater half of the array.
                L = midpoint + 1;
            } else if(nums[midpoint] > target){
                // If midpoint is greater than the target,
                // shift the right pointer to the index before the midpoint.
                // shifting the search area to the lesser half of the array. 
                R = midpoint - 1;
            } else {
                // Midpoint is on target, return the index of the target.
                return midpoint;
            }
            
        }

        return -1;

    }
}
