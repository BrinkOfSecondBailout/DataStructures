var twoSum = function(nums, target) {
    const memoryObj = {};
    const output = [];
    for (let i = 0; i < nums.length; i ++) {
        const difference = target - nums[i]
        if (difference in memoryObj) {
            output.push(i);
            output.push(memoryObj[difference])
            return output;
        } else {
            memoryObj[nums[i]] = i;
        }
    }
};

nums = [3,8,6,4,5,3], target = 6
console.log(twoSum(nums, target));

var romanToInt = function(s) {
    let romanPairs = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        let next = s[i + 1];
        if (romanPairs[curr] < romanPairs[next]) {
            total -= romanPairs[curr]
        } else {
            total += romanPairs[curr]
        }
    }
};


var longestCommonPrefix = function(strs) {
    var prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix;
};

strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))


var isValid = function(s) {
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    if (s.length % 2 != 0) {
        return false
    }
    if (s[0] == ")" || s[0] == "]" || s[0] == "}") {
        return false
    }
    var stack = []
    for (let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i])
        } else if (pairs[stack.pop()] != s[i]) {
            return false
        }
    }
    return stack.length === 0; 
};



var twoSum = function(nums, target) {
    const memoryObj = {}
    const output = []
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]
        if (difference in memoryObj) {
            output.push(i)
            output.push(memoryObj[difference])
            return output;
        } else {
            memoryObj[nums[i]] = i;
        }
    }
};

var nums = [3,2,4]
var target = 6

console.log(twoSum(nums, target));