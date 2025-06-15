/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i !== j) {
                let answers = nums[i] + nums[j];
                if (answers === target) {
                    return [i, j];
                }
            }

        }
    }
    return null;
};

console.log(twoSum([3, 3], 6))

