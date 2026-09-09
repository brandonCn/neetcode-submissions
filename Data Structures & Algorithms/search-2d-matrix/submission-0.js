class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowsLength = matrix.length;     // number of rows
        const colsLength = matrix[0].length;  // number of columns

        /* 
            Binary Search Across all the rows first.
            - To narrow down which row could have the target.
        */
        let rowTop = 0;                     // top row index pointer.
        let rowBottom = rowsLength - 1;     // bottom row index pointer.
        
        let rowMidPoint = 0; // Row which could contain the target.

        // While the pointers haven't crossed 
        // - if crossed, could not find a viable row with the search.
        while(rowTop <= rowBottom){

            // Calculate midpoint row.
            rowMidPoint = Math.floor((rowTop + rowBottom) / 2);
            
            if(target > matrix[rowMidPoint][colsLength - 1]){
    
                // If the target is greater than the last element of the row,
                // move the top row down. Target is in a lower row. 
                rowTop = rowMidPoint + 1;

            } else if (target < matrix[rowMidPoint][0]){
    
                // If the target is smaller than the first element of the row,
                // move the bottom row up. Target is in a higher row.
                rowBottom = rowMidPoint - 1;

            } else {
                // Else, target could be in this row.
                break;
            }

        }

        // If top row has gone passed buttom row, we did not find any row which
        // might contain the target.
        if(!(rowTop <= rowBottom)){
            return false;
        }

        /* 
            Binary Search the target row (found above), 
            for the specific target.
        */        
        let leftCol = 0;                // Left array index pointer.
        let rightCol = colsLength - 1;  // Right array index pointer.

        while(leftCol <= rightCol){
            let colMidPoint = Math.floor((leftCol + rightCol) / 2);

            if( target > matrix[rowMidPoint][colMidPoint] ){
                leftCol = colMidPoint + 1;

            } else if( target < matrix[rowMidPoint][colMidPoint] ){
                rightCol = colMidPoint - 1;

            } else {
                return true;
            }
        }

        return false;
    }
}
