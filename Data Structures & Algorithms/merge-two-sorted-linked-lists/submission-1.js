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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const newListDummyHead = { val: 'DUMMY HEAD', next: null };
        let newListNode = newListDummyHead;

        let list1Node = list1; // set head of list 1 to a var to iterate with.
        let list2Node = list2; // set head of list 2 to a var to iterate with.

        while(list1Node !== null && list2Node !== null){

            if(list1Node.val < list2Node.val){
                newListNode.next = list1Node;
                list1Node = list1Node.next;
            } else {
                newListNode.next = list2Node;
                list2Node = list2Node.next;
            }

            newListNode = newListNode.next;
        }

        if(list1Node){
            newListNode.next = list1Node;
        } else {
            newListNode.next = list2Node;
        }

        return newListDummyHead.next;
    }
}
