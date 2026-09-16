class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        // Max Heap to store stones by heaviest
        const maxHeapStones = new MaxPriorityQueue();

        // Add stones to the heap.
        for(const stone of stones){
            maxHeapStones.enqueue(stone);
        }

        // Keep smashing stones til 1 remains
        while(maxHeapStones.size() > 1){
            
            // Remove heaviest stones.
            const heaviestStone = maxHeapStones.dequeue();
            const secondHeaviestStone = maxHeapStones.dequeue();

            // If heaviest stone is heavier than second heaviest stone
            // smash the stones, so the weight of the heaviest is reduced
            // by the weight of the second heaviest stone.
            // - If stones are the same weight, they are not added back to the
            //   maxStoneHeap
            if(heaviestStone !== secondHeaviestStone){
                maxHeapStones.enqueue(heaviestStone - secondHeaviestStone);
            }
        }

        // Check if at least 1 stone is remaining
        // - if so, return that stone
        // - if not, return 0 stones remaining. 
        let returnLastStone = 
            maxHeapStones.size() === 1 ? maxHeapStones.dequeue() : 0;

        return returnLastStone
    }
}
