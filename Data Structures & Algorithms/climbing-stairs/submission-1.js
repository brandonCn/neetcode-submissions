/* 
    MY RECURSION STARTING FROM TOP STAIR.

    Starting from top stair (N), 
    At each stair, run a depth first search 
    (right first, left second) for each decision
    (step back 1 step, step back 2 steps). 

    This will run these same choices on each step.

    If any choice in the chain hits 0 (base case bottom of stairs)
    
*/
class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        const cache = {};
        const dfs = (i) => {
            
            // Base Case...
            // When the last stair is reached or past the last stair (i <= 0)
            // Check if we're exactly at the last stair and not past it;
            // if so, return 1 
            // (to say a valid path has been detected).
            // Else, return 0 (to say the step taken was too far past step 0 / invalid)
            if (i <= 0) {
                return i === 0 ? 1: 0;
            }

            if(cache[i]){
                return cache[i];
            }

            cache[i] = dfs(i - 1) + dfs(i - 2);
            // Trigger DFS per choice from this stair (1 step back or 2 steps back).
            return cache[i];
        };

        // Pass in the top step
        return dfs(n);
    }
}