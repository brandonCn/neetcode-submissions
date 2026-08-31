class MinStack {
    constructor() {
        this.stack = [];    // main stack
        this.minStack = []; // min stack.

        // minStack is a verion of the stack maintained in ascending order.
        // - where smallest values are at the top, so it can be pop'd off.
        // - the push and pop operations change both stacks so they are in sync in length.
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val); // push current value to main stack.
        
        // Compare current push val to the current top of the min stack.
        // - If the current val is smaller than the top of the min stack, 
        //   push the current val onto the min stack.
        //   If the current min top is smaller than current value, just push it to top of
        //   the min stack again (so the stacks are equal in length for pop operations).
        val = Math.min(
            val,
            (
                // if minstack is empty, use the current value for compare; 
                // else, use the current top of min stack.
                this.minStack.length === 0 
                ? val
                : this.minStack[this.minStack.length - 1]
            )
        );

        // Alternate length check, how I would write it.
        // if(this.minStack.length !== 0){
        //     val = Math.min(val, this.minStack[this.minStack.length - 1]);
        // }        

        this.minStack.push(val);        
    }

    /**
     * @return {void}
     */
    pop() {
        // Pop both to keep in sync.
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
