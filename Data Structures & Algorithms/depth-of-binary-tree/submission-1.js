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

// BREADTH FIRST SEARCH
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {

        if(!root) return 0;   // Check for empty tree.

        const nodeQueue = new Queue([root]);
        let levels = 0; // track levels

        // while loop represents each level.
        while(!nodeQueue.isEmpty()){

            // Capture the size of the queue, this size is the 
            // number of nodes on the current level. 
            // - This makes sure we are only processessing the nodes of the 
            //   children added to the queue from the previous loop.
            const size = nodeQueue.size();

            // Loop through the node queue, remove each one and add their children to the 
            // end of the queue. Their children are in the queue but won't be touched until
            // the next while loop due to the 'size' check.
            for(let i = 0; i < size; i++){
                let node = nodeQueue.pop();

                if(node.left) nodeQueue.push(node.left);
                if(node.right) nodeQueue.push(node.right);                
            }
        

            levels++;
        }

        return levels;        
    }
}
