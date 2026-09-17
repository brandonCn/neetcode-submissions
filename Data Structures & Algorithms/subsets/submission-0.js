class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        const subset = [];
        this.dfs(nums, 0, subset, res);
        return res;
    }

    /**
     * @param {number[]} nums
     * @param {number} i
     * @param {number[]} subset
     * @param {number[][]} res
     * @return {void}
     */
    dfs(nums, i, subset, res) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }

        // Don't pick num i for the dfs.
        // i + 1, explores this same function, for the next index.
        this.dfs(nums, i + 1, subset, res);

        // Pick num i for the dfs.
        subset.push(nums[i]);
        this.dfs(nums, i + 1, subset, res);
        subset.pop(); // Backtrack to the previous index to decide to include it 
    }
}