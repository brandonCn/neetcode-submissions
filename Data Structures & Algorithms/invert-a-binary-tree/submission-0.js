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


// Breadth First Search Solution
class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        // root == null: checks for null or undefined.
        // !root can also check for null but also checks for below
        //  !undefined  // true
        //  !null       // true
        //  !false      // true
        //  !0          // true
        //  !""         // true           

        // In real world, queues are not part of javascript built in, a custom class
        // is needed. OR using an array where you push() items to the back of the queue
        // and then shift() items off the front of the queue (but that is slow O(n)).

        //-----------

        if(root == null) return null;   // Check for empty tree.

        // Create a queue for the processing nodes. 
        // - initialize with the root node (processed first)
        // - first in first out node processesing.
        const nodeQueue = new Queue([root]);

        // While nodes in the queue, process. 
        // - child nodes are continually added to the queue as we traverse.
        //   we go. 
        // - Nodes are processed via swapping their left and right pointers
        //   this revereses the tree one node at a time.
        // - nodes are removed when processed.
        while(!nodeQueue.isEmpty()){
            let node = nodeQueue.pop(); // get node of the queue.

            // Use detructuring to swap the values without using a temp variable.
            // - swap the left and right child pointers (reverses this tree).
            [node.left, node.right] = [node.right, node.left];

            // add children nodes to the queue, if they exist.
            if(node.left != null) nodeQueue.push(node.left);
            if(node.right != null) nodeQueue.push(node.right);
        }

        return root;
    }
}
