/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let nodeHashSet = new Set();
        let node = head;
        while (node) {
            if (nodeHashSet.has(node)) {
                return true;
            }
            nodeHashSet.add(node);
            node = node.next;
        }
        return false;
    }
}