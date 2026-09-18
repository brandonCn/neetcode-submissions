class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // const directions = [
        //     [1, 0],
        //     [-1, 0],
        //     [0, 1],
        //     [0, -1],
        // ];

        // # of ROWS & # of COLS
        const ROWS = grid.length,
            COLS = grid[0].length;
        let islands = 0;

        // DFS to detect connected islands.
        const dfs = (r, c) => {
            // Base Cases to detect water or out of bounds of matrix/area.
            // I.E. Detect whether we are NOT on an island.
            // - row is out of bounds north or south (r<0 or r>=ROWS)
            //   outside of matrix index range (up(-1) or down(grid.length))
            //
            // - columns is out of bounds east or west (c<0 or c>=COLS)
            //   outside of matrix index range (left(-1) or right(grid[0].length))
            //
            // - current posisition (grid[r][c]) is on water (0).
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0')
                return;

            // IF on an island...
            grid[r][c] = '0'; // Mark island as water.

            // Trigger DFS again per direction, up down left right.
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
            
            // for (const [dr, dc] of directions) {
            //     dfs(r + dr, c + dc);
            // }
        };

        // Detect Island, via iteration 
        // - one row at a time and all the row's columns.
        //   before moving to the next row.
        // - When island detected 'island++'
        //   Then trigger DFS to find connected land.
        //   This will mark are connected land as 0
        //   So it's connected land is not marked as new islands
        //   in the next iterations.
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    islands++;
                    dfs(r, c);
                    //islands++;
                }
            }
        }

        return islands;
    }
}