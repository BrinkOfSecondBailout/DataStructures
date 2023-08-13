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




var removeDuplicates = function(nums) {
    var newArr = []
    for (let i = 0; i < nums.length; i ++) {
        while (newArr.indexOf(nums[i]) === -1) {
            newArr.push(nums[i])
        }
    }
    return newArr
};

var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

nums = [0,0,1,1,1,2,2,3,3,4]



console.log(removeDuplicates(nums))






const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]; // our current profit

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
};

prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))



var containsDuplicate = function(nums) {
    var newArr = []
    for (let i = 0; i < nums.length; i ++) {
        if (newArr.indexOf(nums[i]) === -1) {
            newArr.push(nums[i])
        } else {
            return true
        }
    }
    return false
};

nums = [1,2,3,1]

console.log(containsDuplicate(nums))




var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    s = s.split("").sort()
    t = t.split("").sort()
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false
        }
    }
    return true
};

s = "anagram"
t = "nagaram"


console.log(isAnagram(s, t))




class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(1);
    let resultPointer = result;

    while(l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        let nextDigit = (l1Val + l2Val + carry) % 10;
        result.next = new ListNode(nextDigit);
        result = result.next;

        carry = Math.floor((l1Val + l2Val + carry) / 10);

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return resultPointer.next;
};

var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2))

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(1);
    let resultPointer = result;
    while (l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let nextDigit = ((l1Val + l2Val + carry) % 10);
        result.next = new ListNode(nextDigit);
        result = result.next;
        carry = Math.floor((l1Val + l2Val + carry) / 10);

        l1 = l1 ? l1.next : 0;
        l2 = l2 ? l2.next : 0;
    }
    return resultPointer.next;
};


console.log(addTwoNumbers(l1, l2))



class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let result = new ListNode(1);
    let resultPointer = result;
    while (l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;
        let nextDigit = Math.floor((l1Val + l2Val + carry) % 10);
        carry = ((l1Val + l2Val + carry) / 10);
        result.next = new ListNode(nextDigit);
        result = result.next;

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return resultPointer.next;
};

var l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));


function maxArraySum(nums, size) {
    let currentSum = 0;
    let maxSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (i >= size - 1) {
            maxSum = Math.max(maxSum, currentSum);
            currentSum -= nums[i - (size - 1)]
        }
    }
    return maxSum;
}

let nums = [1, 5, 6, 11, 3, 9, 23, 6, 83, 5, 12, 2]

console.log(maxArraySum(nums, 3));





// Given a string s, find the length of the longest 
// substring without repeating characters

var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        
    }
};

s = "abcabcbb"

console.log(lengthOfLongestSubstring(s))








const array1 = ['a', null, 'c', 'd'];
const array2 = ['r', null, 'e'];

function commonItems(arr1, arr2) {
    let map = {};
    for (let i=0; i<arr1.length; i++) {
        if(!map[arr1[i]]) {
            map[arr1[i]] = true;
        }
    }
    for (let i=0; i<arr2.length; i++) {
        if(map[arr2[i]]) {
            return true;
        }
    }
    return false;
}
console.log(commonItems(array1, array2));

// O(a + b)


function reverse(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
        return 'wrong data type';
    }
    const newArr = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        newArr.push(str[i])
    }
    console.log(newArr)
    return newArr.join('');
}

let str = 'Hi my name is Danny';

console.log(reverse(str));

let str = 'Hi my name is Danny';
function reverse2(str) {
    return str.split('').reverse().join('');
}

console.log(reverse2(str));


let str = 'Hi my name is Danny';
const reverse3 = str => str.split('').reverse().join('');

const reverse4 = str => [...str].reverse().join('');
console.log(reverse3(str));

console.log(reverse4(str));




function mergeSortedArrays(arr1, arr2) {
    function mergeArrays(arr1, arr2) {
        var newArr = [];
        for (let i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i]);
        }
        for (let i = 0; i < arr2.length; i++) {
            newArr.push(arr2[i]);
        }
    }
    function sortArray(arr) {
        
    }
}

var arr1 = [0, 3, 4, 2, 1];
var arr2 = [5, 23, 8, 30];

console.log(mergeSortedArrays(arr1, arr2));