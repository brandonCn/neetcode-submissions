class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    
    // Heap and PriorityQueue are the same thing (different name)
    constructor(k, nums) {
        // Create global class vars.
        
        // Heap to store K top largest elements
        // - Min heap, stored smallest to largest
        // - Will be maintained so only the K largest nums are in it.
        //   So we can pop the Kth largest element from the top.
        this.minHeap = new MinPriorityQueue(); 
        
        // Store K input var for use later. 
        this.k = k;                            

        // Populate heap with input elements.
        for(const num of nums){
            this.minHeap.enqueue(num);
        }

        // Repeatidly remove the smallest element (top element), from the heap
        // until there are no more than the K largest elements in the heap.
        // - This way the heap only has the top K largest elements, and we can
        //   pop the Kth largest element from the top.
        while( this.minHeap.size() > k ){
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // Add a new element to the heap (will auto sort largest to smallest)
        this.minHeap.enqueue(val);

        // Remove the smallest element
        // So the heap stays the same size as the K largest elements.
        // - we just added an extra element, so need to remove one (new smallest one).
        if(this.minHeap.size() > this.k){
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}
