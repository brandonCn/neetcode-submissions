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

        // Depth First Search to check for cycles in a course's prerequisites.
        const dfsCycleCheck = (crs) => {

            // Cycle detected.
            // This course and another course have each other as a prerequisite.
            if (visiting.has(crs)) {
                return false;
            }

            // Check if this course has no prerequisites
            // if so, no need to look that is has prerequisite cycles. 
            if (preMap.get(crs).length === 0) {
                return true;
            }

            // Add this course to visited so cycles can be detected.
            // i.e. Both this course and another course have each other as prerequisites.
            // If we've checked this course already, and it appears again, it means we have
            // two courses that have each other as prerequisites.
            visiting.add(crs);

            // For each prerequisite course, check that the course has no cycle in it's prerequisites.
            // I.E. this is the same as checking 'neighbors' of an adjacency graph 
            for (let pre of preMap.get(crs)) {
                if (!dfsCycleCheck(pre)) {
                    return false;
                }
            }

            // Once we've verified none of this course's prerequisites/neighbors, have no
            // cycles...
            // Remove from visited so this course can be checked again on subsiquent paths.
            // (i.e. if more than 1 course has this course in it's prerequisites)
            visiting.delete(crs);
            
            // Optimization to skip re-checking if this course has a cycle in it's 
            // prerequisites, in future re-checks of this course.
            // - an empty array is the optimization, to mark that we don't need to check
            //   this course's prerequisites again.
            // - This course would be checked again if multiple courses have it as a prerequisite.
            // - Since we checked once, we don't have to check it's prerequisites for cycles again.
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
        // - Need to check every course, despite the optimization in dfs to mark already validated 
        //   courses from being re-checked.
        //   BECAUSE not all courses may be connected to eachother across their pre-req/neighbors
        //   graphs... For example...
        //      course1 -> course2, course4
        //      course3 -> course5, course0
        //      ^ disconnected relationships (makes two seperate graphs).
        for (const [key, value] of preMap) {

            // Optimization to skip courses that have already been verified
            if(value.length !== 0){

                // Trigger validation check for cycles in it's prerequisites.
                // returns false if cycle has been detected.
                if (!dfsCycleCheck(key)) {
                    return false;
                }
            }
        }


        // Loop through each course, and trigger the function to verify it has no 
        // cycles in it's prerequisite courses.        
        // for (let c = 0; c < numCourses; c++) {
        //     if (!dfs(c)) {
        //         return false;
        //     }
        // }

        return true;
    }
}