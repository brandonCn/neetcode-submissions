class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Rely on the fact that the inner most parentheses will match. 
        // - the inners will be resolved true first.
        // - Use a stack, adding the outer open parentheses as we go.
        // - The outer most will be at the bottom of the stack.
        //   Which means, when finding a closing parenth, it's match will be at the top of the 
        //   stack (most recently added).
        // - If a closing parenth appears, and it does not match the type of parenth at the top
        //   we know there is a mismatching pattern in the string.
        // - For the total string to be true, the pattern will always be a sequence of outer open 
        //   parenths until a closing is found that matches the most recent open parenth
        //   (which will be at the top of stack).

        const stack = [];

        for(let i = 0; i < s.length; i++){
            if( s[i] === '(' || s[i] === '[' || s[i] === '{' ){
                // If open parenth.
                stack.push(s[i]);
            } else if ( s[i] === ')' || s[i] === ']' || s[i] === '}' ){
                // If closed parenth.
                if(
                    stack.length > 0 &&
                    (
                        s[i] === ')' && stack[stack.length - 1] === '('
                        || s[i] === ']' && stack[stack.length - 1] === '['
                        || s[i] === '}' && stack[stack.length - 1] === '{'
                    )
                ){
                    // If stack isn't empty
                    // & if current close parenth matches top stack.

                    stack.pop(); // remove top of the stack.
                } else {
                    // Else, stack isn't empty or top stack parenth doesn't match current closed
                    // parenth.
                    return false;
                }
            } 
        }

        // If stack is empty, we have a matching patterns.
        return stack.length === 0;
    }
}
