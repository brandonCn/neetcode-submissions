class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]]; // store all perms
        for (let num of nums) { // per num
            let new_perms = []; // store new perms built

            // Per each permutation known.
            // - Insert num into every position of the perm.
            // - Insert 1 index at a time, per loop, and save the perm
            //   then start the loop again for the next index, repeat til no more indexes
            //   of this perm remain to insert into.
            for (let p of perms) { // per perm
                for (let i = 0; i <= p.length; i++) { // put num in each position of perm.
                    let p_copy = p.slice(); // create a copy of perm to insert num into.
                    p_copy.splice(i, 0, num); // insert num into this index of the perm.
                    new_perms.push(p_copy); // push the new perm. Repeat for next perm.
                }
            }
            perms = new_perms; // append new perms to master perm list.
        }
        return perms;
    }
}