class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.arr = nums;
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.arr.push(val);
        this.arr.sort((a, b) => a - b);
        //this.arr.shift();
        if(this.arr.length > this.k){
            this.arr.shift()
        }
        return this.arr[this.arr.length - this.k];
    }
}