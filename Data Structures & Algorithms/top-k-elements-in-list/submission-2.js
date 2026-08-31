class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        /* ALTERNATE SHORTER CODE VERSION - SAME SPEED AND SPACE COMPLEXITY */
        const frequencyMap = {};

        for(let i = 0; i < nums.length; i++){
            if(frequencyMap[nums[i]] === undefined){
                frequencyMap[nums[i]] = 1;
            } else {
                frequencyMap[nums[i]] = frequencyMap[nums[i]] + 1;
            }
        }

        //console.log(frequencyMap);

        // Sorted Descending Order        
        const sortedFrequencyMap = Object.entries(frequencyMap).sort((a,b) => {
            return b[1] - a[1]
        });

        //console.log(sortedFrequencyMap);

        // const topKFrequentElements = []; // array storage for k most common elements.
        
        // for(let i = 0; i < k; i++){
        //     //console.log(sortedFrequencyMap[i][0])
        //     topKFrequentElements.push(sortedFrequencyMap[i][0]);
        // }

        const topKFrequentElements = sortedFrequencyMap.slice(0, k).map(x => x[0]);

        return topKFrequentElements;
    }
}
