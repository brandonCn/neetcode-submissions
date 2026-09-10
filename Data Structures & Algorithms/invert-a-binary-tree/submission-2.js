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

/* Depth First Search w/ an Itterative approach (using a stack) */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root) return null;

        const nodeStack = [root];
        while(nodeStack.length){
            const node = nodeStack.pop();
            [node.left, node.right] = [node.right, node.left];
            if(node.left) nodeStack.push(node.left);
            if(node.right) nodeStack.push(node.right);
        }

        return root;
    }
}
