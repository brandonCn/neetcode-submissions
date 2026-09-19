class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;

        const visited = new Set();

        const dfs = (row, col) => {
            if( // Base cases to ignore position
                row < 0
                || row === ROWS
                || col < 0
                || col === COLS
                || grid[row][col] === 0
                || visited.has(`${row}, ${col}`)
            ){
              return 0;  
            }

            // Found valid position
            visited.add(`${row}, ${col}`) // track it

            //let areaCount = 1;

            // areaCount += (dfs(r + 1, c)  
            //     + dfs(r - 1, c) 
            //     + dfs(r, c + 1) 
            //     + dfs(r, c - 1) )
            // On each return, add + 1, including all 4 directions (which also add + 1)
            return 1               // initial island                 
                + dfs(row + 1, col) // Count all islands chaining on down path
                + dfs(row - 1, col) // Count all islands chaining on up path
                + dfs(row, col + 1) // Count all islands chaining on right path
                + dfs(row, col - 1) // Count all islands chaining on left path.

            //return 5;
        }

        let area = 0;
        // Detect Island, via iteration 
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                //if (grid[r][c] === '1') {
                    // Assign DFS count to area.
                    // Swap pre-existing area if larger area is found on 
                    // subsequent island detections.
                    area = Math.max(dfs(r, c), area);
                    //area = dfs(r,c)
                    //area = 1;
                //}
            }
        }

        return area;
    }
}
