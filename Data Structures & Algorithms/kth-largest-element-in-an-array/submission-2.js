class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const minHeap = new MinPriorityQueue();

        for(let num of nums){
            minHeap.push(num);
        }

        while(minHeap.size() > k){
            minHeap.pop();
        }

        return minHeap.front();
    }
}
