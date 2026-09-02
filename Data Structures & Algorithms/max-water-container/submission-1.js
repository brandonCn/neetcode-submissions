class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let [l, r] = [0, heights.length - 1]; // two pointers.
        let maxArea = 0; // storage of max area found.

        // While pointers haven't crossed.
        while( l < r ){
            // Calculate Max Area
            // - Height * Width
            // - Height = value of the array.
            //   For height, choose the smallest; else, water spills out.
            // - Width = range between the l and r index.
            const currentArea = Math.min(heights[l], heights[r]) * (r - l);

            // If current area is larger, update the maxArea found value.
            maxArea = Math.max(maxArea, currentArea);

            // Move the l or r pointer, based on which one has a smaller height.
            // - The keeping the smaller height, for the next loop, does not help us
            //   find a larger area.
            if(heights[l] < heights[r]){
                l++;
            } else if(heights[r] < heights[l]){
                r--;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
