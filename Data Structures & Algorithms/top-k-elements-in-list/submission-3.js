class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /* ALTERNATE SHORTER CODE VERSION - SAME SPEED AND SPACE COMPLEXITY */
        const frequencyMap = {};

        // Create a hash map of each number and it's fequency.
        // { 'number' -> frequency }
        // { '2': 3 }
        for(let i = 0; i < nums.length; i++){
            // If frequencyMap[nums[i]] does not exist, set value to 0; 
            // else, add 1 to the frequency count.
            frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
        }

        //console.log(frequencyMap);

        // Sorted Descending Order        
        const sortedFrequencyMap = Object.entries(frequencyMap).sort((a,b) => {
            return b[1] - a[1]
        });

        //console.log(sortedFrequencyMap);

        const topKFrequentElements = sortedFrequencyMap.slice(0, k).map(x => x[0]);

        return topKFrequentElements;
    }
}
