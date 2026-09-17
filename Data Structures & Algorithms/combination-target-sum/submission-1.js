class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];
        let cur = [];        

        const backtrack = (i, cur, total) => {
            if(total === target){
                res.push([...cur])
                return;
            }
            if(i >= nums.length || total > target){
                return
            }

            cur.push(nums[i]);
            backtrack(i, cur, total + nums[i]);
            cur.pop();
            backtrack(i + 1, cur, total)
        }

        backtrack(0, cur, 0)

        return res;
    }

}