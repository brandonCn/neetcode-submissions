class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = {};

        for(let i = 0; i < nums.length; i++){
            if(frequencyMap[nums[i]] === undefined){
                frequencyMap[nums[i]] = 1;
            } else {
                frequencyMap[nums[i]] = frequencyMap[nums[i]] + 1;
            }
        }

        //console.log(frequencyMap);

        // Object.entries converts the object into an array.
        //  Specifically a two dementional array of key value pairs.
        //  [[key, value], [key, value]]

        // .sort() is an array function to sort an array.
        //  Loops through all indexes, comparing two at a time 'a' and 'b', starting from index 0.
        //  Based on the comparison, the indexes swap positions (or if equal, stays the same).
        //  Uses a function you define to resolve the comparison.

        // Sorted Ascending Order
        // const sortedFrequencyMap = Object.entries(frequencyMap).sort((a,b) => {
        //     return b[1] - a[1]
        // });

        // Create a sorted array from the frequency map...

        // Sorted Descending Order        
        const sortedFrequencyMap = Object.entries(frequencyMap).sort((a,b) => {
            return b[1] - a[1]
        });

        //console.log(sortedFrequencyMap);

        const topKFrequentElements = []; // array storage for k most common elements.
        
        // Loop through the sorted array of mapping [[key, value]]; 
        //  from begining, K number of times.
        //  Assign the key (which are the numbers we are counting frequency of) to the output. 
        for(let i = 0; i < k; i++){
            //console.log(sortedFrequencyMap[i][0])
            topKFrequentElements.push(sortedFrequencyMap[i][0]);
        }

        return topKFrequentElements;
    }
}
