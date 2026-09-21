class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map();

        // Create a map of each course and it's prerequisites.
        // Starts as empty array of prerequisites
        // [courseID -> [array of prerequisite courseIDs of this course]]
        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, []);
        }

        // Create a map of each course and it's prerequisites.
        // [ courseID1 -> [courseID2, courseID4, etc...] ]
        // Populate the prerequisites of each course in the map.
        for (let [crs, pre] of prerequisites) {
            preMap.get(crs).push(pre);
        }

        // Track all courses we've checked along the DFS path to check a single course's
        // prerequisites. We reset this set each time we check a course's prerequisite chain.
        // This allows us to detect cycles
        // (cycle = This course and another course have each other as a prerequisite.)
        const visiting = new Set();

        const dfs = (crs) => {

            // This course and another course have each other as a prerequisite.
            if (visiting.has(crs)) {
                // Cycle detected
                return false;
            }

            // Check if this course has no prerequisites
            // if so, no need to look that is has prerequisite cycles. 
            if (preMap.get(crs).length === 0) {
                return true;
            }

            // Add this course to visited so it cycles can be detected.
            // i.e. Both this course and another course have each other as prerequisites.
            visiting.add(crs);

            for (let pre of preMap.get(crs)) {
                if (!dfs(pre)) {
                    return false;
                }
            }

            // Remove from visited so this course can be check again on subsiquent paths.
            // (i.e. if more than 1 course has this course in it's prerequisites)
            visiting.delete(crs);
            
            // Optimization to skip checking if this course has a cycle in it's 
            // prerequisites.
            // i.e. make it so this course has a length of 0 prerequisites
            // so that on subsiquent checks of it (more than 1 course has it in it's prerequisites)
            // we don't look for it having cycles again.
            // The solution works without this for most test cases 
            // (but not large ones like 1000 courses) 
            preMap.set(crs, []);
            
            // No cycles detected in the prerequisites of this course.
            return true;
        };

        
        // Loop through each course, and trigger the function to verify it has no 
        // cycles in it's prerequisite courses.
        for (const [key, value] of preMap) {

            // Optimization to skip courses that have already been verified
            if(value.length !== 0){

                // Trigger validation check for cycles in it's prerequisites.
                // returns false if cycle has been detected.
                if (!dfs(key)) {
                    return false;
                }
            }
        }

        // for (let c = 0; c < numCourses; c++) {
        //     if (!dfs(c)) {
        //         return false;
        //     }
        // }
        return true;
    }
}