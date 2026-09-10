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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];    // empty tree

        const nodeQueue = new Queue([root]);
        const output = [];

        while(!nodeQueue.isEmpty()){
            const size = nodeQueue.size();
            const nodeLevelArray = [];

            for(let i = 0; i < size; i++){
                let node = nodeQueue.pop();

                nodeLevelArray.push(node.val);

                if(node.left) nodeQueue.push(node.left);
                if(node.right) nodeQueue.push(node.right);                 
            }

            output.push(nodeLevelArray);
        }

        console.log(output);
        return output;
        //return [];              // empty tree
    }
}
