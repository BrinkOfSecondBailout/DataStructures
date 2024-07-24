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








// var canCompleteCircuit = function(gas, cost) {
//     let totalGas = 0;
//     let totalCost = 0;
//     let tank = 0;
//     let start = 0;

//     for (let i = 0; i < gas.length; i++) {
//         totalGas += gas[i];
//         totalCost += cost[i];
//         tank += gas[i] - cost[i];

//         if (tank < 0) {
//             start = i + 1;
//             tank = 0;
//         }
//     }

//     if (totalGas < totalCost) {
//         return -1;
//     }

//     return start;
// };



// gas = [1,2,3,4,5]; 
// cost = [3,4,5,1,2];

// console.log(canCompleteCircuit(gas, cost));






// var intToRoman = function(num) {
//     const romanMap = [
//         { value: 1000, symbol: 'M' },
//         { value: 900, symbol: 'CM' },
//         { value: 500, symbol: 'D' },
//         { value: 400, symbol: 'CD' },
//         { value: 100, symbol: 'C' },
//         { value: 90, symbol: 'XC' },
//         { value: 50, symbol: 'L' },
//         { value: 40, symbol: 'XL' },
//         { value: 10, symbol: 'X' },
//         { value: 9, symbol: 'IX' },
//         { value: 5, symbol: 'V' },
//         { value: 4, symbol: 'IV' },
//         { value: 1, symbol: 'I' }
//     ]

//     let result = '';

//     for (let i = 0; i < romanMap.length; i++) {
//         const {value, symbol} = romanMap[i];
//         while (num >= value) {
//             result += symbol;
//             num -= value;
//         }
//     }

//     return result;
// }

// // Test cases
// console.log(intToRoman(3));    // Output: "III"
// console.log(intToRoman(4));    // Output: "IV"
// console.log(intToRoman(9));    // Output: "IX"
// console.log(intToRoman(58));   // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"





// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// function arrayToLinkedList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;

//     for (let value of arr) {
//         current.next = new ListNode(value);
//         current = current.next;
//     }

//     return dummy.next;
// }

// function linkedListToArr(node) {
//     let arr = [];
//     while (node) {
//         arr.push(node.val);
//         node = node.next;
//     }
//     return arr;
// }

// function findLength(node) {
//     let count = 1;
//     while (node.next) {
//         node = node.next;
//         count++;
//     }
//     return count;
// }


// var removeNthFromEnd = function(head, n) {
//     let len = findLength(head);
//     if (len <= 1 && n === 1) return null
//     let stepsToN = len - n;
//     let count = 0;

//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let prev = dummy;
//     let current = head;

//     while (count < stepsToN) {
//         prev = prev.next;
//         current = current.next;
//         count++;
//     }

//     let nextNode = current.next;
//     current.next = null;
//     prev.next = nextNode;

//     return dummy.next;
// };

// let arr = [1, 2, 3, 4, 5];
// let n = 2;
// let list = arrayToLinkedList(arr);
// let result = removeNthFromEnd(list, n);
// let showResult = linkedListToArr(result);
// console.log(showResult);




// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     let result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);

//                 while (left < right && nums[left] === nums[left + 1]) left++;

//                 while (left < right && nums[right] === nums[right - 1]) right--;

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// };


// nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums));







// var reverseWords = function(s) {
//     let words = s.trim().split(' ');

//     words = words.filter(word => word.length > 0);

//     let left = 0, right = words.length - 1;
//     while (left < right) {
//         let temp = words[left];
//         words[left] = words[right];
//         words[right] = temp;
//         left++;
//         right--;
//     }
//     return words.join(' ');
// };

// let s = "the sky is blue";
// let s2 = "  hello world  ";
// let s3 = "a good   example";
// console.log(reverseWords(s3));





// var MinStack = function() {
//     this.stack = [];
//     this.minStack = [];
// }

// MinStack.prototype.push = function(val) {
//     this.stack.push(val);
//     if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//         this.minStack.push(val);
//     } else {
//         this.minStack.push(this.minStack[this.minStack.length - 1]);
//     }
// };

// MinStack.prototype.pop = function() {
//     this.stack.pop();
//     this.minStack.pop();
// }

// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// }

// MinStack.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1];
// }








// var rotate = function(matrix) {
//     const n = matrix.length;

// Transpose
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }

// Reverse
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
// };

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// rotate(matrix);
// console.log(matrix);






// function Node(val, next = null, random = null) {
//     this.val = val;
//     this.next = next;
//     this.random = random;
// };


// var copyRandomList = function(head) {
//     if (head === null) {
//         return null;
//     }

//     // Step 1: Create a copy of each node and interleave them
//     let current = head;
//     while (current !== null) {
//         let copy = new Node(current.val, current.next, null);
//         current.next = copy;
//         current = copy.next;
//     }

//     // Step 2: Assign random pointers for the copied nodes
//     current = head;
//     while (current !== null) {
//         if (current.random !== null) {
//             current.next.random = current.random.next;
//         }
//         current = current.next.next;
//     }

//     // Step 3: Separate the interleaved lists
//     current = head;
//     let copyHead = head.next;
//     let copyCurrent = copyHead;
//     while (current !== null) {
//         current.next = current.next.next;
//         if (copyCurrent.next !== null) {
//             copyCurrent.next = copyCurrent.next.next;
//         }
//         current = current.next;
//         copyCurrent = copyCurrent.next;
//     }

//     return copyHead;
// };

// function createList(arr) {
//     const nodes = [];

//     // Create all nodes
//     for (let i = 0; i < arr.length; i++) {
//         const [val, randomIndex] = arr[i];
//         nodes.push(new Node(val));
//     }

//     // Set next and random pointers
//     for (let i = 0; i < arr.length; i++) {
//         if (i < arr.length - 1) {
//             nodes[i].next = nodes[i + 1];
//         }
//         if (arr[i][1] !== null) {
//             nodes[i].random = nodes[arr[i][1]];
//         }
//     }

//     return nodes[0];
// }

// function printList(head) {
//     let current = head;
//     let result = '';
//     while (current) {
//         const randomVal = current.random ? current.random.val : 'null';
//         result += `[${current.val}, ${randomVal}]`;
//         current = current.next;
//         if (current) {
//             result += ' -> ';
//         }
//     }
//     console.log(result);
// }

// const head = createList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
// // printList(head); // Original list
// const copiedHead = copyRandomList(head);
// printList(copiedHead);






// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var deleteDuplicates = function(head) {
//     let dummy = new ListNode(0, head);
//     let prev = dummy;
//     let node = head;
//     while (node !== null) {
//         if (node.next !== null && node.val === node.next.val) {
//             while (node.next !== null && node.val === node.next.val) {
//                 node = node.next;
//             }
//             prev.next = node.next;
//         } else {
//             prev = prev.next;
//         }
//         node = node.next;
//     }

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

// function listToArray(node) {
//     let arr = [];
//     while (node !== null) {
//         arr.push(node.val);
//         node = node.next;
//     }
//     console.log(arr);
// }

// let ex = [1,2,3,3,4,4,5];
// let ex2 = [1,1,1,2,3];
// let head = arrayToList(ex);
// listToArray(deleteDuplicates(head));






// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// var setZeroes = function(matrix) {
//     let m = matrix.length; // rows
//     let n = matrix[0].length; // columns
    
//     let firstRowHasZero = false;
//     let firstColumnHasZero = false;

//     // Step 1: Determine if first row or first column has any zeros
//     for (let i = 0; i < m; i++) {
//         if (matrix[i][0] === 0) {
//             firstColumnHasZero = true;
//             break;
//         }
//     }
//     for (let j = 0; j < n; j++) {
//         if (matrix[0][j] === 0) {
//             firstRowHasZero = true;
//             break;
//         }
//     }

//     // Step 2: Use first row and column as markers
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             if (matrix[i][j] === 0) {
//                 matrix[i][0] = 0;
//                 matrix[0][j] = 0;
//             }
//         }
//     }

//     // Step 3: Zero out cells based on markers
//     for (let i = 1; i < m; i++) {
//         for (let j = 1; j < n; j++) {
//             if (matrix[i][0] === 0 || matrix[0][j] === 0) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }

//     // Step 4: Zero out the first row if needed
//     if (firstRowHasZero) {
//         for (let j = 0; j < n; j++) {
//             matrix[0][j] = 0;
//         }
//     }

//     // Step 5: Zero out the first column if needed
//     if (firstColumnHasZero) {
//         for (let i = 0; i < m; i++) {
//             matrix[i][0] = 0;
//         }
//     }
// };



// matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// setZeroes(matrix);
// console.log(matrix);







// var RandomizedSet = function() {
//     this.map = new Map();
//     this.list = [];
// };

// RandomizedSet.prototype.insert = function(val) {
//     if (this.map.has(val)) {
//         return false;
//     }
//     this.map.set(val, this.list.length);
//     this.list.push(val);
//     return true;
// };

// RandomizedSet.prototype.remove = function(val) {
//     if (!this.map.has(val)) {
//         return false;
//     }
//     let index = this.map.get(val);
//     let lastElement = this.list[this.list.length - 1];

//     this.list[index] = lastElement; // Move the last element to the index of the element to remove
//     this.map.set(lastElement, index); // Update the index of the last element in the map

//     this.list.pop(); // Remove the last element from the list
//     this.map.delete(val); // Remove the element from the map

//     return true;
// };

// RandomizedSet.prototype.getRandom = function() {
//     let random = Math.floor(Math.random() * this.list.length);
//     return this.list[random];
// };

// let set = new RandomizedSet();
// set.insert(0);
// set.insert(1);
// set.remove(0);
// set.insert(2);
// set.remove(1);
// console.log(set.getRandom());





// var productExceptSelf = function(nums) {
//     let n = nums.length;

//     let result = new Array(n);
//     let left = new Array(n).fill(1);
//     let right = new Array(n).fill(1);

//     for (let i = 1; i < n; i++) {
//         left[i] = left[i - 1] * nums[i - 1];
//     }

//     for (let i = n - 2; i >= 0; i--) {
//         right[i] = right[i + 1] * nums[i + 1];
//     }

//     for (let i = 0; i < n; i++) {
//         result[i] = left[i] * right[i];
//     }

//     return result;
// };


// nums = [1,2,3,4];
// console.log(productExceptSelf(nums));





// var convert = function(s, numRows) {
//     if (numRows === 1 || numRows >= s.length) {
//         return s;
//     }

//     let rows = new Array(Math.min(numRows, s.length)).fill("");
//     let curRow = 0;
//     let goingDown = false;

//     for (let c of s) {
//         rows[curRow] += c;
//         if (curRow === 0 || curRow === numRows - 1) {
//             goingDown = !goingDown;
//         }
//         curRow += goingDown ? 1 : -1;
//     }

//     return rows.join("");
// };


// let s = "PAYPALISHIRING";
// let numRows = 3;
// console.log(convert(s, numRows)); // Expected output: "PAHNAPLSIIGYIR"







// var gameOfLife = function(board) {
//     const m = board.length;
//     const n = board[0].length;

//     // Count live neightbors
//     const countLiveNeighbors = (r, c) => {
//         let count = 0;
//         for (let i = -1; i <= 1; i++) {
//             for (let j = -1; j <= 1; j++) {
//                 if (i === 0 && j === 0) continue; // Skip the cell
//                 const nr = r + i;
//                 const nc = c + j;
//                 if (nr >= 0 && nr < m && nc >= 0 && nc < n && (board[nr][nc] === 1 || board[nr][nc] === -1)) {
//                     count++;
//                 }
//             }
//         }
//         return count;
//     }

//     // Apply rules to update the board
//     for (let r = 0; r < m; r++) {
//         for (let c = 0; c < n; c++) {
//             const liveNeighbors = countLiveNeighbors(r, c);

//             if (board[r][c] === 1) {
//                 if (liveNeighbors < 2 || liveNeighbors > 3) {
//                     board[r][c] = -1; // Live to dead
//                 }
//             } else {
//                 if (liveNeighbors === 3) {
//                     board[r][c] = 2; // Dead to live
//                 }
//             }
//         }
//     }

//     // Finalize board by converting temporary states to final states
//     for (let r = 0; r < m; r++) {
//         for (let c = 0; c < n; c++) {
//             if (board[r][c] === -1) {
//                 board[r][c] = 0; // Dead
//             } else if (board[r][c] === 2) {
//                 board[r][c] = 1; // Live
//             }
//         }
//     }
// };


// board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];

// gameOfLife(board);
// console.log(board);





// var lengthOfLastWord = function(s) {
//     let words = s.trim().split(" ");
//     words = words.filter(word => word.length > 0);

//     return words[words.length - 1].length;
// };


// s = "Hello World" // Expected: 5
// s2 = "   fly me   to   the moon  " // Expected: 4
// s3 = "luffy is still joyboy" // Expected: 6
// console.log(lengthOfLastWord(s3)); 








// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };

// var strStr = function(haystack, needle) {
//     let h = haystack.length;
//     let n = needle.length;

//     if (n === 0) return 0;

//     for (let i = 0; i < h; i++) {
//         if (haystack.substring(i, i + n) === needle) {
//             return i;
//         }
//     }

//     return -1;
// }

// haystack = "sadbutsad";
// needle = "sad"; // Expected: 0
// haystack2 = "leetcode";
// needle2 = "leeto"; // Expceted: -1
// haystack3 = "hello";
// needle3 = "ll"; // Expceted: 2
// console.log(strStr(haystack3, needle3));





// var maxArea = function(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let maxArea = 0;

//     while (left < right) {
//         let width = right - left;
//         let currentHeight = Math.min(height[left], height[right]);
//         let currentArea = width * currentHeight;
//         maxArea = Math.max(maxArea, currentArea);

//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxArea;
// }


// height = [1,8,6,2,5,4,8,3,7] // Expected: 49
// height = [1,1] // Expected 1

// console.log(maxArea(height));






// var evalRPN = function(tokens) {
//     let stack = [];

//     for (let token of tokens) {
//         if (!isNaN(token)) {
//             stack.push(Number(token));
//         } else {
//             let b = stack.pop();
//             let a = stack.pop();
//             let result;

//             switch(token) {
//                 case '+':
//                     result = a + b;
//                     break;
//                 case '-':
//                     result = a - b;
//                     break;
//                 case '*':
//                     result = a * b;
//                     break;
//                 case '/':
//                     result = Math.trunc(a / b);
//                     break;
//                 default:
//                     throw new Error('Invalid operator');
//             }
//             stack.push(result);
//         }
//     }
//     return stack.pop();
// };



// tokens = ["2","1","+","3","*"]; // Expected: 9
// tokens2 = ["4","13","5","/","+"] // Expected: 6
// tokens3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] // Expected: 22

// console.log(evalRPN(tokens3));






// var hasCycle = function(head) {
//     if (head === null || head.next === null) {
//         return false;
//     }

//     let slow = head;
//     let fast = head;
    
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             return true;
//         }
//     }

//     return false;
// };

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }


// head = [3,2,0,-4]; // Expected: true
// pos = 1;
// console.log(hasCycle(headList));



// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var mergeTwoLists = function(list1, list2) {
//     let dummy = new ListNode(0);
//     let tail = dummy;

//     while (list1 !== null && list2 !== null) {
//         if (list1.val < list2.val) {
//             tail.next = list1;
//             list1 = list1.next;
//         } else {
//             tail.next = list2;
//             list2 = list2.next;
//         }
//         tail = tail.next;
//     }

//     if (list1 !== null) {
//         tail.next = list1;
//     }

//     if (list2 !== null) {
//         tail.next = list2;
//     }

//     return dummy.next;
// };

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printList(head) {
    let current = head;
    let result = '';

    while (current) {
        result += `${current.val} -> `;
        current = current.next;
    }

    console.log(result);
}

// list1 = [1,2,4];
// list2 = [1,3,4]; // Expected: [1,1,2,3,4,4]

// let list1real = arrayToList(list1);
// let list2real = arrayToList(list2);

// let head = mergeTwoLists(list1real, list2real);
// printList(head);










// var candy = function(ratings) {
//     let n = ratings.length;
//     if (n === 0) return 0;

//     let candies = new Array(n).fill(1);

//     // Left to right
//     for (let i = 1; i < n; i++) {
//         if (ratings[i] > ratings[i - 1]) {
//             candies[i] = candies[i - 1] + 1;
//         }
//     }

//     // Right to left
//     for (let i = n - 2; i >= 0; i--) {{
//         if (ratings[i] > ratings[i + 1]) {
//             candies[i] = Math.max(candies[i], candies[i + 1] + 1);
//         }
//     }}

//     let totalCandies = candies.reduce((sum, val) => sum + val, 0);
//     return totalCandies;
// };


// ratings = [1,0,2]; // Expected: 5
// ratings2 = [1,2,2]; // Expected: 4

// console.log(candy(ratings2));






// var summaryRanges = function(nums) {
//     let n = nums.length;

//     if (n === 0) return [];

//     let result = [];
//     let start = nums[0];

//     for (let i = 1; i < n; i++) {
//         if (nums[i] !== nums[i - 1] + 1) {
//             if (start === nums[i - 1]) {
//                 result.push(`${start}`);
//             } else {
//                 result.push(`${start}->${nums[i - 1]}`);
//             }
//             start = nums[i];
//         }
//     }

//     if (start === nums[nums.length - 1]) {
//         result.push(`${start}`);
//     } else {
//         result.push(`${start}->${nums[nums.length - 1]}`);
//     }

//     return result;
// };

// nums = [0,1,2,4,5,7]; // Expected: ["0->2","4->5","7"]

// nums2 = [0,2,3,4,6,8,9]; // Expected: ["0","2->4","6","8->9"]

// console.log(summaryRanges(nums));








// var merge = function(intervals) {
//     if (intervals.length === 0) return [];

//     // Sort the intervals by their start time
//     intervals.sort((a, b) => a[0] - b[0]);

//     let merged = [];
//     let currentInterval = intervals[0];

//     for (let i = 1; i < intervals.length; i++) {
//         // If the current interval overlaps with the next interval, merge them
//         if (currentInterval[1] >= intervals[i][0]) {
//             currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
//         } else {
//             // Otherwise, push the current interval to merged and move to the next interval
//             merged.push(currentInterval);
//             currentInterval = intervals[i];
//         }
//     }

//     // Push the last interval
//     merged.push(currentInterval);

//     return merged;
// };


// intervals = [[1,3],[2,6],[8,10],[15,18]]; // Expected: [[1,6],[8,10],[15,18]]
// intervals2 = [[1,4],[4,5]]; // Expected: [[1,5]]
// console.log(merge(intervals));




