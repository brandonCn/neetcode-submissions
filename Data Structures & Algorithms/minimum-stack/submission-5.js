// BLUNT FORCE OPTION
class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
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
        // Decide to treat the stack like an array here.
        let min = this.stack[0];

        // Loop through, comparing each value for the minimum.
        for(let i = 0; i < this.stack.length; i++){
            min = Math.min(min, this.stack[i]);
        }

        return min;        
    }
}
