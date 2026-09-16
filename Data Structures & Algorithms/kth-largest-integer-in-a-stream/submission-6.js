class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    
    // Heap and PriorityQueue are the same thing (different name)
    // - K largest element means like, if K = 3,
    // 3rd largest element. 
    constructor(k, nums) {
        // Create global class vars.
        
        // Heap to store K top largest elements
        // - Min heap, stored smallest to largest
        // - Will be maintained so only the K largest nums are in it.
        //   So we can pop the Kth largest element from the top.
        this.minHeap = new MinPriorityQueue(); 
        
        this.k = k;                            

        for(let i = 0; i < nums.length; i++){
            this.minHeap.enqueue(nums[i]);
        }

        while( this.minHeap.size() > k ){
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);

        if(this.minHeap.size() > this.k){
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}
