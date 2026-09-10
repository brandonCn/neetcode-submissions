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

// DEPTH FIRST ITTERATIVE APPROACH
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        
        if(!root) return 0; // empty tree.

        // stack structure:
        // [node, <it's depth value as an int>]
        // start with root (depth 1);
        const nodeStack = [[root, 1]]
        let maxDepth = 1; // store max depth found so far.

        while(nodeStack.length > 0){
            const current = nodeStack.pop();
            const node = current[0];
            const depthOfNode = current[1];

            if(node){
                // Update max depth if current node is deeper.
                maxDepth = Math.max(maxDepth, depthOfNode);

                // Push children onto the stack for next processing
                // & increment the depth value assigned to the node.
                if(node.left) nodeStack.push([node.left, depthOfNode + 1])
                if(node.right) nodeStack.push([node.right, depthOfNode + 1]);
            }
        }

        return maxDepth;
    }
}