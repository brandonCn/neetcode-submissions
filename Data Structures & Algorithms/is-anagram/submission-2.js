class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMAP = {};
        
        for(let i = 0; i < s.length; i++){
            if(sMAP?.[s[i]]){
                sMAP[s[i]] += 1;
            } else {
                sMAP[s[i]] = 1;
            }
        }

        let tMAP = {};
        
        for(let i = 0; i < t.length; i++){
            if(tMAP?.[t[i]]){
                tMAP[t[i]] += 1;
            } else {
                tMAP[t[i]] = 1;
            }
        }

        console.log(sMAP);
        console.log(tMAP);

        // Compare lengths, return false if mis match.
        if(Object.keys(sMAP).length !== Object.keys(tMAP).length){
            return false;
        }

        // Test sMAP against tMAP
        for(const key in sMAP){
            if(tMAP?.[key]){
                console.log('sMAP key ' + key + ' exists in tMAP');
                if(sMAP[key] !== tMAP[key]){
                    console.log('sMAP key ' + key + 'exists in tMAP BUT DO NOT EQUAL');
                    return false
                }
            } else {
                console.log('sMAP key ' + key + ' does NOT exist in tMAP');
                return false;
            }
        }

        // Test sMAP against tMAP
        // for(const key in tMAP){
        //     if(sMAP?.[key]){
        //         console.log('sMAP key ' + key + ' exists in tMAP');
        //         if(tMAP[key] !== sMAP[key]){
        //             console.log('sMAP key ' + key + 'exists in tMAP BUT DO NOT EQUAL');
        //             return false
        //         }
        //     } else {
        //         console.log('sMAP key ' + key + ' does NOT exist in tMAP');
        //         return false;
        //     }
        // }        

        return true;
        
        // ----

        // let duplicateNums = {};
        
        // for(let i = 0; i < nums.length; i++){
        //     if(duplicateNums?.[nums[i]]){
        //         // Num has already been found
        //         duplicateNums[nums[i]] += 1;
        //         return true;
        //     } else {
        //         duplicateNums[nums[i]] = 1;
        //     }
        // }

        // return false;
    }
}
