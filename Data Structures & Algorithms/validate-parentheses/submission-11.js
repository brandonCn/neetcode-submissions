class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpenMap = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let i = 0; i < s.length; i++) {
            if (closeToOpenMap[s[i]]) {
                if (
                    stack.length > 0 &&
                    stack[stack.length - 1] === closeToOpenMap[s[i]]
                ) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }
        }
        return stack.length === 0;
    }
}