/**
 * const { PriorityQueue, MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

/* OPTIMAL 2 HEAP SOLUTION B */
// I REMOVED THE +1 from the balance check, doesn't seem needed.
class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue(); // Max heap for smaller half
        this.large = new MinPriorityQueue(); // Min heap for larger half
    }

    /**
     * @param {number} num
     */
    addNum(num) {
        if (!this.large.isEmpty() && num > this.large.front()) {
            this.large.enqueue(num);
        } else {
            this.small.enqueue(num);
        }

        if (this.small.size() > this.large.size()) {
            this.large.enqueue(this.small.dequeue());
        } else if (this.large.size() > this.small.size()) {
            this.small.enqueue(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else if (this.large.size() > this.small.size()) {
            return this.large.front();
        } else {
            return (this.small.front() + this.large.front()) / 2.0;
        }
    }
}