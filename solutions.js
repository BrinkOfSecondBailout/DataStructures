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

// nums2 = [3,2,4]; 
// target2 = 6
// console.log(twoSum(nums2, target2));








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
// s2 = "cbbd";
// console.log(longestPalindrome(s2));


// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// var rotate = function(nums, k) {
//     k = k % nums.length;

//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
// };

// function reverse(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// nums = [1,2,3,4,5,6,7]
// k = 3

// rotate(nums, k);
// console.log(nums);





// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// var twoSum2 = function(nums, target) {
//     let left = 0, right = nums.length - 1;

//     while (left < right) {
//         let sum = nums[left] + nums[right];

//         if (sum === target) {
//             return [left + 1, right + 1];
//         } else if (sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return [];
// }

// let numbers = [2, 7, 11, 15];
// let target = 9;
// console.log(twoSum2(numbers, target));





// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0;

//     let numSet = new Set(nums);
//     let longestStreak = 0;

//     for (let num of nums) {
//         if (!numSet.has(num - 1)) {
//             let currentNum = num;
//             let currentStreak = 1;

//             while (numSet.has(currentNum + 1)) {
//                 currentNum += 1;
//                 currentStreak += 1;
//             }

//             longestStreak = Math.max(longestStreak, currentStreak);
//         }
//     }

//     return longestStreak;
// };







// Given an absolute path for a Unix-style file system, which begins with a slash '/', transform this path into its simplified canonical path.

// In Unix-style file system context, a single period '.' signifies the current directory, a double period ".." denotes moving up one directory level, and multiple slashes such as "//" are interpreted as a single slash. In this problem, treat sequences of periods not covered by the previous rules (like "...") as valid names for files or directories.

// The simplified canonical path should adhere to the following rules:

// It must start with a single slash '/'.
// Directories within the path should be separated by only one slash '/'.
// It should not end with a slash '/', unless it's the root directory.
// It should exclude any single or double periods used to denote current or parent directories.
// Return the new path.

// var simplifyPath = function(path) {
//     let parts = path.split('/');
//     let stack = [];
//     console.log(parts);

//     for (let part of parts) {
//         if (part === '' || part === '.') {
//             continue;
//         } else if (part === '..') {
//             if (stack.length > 0) {
//                 stack.pop();
//             }
//         } else {
//             stack.push(part);
//         }
//     }

//     let result = '/' + stack.join('/');
//     return result;

// }


// console.log(simplifyPath("/home/"));
// console.log(simplifyPath("/home//foo/"));
// console.log(simplifyPath("/home/user/Documents/../Pictures"));
// console.log(simplifyPath("/../"));
// console.log(simplifyPath("/.../a/../b/c/../d/./"));





// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// var isValidSudoku = function(board) {
//     let rows = Array.from({ length: 9}, () => new Set());
//     let columns = Array.from({ length: 9}, () => new Set());
//     let boxes = Array.from({ length: 9}, () => new Set());

//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9, c++) {
//             let val = board[r][c];
//             if (val === '.') continue;

//             let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

//             if (rows[r].has(val) || columns[c].has(val) || boxes[boxIndex].has(val)) {
//                 return false;
//             }

//             rows[r].add(val);
//             columns[c].add(val);
//             boxes[boxIndex].add(val);
//         }
//     }

//     return true;
// };


// var isValidSudoku = function(board) {
//     let rows = createSetOfArrays(9), columns = createSetOfArrays(9), boxes = createSetOfArrays(9);

//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let val = board[r][c];

//             if (val === '.') continue;

//             let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

//             if (rows[r].has(val) || columns[c].has(val) || boxes[boxIndex].has(val)) {
//                 return false;
//             }
//             rows[r].add(val);
//             columns[c].add(val);
//             boxes[boxIndex].add(val);
//         }
//     }

//     return true;
// }



// function createSetOfArrays(length) {
//     let array = []
//     for (let i = 0; i < length; i++) {
//         array.push(new Set());
//     }
//     return array;
// }

// let board = [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
// ];
// console.log(isValidSudoku(board));











// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val);
//     this.left = (left===undefined ? 0 : left);
//     this.right = (right===undefined ? 0 : right);
// }


// var kthSmallest = function(root, k) {
//     let count = 0;
//     let result = null;

//     const inorder = (node) => {
//         if (!node || result !== null) return;

//         inorder(node.left);

//         count++;

//         if (count === k) {
//             result = node.val;
//             return;
//         }

//         inorder(node.right);
//     };

//     inorder(root);
//     return result;
// };




// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val);
//     this.left = (left === undefined ? null : left);
//     this.right = (right === undefined ? null : right);
// }


// var buildTree = function(preorder, inorder) {
//     if (!preorder.length || !inorder.length) return null;

//     // The first element of preorder is always the root
//     const rootVal = preorder[0];
//     const root = new TreeNode(rootVal);

//     // Find the index of the root in inorder array
//     const rootIndex = inorder.indexOf(rootVal);

//     // Elements to the left of rootIndex in inorder are in the left subtree
//     const leftInorder = inorder.slice(0, rootIndex);
//     // Elements to the right of rootIndex in inorder are in the right subtree
//     const rightInorder = inorder.slice(rootIndex + 1);

//     // Elements in preorder corresponding to the leftInorder
//     const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
//     // Elements in preorder corresponding to the rightInorder
//     const rightPreorder = preorder.slice(1 + leftInorder.length);

//     // Recursively build the left and right subtrees
//     root.left = buildTree(leftPreorder, leftInorder);
//     root.right = buildTree(rightPreorder, rightInorder);

//     return root;
// };





// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val);
//     this.left = (left===undefined ? null : left);
//     this.right = (right===undefined ? null : right);
// }


// var buildTree = function(inorder, postorder) {
//     if (!inorder.length || !postorder.length) return null;

//     let rootVal = postorder.pop();
//     let inorderRootIndex = inorder.indexOf(rootVal);
//     let root = new TreeNode(rootVal);

//     let left_inorder = inorder.slice(0, inorderRootIndex);
//     let right_inorder = inorder.slice(inorderRootIndex + 1);

//     let left_postorder = postorder.slice(0, left_inorder.length);
//     let right_postorder = postorder.slice(left_inorder.length);

//     root.left = buildTree(left_inorder, left_postorder);
//     root.right = buildTree(right_inorder, right_postorder);

//     return root;
// };





// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// var maxProfit = function(prices) {
//     let totalProfit = 0;

//     for (let i = 0; i < prices.length - 1; i++) {
//         if (prices[i + 1] > prices[i]) {
//             totalProfit += prices[i + 1] - prices[i];
//         }
//     }
//     return totalProfit;
// };









// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// const maxProfit = (prices) => {
//     let minPrice = Infinity;
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         } else if (prices[i] - minPrice > maxProfit) {
//             maxProfit = prices[i] - minPrice;
//         }
//     }

//     return maxProfit;
// };





// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// var groupAnagrams = function(strs) {
//     let map = new Map();

//     for (let str of strs) {
//         let sortedStr = str.split('').sort().join('');
//         if (!map.has(sortedStr)) {
//             map.set(sortedStr, []);
//         }

//         map.get(sortedStr).push(str);
//     }

//     return Array.from(map.values());
// };

// strs = ["eat","tea","tan","ate","nat","bat"];
// console.log(groupAnagrams(strs));





// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var reverseBetween = function(head, left, right) {
//     if (!head || left === right) return head;

//     let dummy = new ListNode(0, head);
//     let leftPrev = dummy;
//     let current = head;
//     let position = 1;

//     while (position < left) {
//         leftPrev = current;
//         current = current.next;
//         position++;
//     }

//     let leftNode = current;
//     let prev = null;

//     while (position <= right) {
//         let nextNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextNode;
//         position++;
//     }

//     leftPrev.next = prev;
//     leftNode.next = current;

//     return dummy.next;
// };

// function arrayToList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// function listToArray(head) {
//     let array = [];
//     let current = head;
//     while (current) {
//         array.push(current.val);
//         current = current.next;
//     }
//     return array;
// }














// My version :)

// function ListNode(val, next) {
//     this.val = (val !== undefined) ? val : 0;
//     this.next = (next !== undefined) ? next : 0;
// }

// var reverseBetween = function(head, left, right) {
//     if (!head || !left || !right) return null;

//     let dummy = new ListNode(0, head);
//     let leftPrev = dummy;
//     let current = head;
//     let position = 1;

//     while (position < left) {
//         leftPrev = current;
//         current = current.next;
//         position++;
//     }

//     let prev = null;
//     let leftNode = current;
    
//     while (position <= right) {
//         let nextNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextNode;
//         position++;
//     }

//     leftPrev.next = prev;
//     leftNode.next = current;

//     return dummy.next;


// };


// function listToArray(head) {
//     let array = [];
//     let current = head;
//     while (current) {
//         array.push(current.val);
//         current = current.next;
//     }
//     return array;
// }

// function arrayToList(array) {
//     let dummy = new ListNode(0);
//     let current = dummy;

//     for (let value of array) {
//         current.next = new ListNode(value);
//         current = current.next;
//     }

//     return dummy.next;
// }







// let head1 = arrayToList([1, 2, 3, 4, 5]);
// let left1 = 2;
// let right1 = 4;
// let result1 = reverseBetween(head1, left1, right1);
// console.log(listToArray(result1));



// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var rotateRight = function(head, k) {
//     if (!head || k == 0) return head;

//     let length = 1;
//     let tail = head;
//     while (tail.next) {
//         tail = tail.next;
//         length++;
//     }

//     tail.next = head;

//     k = k % length;
//     let stepsToNewTail = length - k - 1;
//     let newTail = head;
//     for (let i = 0; i < stepsToNewTail; i++) {
//         newTail = newTail.next;
//     }

//     let newHead = newTail.next;

//     newTail.next = null;

//     return newHead;
// };



// function arrayToList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// // Helper function to convert linked list to array
// function listToArray(head) {
//     let array = [];
//     let current = head;
//     while (current) {
//         array.push(current.val);
//         current = current.next;
//     }
//     return array;
// }

// // Test cases
// let head1 = arrayToList([1, 2, 3, 4, 5]);
// let k1 = 2;
// let result1 = rotateRight(head1, k1);
// console.log(listToArray(result1)); // Output: [4, 5, 1, 2, 3]

// let head2 = arrayToList([0, 1, 2]);
// let k2 = 4;
// let result2 = rotateRight(head2, k2);
// console.log(listToArray(result2)); // Output: [2, 0, 1]





// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.


// function canJump(nums) {
//     let maxReach = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (i > maxReach) {
//             return false;
//         }
//         maxReach = Math.max(maxReach, i + nums[i]);
//     }

//     return maxReach >= nums.length - 1;
// }

// // Test cases
// let nums1 = [2, 3, 1, 1, 4];
// console.log(canJump(nums1)); // Output: true

// let nums2 = [3, 2, 1, 0, 4];
// console.log(canJump(nums2)); // Output: false










// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n

// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// var jump = function(nums) {
//     let n = nums.length;
//     if (n <= 1) return 0;

//     let jumps = 0;
//     let currentEnd = 0;
//     let farthest = 0;

//     for (let i = 0; i < n - 1; i++) {
//         farthest = Math.max(farthest, i + nums[i]);

//         if (i === currentEnd) {
//             jumps++;
//             currentEnd = farthest;
//             if (currentEnd >= n - 1) break;
//         }
//     }

//     return jumps;
// };









// Given an m x n matrix, return all elements of the matrix in spiral order.

// var spiralOrder = function(matrix) {
//     if (matrix.length === 0) return [];

//     let result = [];

//     let top = 0;
//     let right = matrix[0].length - 1;
//     let bottom = matrix.length - 1;
//     let left = 0;

//     while (top <= bottom && left <= right) {
//         for (let i = left; i <= right; i++) {
//             result.push(matrix[top][i]);
//         }
//         top++;
        
//         for (let i = top; i <= bottom; i++) {
//             result.push(matrix[i][right]);
//         }
//         right--;

//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 result.push(matrix[bottom][i]);
//             }
//             bottom--;
//         }
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 result.push(matrix[i][left]);
//             }
//             left++;
//         }
//     }

//     return result;
// };


// // Test cases
// let matrix1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(spiralOrder(matrix1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// let matrix2 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];
// console.log(spiralOrder(matrix2)); // Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]








// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// var hIndex = function(citations) {
//     // Sort the array in non-decreasing order
//     citations.sort((a, b) => a - b);
    
//     let n = citations.length;
    
//     // Iterate through the sorted array
//     for (let i = 0; i < n; i++) {
//         let h = n - i; // Number of papers with at least citations[i] citations
//         if (citations[i] >= h) {
//             return h;
//         }
//     }
    
//     return 0;
// };

// // Test cases
// console.log(hIndex([3, 0, 6, 1, 5])); // Output: 3
// console.log(hIndex([1, 3, 1])); // Output: 1







// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.


// var isHappy = function(n) {

//     const sumOfSquares = (num) => {
//         let sum = 0;
//         while (num > 0) {
//             let digit = num % 10;
//             sum += digit * digit;
//             num = Math.floor(num / 10);
//         }
//         return sum;
//     }

//     let seen = new Set();

//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n);
//         n = sumOfSquares(n);
//     }

//     return n === 1;

// };



// // Test cases
// console.log(isHappy(19)); // Output: true
// console.log(isHappy(2));  // Output: false








var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    if (totalGas < totalCost) {
        return -1;
    }

    return start;
};



gas = [1,2,3,4,5]; 
cost = [3,4,5,1,2];

console.log(canCompleteCircuit(gas, cost));