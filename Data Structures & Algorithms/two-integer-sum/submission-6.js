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
            // Create a map... of the numbers in the array to their indexes for quick 
            //   lookup.
            numsMap[nums[i]] = i;
        }

        console.log(numsMap);

        for(let i = 0; i < nums.length; i++){
            // Subtract the current number in 
            //   the array against the target, to find the other number we are looking  
            //   for to sum to the target. The difference is the number we need.
            const jDifference = target - nums[i];

            console.log(jDifference);

            // If the difference number exists in the map, return index of the 
            // current number and the index of the difference number.
            // & IF the difference number's index is not the same as the current index.
            if(numsMap?.[jDifference] && numsMap[jDifference] !== i){
                return [i, numsMap[jDifference]];
            }
        }

        return [];
    }
}
