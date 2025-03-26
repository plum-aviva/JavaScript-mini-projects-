const nums = [1, 2, 3]

function runningTotal(nums) {
    for (let i = 0; i <= nums.length; i++) {
        console.log(nums[i] += nums[i])

    } return nums;
}

console.log(runningTotal(nums))