
// var twoSum = function(nums, target) {
//     let memory = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         let difference = target - nums[i];
//         if (memory.has(difference)) {
//             return [memory.get(difference), i];
//         } else {
//             memory.set(nums[i], i);
//         }
//     }
//     return false;
// };

// // Test Case
// nums = [2,7,11,15];
// target = 9;

// nums2 = [3,2,4]; 
// target2 = 6

// nums3 = [3,3];
// target3 = 6;

// console.log(twoSum(nums, target));



// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

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
//     while (node) {
//         arr.push(node.val);
//         node = node.next;
//     }
//     return arr;
// }

// var addTwoNumbers = function(l1, l2) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     let p = l1, q = l2, carry = 0;

//     while (p !== null || q !== null) {
//         let x = (p !== null) ? p.val : 0;
//         let y = (q !== null) ? q.val : 0;

//         let sum = x + y + carry;
//         carry = Math.floor(sum / 10);
//         current.next = new ListNode(sum % 10);
//         current = current.next;
//         if (p !== null) p = p.next;
//         if (q !== null) q = q.next;
//     }

//     if (carry > 0) current.next = new ListNode(carry);

//     return dummy.next;
// };


// // Test Case
// l1 = [2,4,3];
// l2 = [5,6,4];

// l3 = [9,9,9,9,9,9,9], l4 = [9,9,9,9];

// let list1 = arrayToList(l3);
// let list2 = arrayToList(l4);

// let answerNode = addTwoNumbers(list1, list2);
// let answerArr = listToArray(answerNode);

// console.log(answerArr);


// l3 = [9,9,9,9,9,9,9], l4 = [9,9,9,9]




// var lengthOfLongestSubstring = function(s) {
//     let set = new Set();
//     let left = 0, right = 0, count = 0;

//     while (right < s.length) {
//         if (!set.has(s[right])) {
//             set.add(s[right]);
//             right++;
//             count = Math.max(count, right - left);
//         } else {
//             set.delete(s[left]);
//             left++
//         }
//     }
//     return count;
// };

// // Test Case
// s = "abcabcbb";

// console.log(lengthOfLongestSubstring(s));






// var rotate = function(nums, k) {
//     k = k % nums.length;

//     reverseArray(nums, 0, nums.length - 1);
//     reverseArray(nums, 0, k - 1);
//     reverseArray(nums, k, nums.length - 1);
// };

// function reverseArray(arr, start, end) {
//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// // Test Case
// nums = [1,2,3,4,5,6,7]
// k = 3

// rotate(nums, k);
// console.log(nums);







// var twoSum2 = function(numbers, target) {
//     let left = 0, right = numbers.length - 1;
    
//     while (left < right) {
//         let sum = numbers[left] + numbers[right];
//         if (sum === target) {
//             return [left + 1, right + 1];
//         } else if (sum > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }

//     return [];
// };

// // Test Case
// let numbers = [2, 7, 11, 15];
// let target = 9;
// console.log(twoSum2(numbers, target));





// var longestConsecutive = function(nums) {

//     if (nums.length === 0) return 0;
    
//     let numSet = new Set(nums);
//     let longestStreak = 0;
//     for (let num of nums) {
//         if (!numSet.has(num - 1)) {
//             let currentNum = num;
//             let currentStreak = 1;

//             while (numSet.has(num + 1)) {
//                 currentNum++;
//                 currentStreak++;
//             }
//         }
//         longestStreak = Math.max(longestStreak, currentStreak);
//     }

//     return longestStreak;
// };

// // Test Case
// nums = [100,4,200,1,3,2];
// nums2 = [0,3,7,2,5,8,4,6,0,1];
// console.log(longestConsecutive(nums2));






// var simplifyPath = function(path) {
//     let parts = path.split('/');
//     let stack = [];
//     for (let part of parts) {
//         if (part === '.' || part === '') {
//             continue;
//         } else if (part === '..') {
//             if (stack.length > 0) {
//                 stack.pop();
//             }
//         } else {
//             stack.push(part);
//         }
//     }
//     return '/' + stack.join('/');
// }


// path = "/home//foo/";
// path2 = "/.../a/../b/c/../d/./"
// console.log(simplifyPath(path));




// var isValidSudoku = function(board) {
//     let rows = arrayOfSets(9);
//     let columns = arrayOfSets(9);
//     let boxes = arrayOfSets(9);

//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let val = board[r][c];
//             if (val === '.') continue;
            
//             let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
//             if ( rows[r].has(val) || columns[c].has(val) || boxes[boxIndex].has(val)) {
//                 return false;
//             } else {
//                 rows[r].add(val);
//                 columns[c].add(val);
//                 boxes[boxIndex].add(val);
//             }
//         }
//     }
//     return true;

// };


// function arrayOfSets(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(new Set());
//     }
//     return arr;
// }



// board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

// board2 = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// console.log(isValidSudoku(board));



// function TreeNode(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }

// function arrayToTreeNode(arr) {
//     if (arr.length === 0) return null;

//     let root = new TreeNode(arr[0]);
//     let queue = [root];
//     let i = 1;

//     while (i < arr.length) {
//         let currentNode = queue.shift();

//         if (arr[i] !== null) {
//             currentNode.left = new TreeNode(arr[i]);
//             queue.push(currentNode.left);
//         }
//         i++;

//         if (i < arr.length && arr[i] !== null) {
//             currentNode.right = new TreeNode(arr[i]);
//             queue.push(currentNode.right);
//         }
//         i++;
//     }
//     return root;
// }

// var kthSmallest = function(root, k) {
//     let count = 0;
//     let result = null;

//     const inorderTraverse = (node) => {
//         if (!node || result !== null) return;

//         inorderTraverse(node.left);
//         count++;

//         if (count === k) {
//             result = node.val;
//             return;
//         }
//         inorderTraverse(node.right);
//     }

//     inorderTraverse(root);
//     return result;
// };

// ChatGPT's alternative way to find it with a stack

// var kthSmallest = function(root, k) {
//     let stack = [];
//     let current = root;
//     let count = 0;

//     while (current !== null || stack.length > 0) {
//         while (current !== null) {
//             stack.push(current);
//             current = current.left;
//         }
        
//         current = stack.pop();
//         count++;
        
//         if (count === k) {
//             return current.val;
//         }
        
//         current = current.right;
//     }

//     return null; // In case k is out of range
// };

// // Test Case
// arr = [3,1,4,null,2];
// k = 1;
// let root = arrayToTreeNode(arr);

// console.log(kthSmallest(root, k));





// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// var buildTree = function(preorder, inorder) {
//     if (!preorder.length || !inorder.length) return null;

//     let rootVal = preorder[0];
//     let rootIndex = inorder.indexOf(rootVal);

//     let root = new TreeNode(rootVal);

//     let leftInorder = inorder.slice(0, rootIndex);
//     let rightInorder = inorder.slice(rootIndex + 1);

//     let leftPreorder = preorder.slice(1, 1 + leftInorder.length);
//     let rightPreorder = preorder.slice(1 + leftPreorder.length);

//     root.left = buildTree(leftInorder, leftPreorder);
//     root.right = buildTree(rightInorder, rightPreorder);

//     return root;
// };

// preorder = [3,9,20,15,7]; 
// inorder = [9,3,15,20,7];

// console.log(buildTree(preorder, inorder));




// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }


// var buildTree = function(inorder, postorder) {
//     if (!postorder.length || !inorder.length) return null;

//     let rootVal = postorder.pop();
//     let rootIndex = inorder.indexOf(rootVal);

//     let root = new TreeNode(rootVal);

//     let leftInorder = inorder.slice(0, rootIndex);
//     let rightInorder = inorder.slice(rootIndex + 1);

//     let leftPostorder = postorder.slice(0, leftInorder.length);
//     let rightPostorder = postorder.slice(leftInorder.length);

//     root.left = buildTree(leftInorder, leftPostorder);
//     root.right = buildTree(rightInorder, rightPostorder);

//     return root;
// };

// inorder = [9,3,15,20,7]; 
// postorder = [9,15,7,20,3];

// console.log(buildTree(inorder, postorder));





// var maxProfit = function(prices) {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i + 1] > prices[i]) {
//             maxProfit += prices[i + 1] - prices[i];
//         }
//     }
//     return maxProfit;
// };

// prices = [7,1,5,3,6,4];
// console.log(maxProfit(prices));



// const maxProfit = (prices) => {
//     let maxProfit = 0;
//     let minPrice = Infinity;

//     for (let num of prices) {
//         if (num < minPrice) {
//             minPrice = num;
//         } else if (num - minPrice > maxProfit) {
//             maxProfit = num - minPrice;
//         }
//     }

//     return maxProfit;
// };

// prices = [7,1,5,3,6,4];
// console.log(maxProfit(prices));



// var groupAnagrams = function(strs) {
//     let map = new Map();
//     for (let str of strs) {
//         let sortedStr = str.split('').sort().join('');
//         if (map.has(sortedStr)) {
//             map.get(sortedStr).push(str);
//         } else {
//             map.set(sortedStr, [str]);
//         }
//     }
//     return Array.from(map.values());
// };

// strs = ["eat","tea","tan","ate","nat","bat"];
// console.log(groupAnagrams(strs));







// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// function arrayToLinkedList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }

//     return dummy.next;
// }

// function linkedListToArr(node) {
//     let arr = [];
//     while(node) {
//         arr.push(node.val);
//         node = node.next;
//     }
//     return arr;
// }

// var reverseBetween = function(head, left, right) {
//     if (!head || left === right) return head;

//     let dummy = new ListNode(0);
//     let leftPrev = dummy;
//     dummy.next = head;
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



// // head = [1,2,3,4,5];
// // let linkedList = arrayToLinkedList(head);
// // let result = reverseBetween(linkedList, 2, 4);
// // console.log(linkedListToArr(result));

// head2 = [5];
// let linkedList2 = arrayToLinkedList(head2);
// let result2 = reverseBetween(linkedList2, 1, 1);
// console.log(linkedListToArr(result2));












// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// function arrayToLinkedList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }

//     return dummy.next;
// }

// function linkedListToArr(node) {
//     let arr = [];
//     while(node) {
//         arr.push(node.val);
//         node = node.next;
//     }
//     return arr;
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

// list = [1,2,3,4,5];
// let head = arrayToLinkedList(list);
// k = 2;
// let result = rotateRight(head, k);
// let resultList = linkedListToArr(result);
// console.log(resultList);


// var canJump = function(nums) {
//     let maxReach = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (i > maxReach) return false;
//         maxReach = Math.max(maxReach, nums[i] + i);
//     }

//     return maxReach >= nums.length - 1;
// };

// nums = [2,3,1,1,4];
// nums2 = [3,2,1,0,4]
// console.log(canJump(nums2));







// var jump = function(nums) {
//     let n = nums.length;
//     let maxReach = 0;
//     let currentReach = 0;
//     let jumps = 0;

//     for (let i = 0; i < n; i++) {
//         maxReach = Math.max(maxReach, nums[i] + i);

//         if (i === currentReach) {
//             jumps++;
//             currentReach = maxReach;
//             if (currentReach >= n - 1) break;
//         }
//     }
//     return jumps;
// };

// nums = [2,3,1,1,4];
// console.log(jump(nums));






// var spiralOrder = function(matrix) {
//     let result = [];
//     let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    
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

// matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(spiralOrder(matrix));






// var hIndex = function(citations) {
//     let list = citations.sort((a, b) => a - b);
//     let n = citations.length;
//     for (let i = 0; i < n; i++) {
//         let h = n - i;
//         if (citations[i] >= h) return h;
//     }
//     return 0;
// };

// citations = [3,0,6,1,5];
// console.log(hIndex(citations));





// var isHappy = function(n) {
//     const sumOfSquares = (n) => {
//         let sum = 0;
//         while (n > 0) {
//             let digit = n % 10;
//             sum += digit * digit;
//             n = Math.floor(n / 10);
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


// number = 19;
// console.log(isHappy(number));






// var longestPalindrome = function(s) {
//     let start = 0, end = 0;
//     if (s.length < 1) return '';

//     for (let i = 0; i < s.length; i++) {
//         let len1 = expandAroundCenter(s, i, i + 1);
//         let len2 = expandAroundCenter(s, i, i);
//         let len = Math.max(len1, len2);

//         if (len > end - start) {
//             start = i - Math.floor((len - 1) / 2);
//             end = i + Math.floor(len / 2);
//         }
//     }
//     return s.substring(start, end + 1);
// }

// function expandAroundCenter(s, left, right) {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         left--;
//         right++;
//     }
//     return right - left - 1;
// }

// s = "babad";
// console.log(longestPalindrome(s));






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

//     if (totalGas < totalCost) return -1;

//     return start;
// };

// gas = [1,2,3,4,5]; 
// cost = [3,4,5,1,2];

// console.log(canCompleteCircuit(gas, cost));




// var intToRoman = function(num) {
//     let result = '';
//     let romanMap = [
//         {value: 1000, symbol: 'M'},
//         {value: 900, symbol: 'CM'},
//         {value: 500, symbol: 'D'},
//         {value: 400, symbol: 'CD'},
//         {value: 100, symbol: 'C'},
//         {value: 90, symbol: 'XC'},
//         {value: 50, symbol: 'L'},
//         {value: 40, symbol: 'XL'},
//         {value: 10, symbol: 'X'},
//         {value: 9, symbol: 'IX'},
//         {value: 5, symbol: 'V'},
//         {value: 4, symbol: 'IV'},
//         {value: 1, symbol:'I'}
//     ];

//     for (let i = 0; i < romanMap.length; i++) {
//         const {value, symbol} = romanMap[i];
//         while (num >= value) {
//             result += symbol;
//             num -= value;
//         }
//     }

//     return result;

// };

// let num = 3749;
// console.log(intToRoman(num));




// var removeNthFromEnd = function(head, n) {
//     let len = findLength(head);
//     if (len <= 1 && n === 1) return null;

//     let dummy = new ListNode(0, head);
//     let prev = dummy;
//     let current = head;
//     let steps = 0;
//     let stepsToN = len - n;

//     while (steps < stepsToN) {
//         prev = prev.next;
//         current = current.next;
//         steps++;
//     }

//     let nextNode = current.next;
//     current.next = null;
//     prev.next = nextNode;

//     return dummy.next;
// };

// function findLength(node) {
//     let count = 0;
//     while (node.next) {
//         count++;
//         node = node.next;
//     }
//     return count;
// }





// var threeSum = function(nums) {
//     nums = nums.sort((a, b) => a - b);
//     let result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let left = i + 1, right = nums.length - 1;
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

//     return words.reverse().join(' ');
// };

// // s2 = "the sky is blue";
// s = "a good   example"
// console.log(reverseWords(s));







// var MinStack = function() {
//     this.stack = [];
//     this.minStack = [];
// };

// MinStack.prototype.push = function(val) {
//     this.stack.push(val);
//     if (this.minStack.length === 0 || val < this.minStack[this.minStack.length - 1]) {
//         this.minStack.push(val);
//     } else {
//         this.minStack.push(this.minStack[this.minStack.length - 1]);
//     }
// };

// MinStack.prototype.pop = function() {
//     this.stack.pop();
//     this.minStack.pop();
// };

// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// MinStack.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1];
// };




