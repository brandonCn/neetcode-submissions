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
        /*
            list1 is the headNode of list1.
            - { value: x, next: nextNode }
            list2 is the headNode of list2.
            - { value: x, next: nextNode }
        */

        // Create a dummy head node to initalize a new list.
        // - a list is just a node with a .next property 
        //   (that points to another node)
        // This var will always be pointing to the head,
        // so we can return the head of the new list.
        const dummyHeadNode = { val: 0, next: null };

        // This var will be used to iterate through the new list.
        let newListNode = dummyHeadNode;

        // Keep looping until we are at the end of ONE of the lists.
        // - we iterate each list via their .next property.
        //   at the end of each list, .next will equal null (exiting the loop);
        // - list1 & list2 are the headNodes of each list.
        // - iterate example: list1Node = list2Node.next;
        while(list1 !== null && list2 !== null){
            if(list1.val < list2.val){  // List 1 node is greater.
                
                // set the next node of the new list to the list1 node.
                newListNode.next = list1;
                list1 = list1.next;     // iterate list1 to next node.
            
            } else {                    // List 2 node is greater.

                // set the next node of the new list to the list1 node.
                newListNode.next = list2;
                list2 = list2.next;     // iterate list2 to next node;
            
            }

            // iterate to the next node in the new list to process,
            // for the next loop.
            newListNode = newListNode.next;
        }

        // Check which lists still contain nodes.
        // - the empty list will already be iterated to to null.
        if(list1 !== null){ // list1 is at a node, more nodes exist to attach.
            newListNode.next = list1;
        } else {            // list 2 is at a node, more nodes exist to attach.
            newListNode.next = list2;
        }

        return dummyHeadNode.next;         
    }
}
