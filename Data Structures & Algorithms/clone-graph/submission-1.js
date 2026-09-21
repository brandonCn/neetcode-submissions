/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

// BREADTH FIRST SEARCH GRAPH COPY (QUEUE NODES)
class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(node === null) return null; // Empty node handling
        const nodeCopyMap = new Map(); // Map OG nodes to their copies (avoids duplicates)
        const nodeQueue = []; // BFS Nodes (add all neighbors on each node processed)

        nodeCopyMap.set(node, new Node(node.val)); // Add first node and copy of it to map.
        nodeQueue.push(node); // Add first node to queue for processing

        while(nodeQueue.length !== 0){
            const curNode = nodeQueue.shift(); // Grab node off the queue for processing.

            // Clone each neighboring node, 
            // and add them to the queue to then get their neighbors next.
            for(const neighbor of curNode.neighbors){
                
                // Check if this neighbor has already been processed;
                // if not, clone it then add it to the copy map and queue.
                if(!nodeCopyMap.has(neighbor)){
                    nodeCopyMap.set(neighbor, new Node(neighbor.val)); // add to map.
                    nodeQueue.push(neighbor); // add to queue.
                }

                // Add copied neighboring nodes to this copy's neighbors list.
                nodeCopyMap.get(curNode).neighbors.push(nodeCopyMap.get(neighbor));
            }
        }

        // Once the node's value and neighbors have been copied, return
        // the copy. 
        // (Printing the first node copy print's the entire copied graph, fyi)
        return nodeCopyMap.get(node);
    }
}
