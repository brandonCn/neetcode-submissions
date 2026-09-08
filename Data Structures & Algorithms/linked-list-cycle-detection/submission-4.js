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
    hasCycle(head, index) {
        let node = head;        // Node to traverse list.
        let cycleFlag = false;  // A repeat node / cycle detection.
        let nodeMap = new Map();       // Map counting node frequency.

        // While
        // - Not at end of linked list (node === null, after last node.next)
        // - Repeat node/cycle has been detected.
        while( node !== null && cycleFlag !== true ){
            // console.log(node);
            
            // Track node frequency.
            nodeMap.set(node, (nodeMap.has(node) || 0) + 1);

            // cycle detected.
            if(nodeMap.get(node) > 1){
                cycleFlag = true;
            }

            node = node.next;   // move to next node.
        }

        console.log(nodeMap);
        //console.log('cycleFlag', cycleFlag);

        return cycleFlag; 
    }
}
