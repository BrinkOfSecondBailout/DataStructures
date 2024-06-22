var twoSum = function(nums, target) {
    var memoryObj = {};
    var results = [];
    for (let i = 0; i < nums.length; i++) {
        var difference = target - nums[i]
        if (difference in memoryObj) {
            results.push(i);
            results.push(memoryObj[difference]);
            return results;
        } else {
            memoryObj[nums[i]] = nums[i]
        }
    }
    return results;
};

nums = [2,7,11,15];
target = 9;
console.log(twoSum(nums, target));