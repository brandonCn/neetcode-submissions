/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// BREADTH FIRST SOLUTION
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];    // empty tree

        // Queue to iterate through the tree.
        const nodeQueue = new Queue([root]);

        // Final output array [[<level1 values>], [<level2 values>], ...]
        const output = []; 


        while(!nodeQueue.isEmpty()){
            const size = nodeQueue.size();  // Size of current level.
            const nodeLevelArray = [];      // Store node values of current level.

            // Loop through each node on this level.
            // - Remove the node from the queue.
            // - Add the node's value to the array of node values on this level.
            // - Add the node's children to the queue, for the next level.
            for(let i = 0; i < size; i++){
                let node = nodeQueue.pop();

                nodeLevelArray.push(node.val);

                if(node.left) nodeQueue.push(node.left);
                if(node.right) nodeQueue.push(node.right);                 
            }

            // Add array of node values of this level,
            // onto the final output array of node values per level.
            output.push(nodeLevelArray);
        }

        //console.log(output);
        return output;
    }
}
