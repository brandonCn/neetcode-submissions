class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        // Cache previously calculated distinct 1 & 2 step combinations for stairs.
        // - so we don't need to recompute them (takes time complexity from O(n^2) to O(n))
        const cache = {};

        const dfsToTopStair = (stair) => {

            // If at top stair & not past it,
            // return 1 (valid path); else, return 0 (invalid path)
            // - This is the base case/end of dfs path to top stair
            //   from any stair.
            if(stair >= n){
                return stair === n ? 1: 0;
            }

            // Check if the stair is already in the cache, if so, return it's already
            // computed value (to avoid recompute via dfs chain)
            if(cache[stair]){
                return cache[stair];
            }


            // Calculate valid paths from this stair down to 0,
            // for both options (1 step down and 2 steps down).
            // If valid, return 1 per valid path (sum them if both 1 and 2 steps work).

            // Calculate the valid paths from this stair up to the top stair,
            // for both options (1 step up and 2 steps up).
            // Sum the valid paths of each choice.
            // Valid paths return 1 (which stack on each other via
            // recursion per stair used).
            cache[stair] = dfsToTopStair(stair + 1) + dfsToTopStair(stair + 2);
            return cache[stair];

        }

        // Start from stair 0
        return dfsToTopStair(0);
    }
}
