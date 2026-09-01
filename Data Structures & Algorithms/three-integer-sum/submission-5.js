class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const results = [];

        for(let i = 0; i < nums.length; i++){
            const a = nums[i];

            if( i > 0 && nums[i] === nums[i - 1] ){
                continue;
            }

            let l = i + 1;
            let r = nums.length - 1;

            while(l < r){
                const sum = a + nums[l] + nums[r];

                if(sum > 0){
                    r--;
                } else if(sum < 0){
                    l++;
                } else {
                    results.push([a, nums[l], nums[r]]);

                    r--;
                    l++;

                    while(l < r && nums[l] === nums[l - 1]){
                        l++;
                    }

                    while(r > l && nums[r] === nums[r + 1]){
                        r++;
                    }
                }
            }
        }

        return results;
    }
}
