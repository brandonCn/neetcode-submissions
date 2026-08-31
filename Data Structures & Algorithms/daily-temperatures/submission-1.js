class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Fill the array with 0s, to capture 0 condition as default.
        // - 0 = no days warmer found.
        const res = new Array(temperatures.length).fill(0);

        // Each day we put it's temp and array index into a stack.
        // - Days we haven't found a warmer day for are stored here,
        //   then pop'd off once we find a warmer day.
        // - We store the index to remember the original array poisiton
        //   and subtract the day's index against the day warmer found index
        //   which handles counting the days ahead for us.
        const stack = []; // pair: [temp, index]

        // Loop through each day.
        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i]; // get current day temp.

            // While the stack is not empty 
            // and the current temperature is warmer than the top of the stack.
            // - Pop the top element.
            // - Compute how many days passed and update the result.
            // - Repeatedly pop the next top of the stack if the current temp is
            //   greater than the top of the stack. This will allow us to compute
            //   all the days that we've been waiting to find a higher temp for.
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }

            // Always add current day onto the stack,
            // pop off when warmer day found.
            stack.push([t, i]);
        }
        return res;        
    }
}
