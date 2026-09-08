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
        /*
            This solution uses two pointers to loop through the nodes.
            - fast moves two nodes.
            - slow moves one nodes.
            - If a cycle exists, fast will lap the slow (and equal each other).
            - If no cycle, fast will equal null eventually instead of lap slow.
        */
        let fast = head;    // Fast pointer, moves two nodes at a time.
        let slow = head;    // Slow pointer, moves one node at a time.

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast === slow) {
                return true;
            }
        }

        return false;
    }
}