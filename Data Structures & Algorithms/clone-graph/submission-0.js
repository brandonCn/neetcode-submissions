/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // Map for original nodes to their clones.
        // So we don't create duplicate clones of the original nodes.
        // [key -> value]
        // [originalNode -> cloneNode]
        const nodeCopyMap = new Map();

        // Function to create the deep clone copy of the nodes.
        const deepCloneNodesDFS = (node, nodeCopyMap) => {
            
            // If the node is null, return null (bad input handling)
            if( node === null ){
                return null;
            }

            // If the node has already been cloned,
            // return the clone instead of creating a new clone of the node.
            // Avoids making multiple copies of the same node.
            // - The same node can be passed in multiple times if other nodes
            //   reference it as a neighbor.
            //   We loop through a node's neighbor list to find the next nodes
            //   to copy.
            if( nodeCopyMap.has(node) ){
                return nodeCopyMap.get(node);
            }


            // Create a copy of the existing node, as a new node
            // - this is a deep copy (totally new object in memory).
            const nodeCopy = new Node(node.val);
            nodeCopyMap.set(node, nodeCopy); // Map original node to it's deep copy.


            // Loop through this node's neighbors for the next connected nodes to copy.
            // Populate the copy's neighbors list with copies of the original node's neighbors.
            for( const neighbor of node.neighbors ){
                nodeCopy.neighbors.push(deepCloneNodesDFS(neighbor, nodeCopyMap));
            }

            // Once the node's value and neighbors have been copied, return
            // the copy. 
            // (Printing the first node copy print's the entire copied graph, fyi)
            return nodeCopy;
        }

        return deepCloneNodesDFS(node, nodeCopyMap)
    }
}
