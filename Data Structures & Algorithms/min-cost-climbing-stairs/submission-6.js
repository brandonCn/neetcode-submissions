class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */

    /*
        MY IDEAL SOLUTION...

        GOAL: Choose the cheapest path (of 1 step and 2 step combinations)
        To reach the top of the stairs.
        TOP OF THE STAIR = 1 INDEX PAST THE LAST INDEX OF THE STAIR COST ARRAY.
    */
    minCostClimbingStairs(cost) {

        // Starting from stair 3 (cost[2])
        // Calcuate the cheapest path to reach each stair.
        // - Skip stairs 1 & 2, because the cheapest costs are already known.
        for (let i = 2; i < cost.length; i++) {
            
            // Calculate the cheapest steps choice to current stair.
            // cost of this stair + cheapest of the previous 2 step choices.
            const newCost = cost[i] + Math.min(cost[i-1], cost[i-2])
            cost[i] = newCost
        }

        // Choose the cheapest option for the last step:
        // - Reach the top via the 2nd to last stair 
        //   (cost.length-2) (take 2 steps to top)
        // - Reach the top via the last stair 
        //   (cost.length-1) (take 1 step to top)
        // We have to make this choice because we can take 1 or 2 steps
        return Math.min(cost[cost.length-1], cost[cost.length-2])
    }
}
