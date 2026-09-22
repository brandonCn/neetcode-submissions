class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const stair1 = cost[0];
        const stair2 = cost[1];

        for(let i = 2; i < cost.length; i++){
            const temp = cost[i-1];
            cost[i] = cost[i] + Math.min(cost[i-2], cost[i-1]);
            cost[i-1] = temp;
        }

        return Math.min(
            cost[cost.length - 1],
            cost[cost.length - 2]
        )
    }
}