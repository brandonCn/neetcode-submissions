class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0; // buy day
        let r = 1; // sell day
        let maxProfit = 0; // max profit found.

        while(r < prices.length){
            if(prices[r] > prices[l]){
                // found a higher price
                // - compute profit and compare that to previous max profit.
                //   if previous max profit is lower, store the new max profit found.
                maxProfit = Math.max(prices[r] - prices[l], maxProfit);
            } else {
                // found cheaper price.
                l = r; // set buy day to cheaper price day.
            }
            r++; // increment r to next day.
        }

        return maxProfit;
    }
}
