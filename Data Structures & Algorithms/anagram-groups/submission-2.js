class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Hashmap
        // key -> sorted string of characters (anagram definition).
        // value -> array of original strings matching anagram definiton.

        const anagramMap = {};

        for(let i = 0; i < strs.length; i++){
            // Can turn string into an array can be done via spread or split.
            // Split
            // let sortedString = strs[i].split("").sort().join("");

            // Spread operator.
            let sortedString = [...strs[i]].sort().join("");
            //console.log(sortedString);

            // todo: considered undefined
            //anagramMap[sortedString].push(strs[i]);
            //anagramMap[sortedString].push(strs[i]);

            // If key is null or undefined, assign it as an array first then push to it.
            (anagramMap[sortedString] ??= []).push(strs[i]);

            // Alternative assignment 1.
            // if(anagramMap[sortedString]){
            //     anagramMap[sortedString].push(strs[i]);
            // } else {
            //     anagramMap[sortedString] = [];
            //     anagramMap[sortedString].push(strs[i]);
            // }

            // Alternative assignment 2
            // if(anagramMap[sortedString] !== undefined){
            //     anagramMap[sortedString].push(strs[i]);
            // } else {
            //     anagramMap[sortedString] = [];
            //     anagramMap[sortedString].push(strs[i]);
            // }
            
        }

        //console.log(anagramMap);

        return Object.values(anagramMap);

        //return [];
    }
}
