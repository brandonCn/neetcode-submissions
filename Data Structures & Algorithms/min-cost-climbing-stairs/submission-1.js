class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {

        const cache = {};
        const dfsToTopStair = (stair) => {

            // When past the last stair (cost.length - 1),
            // return 0 for invalid path 
            // (avoids adding to sum cost)
            if(stair >= cost.length){
                return 0;
            }

            if(cache[stair]){
                return cache[stair];
            }

            // The cost of this stair plus the
            // cheapest cost decision path to top stair.
            cache[stair] = 
                cost[stair] 
                + Math.min(dfsToTopStair(stair + 1), dfsToTopStair(stair + 2));

            return cache[stair];
        }

        return Math.min(dfsToTopStair(0), dfsToTopStair(1));
    }
}
