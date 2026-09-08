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
        let node = head;
        let linkedListLength = 0;
        while(node !== null){
            linkedListLength = linkedListLength + 1;
            node = node.next;
        }

        console.log(linkedListLength);

        let nodeToDelete = linkedListLength - n;

        if(nodeToDelete === 0){
            return head.next;
        }

        let prevNode = null;
        let currNode = head;
        for(let i = 1; i <= nodeToDelete; i++){
            prevNode = currNode;
            currNode = currNode.next;
        }

        prevNode.next = currNode.next;

        return head;
    }
}
