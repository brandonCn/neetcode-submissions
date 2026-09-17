class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let cur = [];        

        
        // nums = [2,5,6,9]
        // target = 9
        const backtrack = (i, cur, total) => {
            if(total === target){
                res.push([...cur])
                return;
            }
            
            // Exit path early if 
            // - index is greater than array length (end of nums to try)
            // - current total is greater than the target
            if(i >= nums.length || total > target){
                return
            }

            cur.push(nums[i]);
            backtrack(i, cur, total + nums[i]);

            cur.pop();
            backtrack(i + 1, cur, total)
        }

        backtrack(0, [], 0)

        return res;
    }

}