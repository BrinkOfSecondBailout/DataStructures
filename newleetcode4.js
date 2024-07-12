// var twoSum = function(nums, target) {
//     var memoryObj = {};
//     var results = [];
//     for (let i = 0; i < nums.length; i++) {
//         var difference = target - nums[i];
//         if (difference in memoryObj) {
//             results.push(i);
//             results.push(memoryObj[difference]);
//             return results;
//         } else {
//             memoryObj[nums[i]] = i;
//         }
//     }
//     return results;
// };

// nums = [2,7,11,15];
// target = 9;
// console.log(twoSum(nums, target));




// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var addTwoNumbers = function(l1, l2) {
//     let dummyHead = new ListNode(0);
//     let p = l1, q = l2, current = dummyHead;
//     let carry = 0;
    
//     while (p !== null || q !== null) {
//         let x = (p !== null) ? p.val : 0;
//         let y = (q !== null) ? q.val : 0;
//         let sum = carry + x + y;
//         carry = Math.floor(sum / 10);
//         current.next = new ListNode(sum % 10);
//         current = current.next;
//         if (p !== null) p = p.next;
//         if (q !== null) q = q.next;
//     }
    
//     if (carry > 0) {
//         current.next = new ListNode(carry);
//     }
    
//     return dummyHead.next;
// };





/* Given a string s, find the length of the longest 
substring without repeating characters
*/

// var lengthOfLongestSubstring = function(s) {
//     let n = s.length;
//     let set = new Set();
//     let left = 0, right = 0; maxLength = 0;

//     while (right < n) {
//         if (!set.has(s[right])) {
//             set.add(s[right]);
//             right++;
//             maxLength = Math.max(maxLength, right - left);
//         } else {
//             set.delete(s[left]);
//             left++;
//         }
//     }

//     return maxLength;

// };

// s = "abcabcbb";

// console.log(lengthOfLongestSubstring(s));




// var longestPalindrome = function(s) {
//     let start = 0, end = 0;
    
//     if (s.length < 1) return "";

//     for (let i = 0; i < s.length; i++) {
//         let len1 = expandAroundCenter(s, i, i); 
//         let len2 = expandAroundCenter(s, i, i + 1);
//         let len = Math.max(len1, len2);

//         if (len > end - start) {
//             start = i - Math.floor((len - 1) / 2);
//             end = i + Math.floor(len / 2);
//         }
//     }
//     return s.substring(start, end + 1);
// };

// function expandAroundCenter(s, left, right) {
//     while (left >= 0 && right < s.length && s[left] == s[right]) {
//         left--;
//         right++;
//     }
//     return right - left - 1;
// }


// s = "babad";
// console.log(longestPalindrome(s));


// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


nums = [1,2,3,4,5,6,7]
k = 3

rotate(nums, k);
console.log(nums);