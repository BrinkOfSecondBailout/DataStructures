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


var isPalindrome = function(x) {
    var str = x.toString()
    var isTrue = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - (i + 1)]) {
            return false
        } else {
            isTrue = true
        }
    }
    return isTrue
};

let x = 1221;
console.log(isPalindrome(x));



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
    let output = 0
    str = s.toString();
    for (let i = 0; i < str.length; i++) {
        if (romanPairs[str[i]] < romanPairs[str[i + 1]]) {
            output -= romanPairs[str[i]]
        } else {
            output += romanPairs[str[i]];
        }
    }
    return output;
};

let s = "XL";
console.log(romanToInt(s));


var longestCommonPrefix = function(strs) {
    var answer = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(answer) !== 0) {
            console.log(strs[i].indexOf(answer))
            answer = answer.substring(0, answer.length - 1)
        }
    }
    return answer;
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
    if (s[0] == ")" || s[0] == "}" || s[0] == "]") {
        return false
    }
    var stack = []

    for (let i = 0; i < s.length; i ++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i])
        } else if (pairs[stack.pop()] != s[i]) {
            return false
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}

s = "()[]{}"

console.log(isValid(s));





var twoSum = function(nums, target) {
    const memoryObj = {}
    const output = []
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if (difference in memoryObj) {
            output.push(memoryObj[difference])
            output.push(i)
            return output;
        } else {
            memoryObj[nums[i]] = i
        }
    }
    return false
};

nums = [2,7,11,15]
target = 9
console.log(twoSum(nums, target))



var isPalindrome = function(x) {
    const string = x.toString()
    const isPal = true
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[string.length - (i + 1)]) {
            return false
        }
    }
    return isPal
};

x = 112211

console.log(isPalindrome(x))




var romanToInt = function(s) {
    const romanPairs = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var total = 0

    for (let i=0; i<s.length; i++) {
        if (romanPairs[s[i]] < romanPairs[s[i + 1]]) {
            total -= romanPairs[s[i]]
        } else {
            total += romanPairs[s[i]]
        }
    }
    return total
};

s = "MCMXCIV"

console.log(romanToInt(s))




var isValid = function(s) {
    if(s.length % 2 != 0) {
        return false
    }
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    if (s[0] === ")" || s[0] === "}" || s[0] === "]") {
        return false
    }
    var stack = []
    for (let i=0; i<s.length; i++) {
        if(s[i] in pairs) {
            if (stack && stack[stack.length - 1] === pairs[s[i]]) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0;
};

s = "()[]{}"

console.log(isValid(s))


var longestCommonPrefix = function(strs) {
    var prefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
};

strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))