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
        // head = first node.

        // node that should come after current node, once the list is flipped.
        // - the current node will point to this previous node to reverse the list.
        let prevNode = null;
        let currNode = head; // current node procesing.

        // As we iterate through the linked list, eventually currNode will equal null.
        // - b/c to iterate we set currNode = currNode.next;
        //   the last node in the list .next points to null.
        while(currNode !== null){
            let nextNode = currNode.next; // store the next node.
            currNode.next = prevNode; // point currNode to prevNode (reverses list).
            prevNode = currNode; // set prevNode as currNode, for next iteration.
            currNode = nextNode; // set the currNode as the nextNode, for next iteration.
        }

        // prevNode should now be the head node.
        // - originally the last node in the list before reverse.
        // - printing the head outputs the nodes based on link order 
        //   (which is now reversed).
        return prevNode;
    }
}
