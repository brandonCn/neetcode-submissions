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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let node = head;            // Node to traverse list.
        let linkedListLength = 0;   // Record length of the list.

        // Loop through the list once, to record length.
        while(node !== null){
            linkedListLength = linkedListLength + 1;
            node = node.next;
        }

        //console.log(linkedListLength);

        // Calculate node to delete (nth node from end of list)
        let nodeToDelete = linkedListLength - n;

        // If node to delete is 0, that means we delete the head.
        // - delete head by returning head.next (next node after head).
        if(nodeToDelete === 0){
            return head.next;
        }


        // Loop through list, until the nodeToDelete.
        // - store the node previous to it (as prevNode.next = nodeToDelete.next)
        //   will remove the nodeToDelete from the list.
        let prevNode = null;    // Store previous node.
        let currNode = head;    // Store current node.
        for(let i = 1; i <= nodeToDelete; i++){
            prevNode = currNode;
            currNode = currNode.next;
        }

        // Remove currNode via setting prevNode to currNode.next.
        prevNode.next = currNode.next;

        return head;    // return modified list.
    }
}
