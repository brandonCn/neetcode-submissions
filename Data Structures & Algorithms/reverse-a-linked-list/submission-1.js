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
     * @return {ListNode}
     */
    reverseList(head) {
        let prevNode = null;
        let currNode = head;

        while(currNode !== null){
            let nextNode = currNode.next;
            currNode.next = prevNode;       // pointer flip happens here
            prevNode = currNode;
            currNode = nextNode;
        }

        return prevNode; // prevNode is now head node;
    }
}
