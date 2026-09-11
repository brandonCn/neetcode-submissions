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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        if(!root) return true; // If empty tree.

        /*
            [node, min allowed value, max allowed value]
        */
        const nodeQueue = new Queue([[root, -Infinity, Infinity]]);

        while(!nodeQueue.isEmpty()){

            const [node, min, max] = nodeQueue.pop();

            // Check that this node is inbetween min and max values.
            if(!(min < node.val && node.val < max)){
                return false;
            }

            // Push Left Child onto queue.
            // - Update what this child's max value can be 
            //   (can't be larger than parent).
            // - Leave the minimum value as it is (set by a grandparent or later).
            //   this is set last time we traversed right.
            if(node.left){
                nodeQueue.push([node.left, min, node.val]);
            }

            // Push Right Child onto queue.
            // - Update what this child's minimum value can be 
            //   (can't be smaller than parent)
            // - Leave maximum value the same (set by a grandparent or later)
            //   this is set last time we traversed left.
            if(node.right){
                nodeQueue.push([node.right, node.val, max]);
            }
        }

        return true;
    }
}
