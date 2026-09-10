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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        /*
            Binary trees are balanced via left nodes are smaller than right nodes.

            LOGIC TRICK TO FIND THE LOWEST COMMON ANCESTOR...
            - A node is an anscestor IF BOTH OF THESE ARE TRUE
              - One of the values is smaller than the current node's value.
              - One of the values is larger than the current node's value.
              - THIS IS THE SPLIT.
            - If BOTH values are greater, are greater or smaller than the current
              node's value, this node cannot be an anscestor of either.
              - If both values are greater, try the next right node for the condition.
              - If both values are smaller, try the next left node for the condition.
        */

        let node = root;

        // Loop forever until we find the answer.
        while(node){
            if(p.val > node.val && q.val > node.val){
                node = node.right;
            } else if(p.val < node.val && q.val < node.val){
                node = node.left;
            } else {
                return node;
            }
        }

        return null; // If empty tree, return null;
    }
}
