class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Create a hash map of each number and it's fequency.
        // { 'number' -> frequency }
        // { '2': 3 }
        const frequencyMap = {};
        for(let i = 0; i < nums.length; i++){
            frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
        }

        // Create a Heap
        // (x) => x[1] - is a function that defines what value is used as the priority.
        // creates a min-priority queue where the priority is 
        // taken from the second element ([1]) of whatever you put into the queue.
        // - Frequency is the priority.
        // - This will sort the nums into the queue where smallest frequency
        //   is at the top.
        const minFrequencyHeap = new MinPriorityQueue((x) => x[1]);
        for(const [num, freq] of Object.entries(frequencyMap)){
            minFrequencyHeap.enqueue([num, freq]);
        }

        // Reduce the heap, so only the Top K Most frequent elements.
        while( minFrequencyHeap.size() > k ){
            minFrequencyHeap.dequeue();
        }

        // Remove Top K elements from the heap, put them in the response array.
        const res = [];
        for(let i = 0; i < k; i++){
            const [num, cnt] = minFrequencyHeap.dequeue();
            res.push(num);
        }        

        return res;
    }
}
