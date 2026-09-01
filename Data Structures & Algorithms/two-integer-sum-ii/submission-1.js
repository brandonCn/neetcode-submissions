class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let [l, r] = [0, numbers.length - 1];

        while(l < r){
            const sum = numbers[l] + numbers[r];
            
            if(sum === target){
                // if target, return indexes +1
                // - +1 because they want index starting at 0...
                //   for whatever reason...
                return [l + 1, r + 1];
            } else if (sum < target){
                // if sum is too small, increment left;
                l++;
            } else if (sum > target){
                // if sum is too big, decrement right;
                r--;
            }
        }

        return [];
    }
}
