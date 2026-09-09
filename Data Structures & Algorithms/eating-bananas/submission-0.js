class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        /* 
            Instead of trying all possibles speeds, we will use Binary Search
            to narrow down the optimal speed quicker.

            speed = bananas eaten per hour.
        */

        // Create Left & Right pointers across the possible range of eating speed.
        // - The maximum of the range is based on which pile has the most bananas
        //   we won't possibly need to eat more than that per hr.
        // - The minimum speed is 1, else we aren't eating any bananas.
        // - optimalSpeed, stores the result of the optimal speed speed found,
        //   as the algo progresses.
        let speedL = 1;
        let speedR = Math.max(...piles);
        let speedOptimal = Math.max(...piles);

        // While pointers haven't crossed.
        while(speedL <= speedR){

            // Calculate midpoint speed, to test against via binary search.
            const speedMid = Math.floor((speedL + speedR) / 2);

            // Calculate hours needed to eat at current speed midpoint.
            // Sum all the times it takes to eat the bananas per pile:
            // - Number of Bananas / eat speed... & round up (can't eat partial banana)
            let hours = 0;
            for(const pile of piles){
                hours = hours + Math.ceil(pile / speedMid);
            }

            // Test if hours at this speed to eat all bananas is less/greater than the
            // maximum hours given to us.
            // - If less than maximum hours, store the result then try the binary search
            //   again for a slower eating speed via moving the right pointer left
            //   of the midpoint.
            // - If greater than maximum hours allowed, try the binary search again
            //   for a faster eating speed number via moving the left pointer right
            //   of the midpoint.
            if(hours <= h){
                speedOptimal = speedMid;
                speedR = speedMid - 1;
            } else {
                speedL = speedMid + 1;
            }
        }

        // After binary search is complete, return the optimal eating speed found.
        return speedOptimal;
    }
}
