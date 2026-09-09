class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let speedL = 1;
        let speedR = Math.max(...piles);
        let speedOptimal = speedR;

        while(speedL <= speedR){
            const speedMid = Math.floor((speedL + speedR) / 2);

            let hours = 0;
            for(const pile of piles){
                hours += Math.ceil(pile / speedMid);
            }
            if(hours <= h){
                speedOptimal = speedMid;
                speedR = speedMid - 1;
            } else {
                speedL = speedMid + 1;
            }
        }
        return speedOptimal;
    }
}
