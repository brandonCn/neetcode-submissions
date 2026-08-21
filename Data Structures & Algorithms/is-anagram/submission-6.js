class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // If string not equal length, cannot be an anagram.
        if(s.length !== t.length){
            return false;
        }

        let sMAP = {};
        let tMAP = {};
        
        // Lengths are guaranteed same, so can choose one array to pick loop length.
        for(let i = 0; i < s.length; i++){
            sMAP[s[i]] = (sMAP[s[i]] || 0) + 1;
            tMAP[t[i]] = (tMAP[t[i]] || 0) + 1;
            // if(sMAP?.[s[i]]){
            //     sMAP[s[i]] += 1;
            // } else {
            //     sMAP[s[i]] = 1;
            // }

            // if(tMAP?.[t[i]]){
            //     tMAP[t[i]] += 1;
            // } else {
            //     tMAP[t[i]] = 1;
            // }            
        }

        console.log(sMAP);
        console.log(tMAP);

        // Test sMAP against tMAP
        for(const key in sMAP){
            if(sMAP[key] !== tMAP[key]){
                console.log('sMAP key ' + key + 'exists in tMAP BUT DO NOT EQUAL');
                return false
            }
        }

        return true;
    }
}
