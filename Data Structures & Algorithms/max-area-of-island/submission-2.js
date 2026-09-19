class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islands = 0;

        let islandsAreaMaxHeap = new MaxPriorityQueue(); // Track largest island area found.
        let islandAreaCount = 0; // count per island area.

        const dfs = (r, c) => {
            
            // Check r & c not outside of matrix range & not on water
            if(
                r < 0
                || r >= ROWS
                || c < 0
                || c >= COLS
                || grid[r][c] === 0
            ){return;}
                // Island detected, turn it into water to not detect it again later
                // as a new island.
                grid[r][c] = 0
                
                islandAreaCount++;

                // Search adjacent positions for more land to mark as water.
                dfs(r + 1, c);
                dfs(r - 1, c);
                dfs(r, c + 1);
                dfs(r, c - 1);
        }

        // Iteration to detect initial island landmass.
        // Per row, all columns, next row.
        // Island detect via current row + col position = 1.
        for(let row = 0; row < ROWS; row++){
            for(let col = 0; col < COLS; col++){
                if(grid[row][col] === 1){
                    islands++
                    dfs(row, col)

                    // Store island area in the max heap.
                    islandsAreaMaxHeap.enqueue(islandAreaCount);
                    islandAreaCount = 0; // reset island area count.
                }
            }
        }

        
        // Return max area of island found, 
        // else return 0 if no islands found (ie no max area of an island if no islands)
        return islandsAreaMaxHeap.front() > 0 ? islandsAreaMaxHeap.front(): 0;
    }
}
