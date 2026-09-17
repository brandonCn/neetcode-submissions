class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        
        //nums=[2,3,6,7]
        //target=7
        const backtrack = (i, cur, total) => {
            // Exit path is total is the target
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

            cur.push(nums[i]); // try this.
            backtrack(i, cur, total + nums[i]); // Try adding itself (i)

            cur.pop(); // undo last choice.
            backtrack(i + 1, cur, total) // try adding next number (i+1)
        }

        backtrack(0, [], 0)

        return res;
    }

}