// var hasPathSum = function(root, targetSum) {
//     let queue = [{node: root, currentVal: root.val}];

//     while (stack.length > 0) {
//         let {node, currentVal} = queue.shift();

//         if (node.left) queue.push({node: node, currentVal: node.left.val + node.val});
//         if (node.right) queue.push({node: node, currentVal: node.right.val + node.val});
        
//         if (!node.left && !node.right && currentVal === targetSum) return true;
//     }

//     return false;
// };





// var maxDepth = function(root) {
//     if (!root) return 0;
//     let count = 0;
//     let queue = [root];

//     while (queue.length > 0) {
//         count++;
//         for (let i = 0; i < queue.length; i++) {
//             let node = queue.shift();
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//     }
//     return count;
// };



// var maxDepth = function(root) {
//     if (!root) return 0;
    
//     return Math.max(maxDepth(root.left), maxDepth(root.right) + 1);
// }




// var isSameTree = function(p, q) {
//     let left = [p];
//     let right = [q];

//     while (left.length > 0 && right.length > 0) {
//         let leftNode = p.shift();
//         let rightNode = q.shift();

//         if (!leftNode && !rightNode) continue;
//         if (!leftNode || !rightNode) return false;
//         if (leftNode.val !== rightNode.val) return false;

//         left.push(left.left);
//         right.push(right.left);

//         left.push(left.right);
//         right.push(right.right);
//     }

//     return left.length === right.length;
// };



// var isSameTree = function(p, q) {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     if (p.val !== q.val) return false;

//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };





// var invertTree = function(root) {
//     if (!root) return null;

//     let temp = root.left;
//     root.left = root.right;
//     root.right = temp;

//     invertTree(root.left);
//     invertTree(root.right);
//     return root;
// }


// var invertTree = function(root) {
//     if (!root) return null;

//     let queue = [root];

//     while (queue.length > 0) {
//         let node = queue.shift();
//         let temp = node.left;
//         node.left = node.right;
//         node.right = temp;

//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }

//     return root;
// }




// var isSymmetric = function(root) {
//     if (!root) return null;

//     const isMirror = (left, right) => {
//         if (!left && !right) return true;
//         if (!left || !right) return false;
//         if (left.val !== right.val) return false;
//     }

//     let queue = [root.left, root.right];

//     while (queue.length > 0) {
//         let left = queue.shift();
//         let right = queue.shift();
//         isMirror(left, right);

//         queue.push(left.left, right.right);
//         queue.push(left.right, right.left);
//     }
//     return true;
// };


// var isSymmetric = function(root) {
//     if (!root) return null;

//     const isMirror = (left, right) => {
//         if (!left && !right) return true;
//         if (!left || !right) return false;
//         if (left.val !== right.val) return false;

//         return isMirror(left.left, right.right) && isMirror(left.right, right.left);
//     }

//     return isMirror(root.left, root.right);

// }





// var connect = function(root) {
//     if (!root) return null;

//     let queue = [root];
//     let prev = null;

//     while (queue.length > 0) {
//         for (let i = 0; i < queue.length; i++) {
//             let node = queue.shift();

//             if (prev) {
//                 prev.next = node;
//             }
//             prev = node;

//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         prev.next = null;
//     }
// };


// var connect = function(root) {
//     if (!root) return;

//     const connectNodes = (node) => {
//         if (!node) return;
//         if (node.left) {
//             node.left.next = node.right;
//         }
//         if (node.right && node.next) {
//             node.right.next = node.next.left;
//         }

//         connectNodes(node.right);
//         connectNodes(node.left);
//     }

//     connectNodes(root);
//     return root;
// }





// var flatten = function(root) {
//     if (!root) return null;

//     let stack = [root];
//     let prev = null;
//     while (stack.length > 0) {
//         let node = stack.pop();
//         if (prev) {
//             prev.left = null;
//             prev.right = node;
//         }
//         prev = node;

//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }
// };



// var flatten = function(root) {
//     if (!root) return;

//     flatten(root.left);
//     flatten(root.right);

//     let rightSubtree = root.right;
//     root.right = root.left;
//     root.left = null;

//     let current = root;
//     while (current.right) {
//         current = current.right;
//     }

//     current.right = rightSubtree;
// }





// var sumNumbers = function(root) {
//     if (!root) return null;

//     let stack = [{node: root, val: 0}];

//     let sum = 0;

//     while (stack.length > 0) {
//         let {node, val} = stack.pop();

//         let currentVal = val * 10 + node.val;

//         if (!node.left && !node.right) sum += currentVal;

//         if (node.left) stack.push({node: node.left, val: currentVal});
//         if (node.right) stack.push({node: node.right, val: currentVal});
//     }

//     return sum;

// };



// var sumNumbers = function(root) {
//     if (!root) return null;

//     const dfs = (node, currentVal) => {
//         if (!node) return 0;

//         currentVal = currentVal * 10 + node.val;

//         if (!node.left && !node.right) {
//             return currentVal;
//         }

//         return dfs(root.left, currentVal) + dfs(root.right, currentVal);
//     }

//     return dfs(root, 0);

// };





// var BSTIterator = function(root) {
//     this.stack = [];
//     this._leftinorder(root);
// };

// BSTIterator.prototype._leftinorder = function(node) {
//     while (node) {
//         this.stack.push(node);
//         node = node.left;
//     }
// };

// BSTIterator.prototype.next = function() {
//     let topMostNode = this.stack.pop();
//     if (topMostNode.right) {
//         this._leftinorder(topMostNode.right);
//     }
//     return topMostNode.val;
// };

// BSTIterator.prototype.hasNext = function() {
//     return this.stack.length > 0;
// };





// var kthSmallest = function(root, k) {
//     if (!root) return null;
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
//     }

//     inorder(root);

//     return result;
// };






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
// }




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
//     let result = "";
//     for (let i = 0; i < romanMap.length; i++) {
//         let {val, symbol} = romanMap(i);
//         while (num >= val) {
//             result += symbol;
//             num = num - val;
//         }
//     }
//     return result;
// };



// var threeSum = function(nums) {
//     nums = nums.sort((a, b) => a - b);
//     let result = [];
//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
    
//                 while(left < right && nums[left] === nums[left + 1]) left++;
//                 while(left < right && nums[right] === nums[right - 1]) right--;
    
//                 left++;
//                 right--;
//             } else if (sum > 0) {
//                 right--;
//             } else {
//                 left++;
//             }
//         }
//     }
//     return result;
// };

// nums = [-1,0,1,2,-1,-4]; // [[-1,-1,2],[-1,0,1]]
// nums2 = [0,1,1] // [0,1,1]
// nums3 = [0,0,0] // [[0,0,0]]
// console.log(threeSum(nums));





// var reverseWords = function(s) {
//     let words = s.trim().split(" ");
//     words = words.filter(word => word.length > 0);
//     return words.reverse();
// };

// let s = "the sky is blue";
// let s2 = "  hello world  ";
// let s3 = "a good   example";
// console.log(reverseWords(s3));




// var MinStack = function() {
//     this.stack = [];
//     this.minStack = [];
// };

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
// };

// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// MinStack.prototype.getMin = function() {
//     return this.minStack[0];
// };







// var rotate = function(matrix) {
//     let m = matrix.length;

//     for (let i = 0; i < m; i++) {
//         for (let j = i + 1; j < m; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }

//     for (let r = 0; r < m; r++) {
//         matrix[r].reverse();
//     }
// };

// let matrix = [[1,2,3],[4,5,6],[7,8,9]]; // [[7,4,1],[8,5,2],[9,6,3]]
// rotate(matrix);
// console.log(matrix);





// var setZeroes = function(matrix) {
//     let m = matrix.length;
//     let n = matrix[0].length;
//     let firstColumnHasZero = false;
//     let firstRowHasZero = false;

//     for (let r = 0; r < m; r++) {
//         let cell = matrix[r][0];
//         if (cell === 0) {
//             firstColumnHasZero = true;
//             break;
//         }
//     }
//     for (let c = 0; c < n; c++) {
//         let cell = matrix[0][c];
//         if (cell === 0) {
//             firstRowHasZero = true;
//             break;
//         }
//     }

//     for (let r = 1; r < m; r++) {
//         for (let c = 1; c < n; c++) {
//             let cell = matrix[r][c];
//             if (cell === 0) {
//                 matrix[r][0] = 0;
//                 matrix[0][c] = 0;
//             }
//         }
//     }

//     for (let r = 1; r < m; r++) {
//         for (let c = 1; c < n; c++) {
//             if (matrix[r][0] === 0 || matrix[0][c] === 0) {
//                 matrix[r][c] = 0;
//             }
//         }
//     }

//     if (firstColumnHasZero) {
//         for (let r = 0; r < m; r++) {
//             matrix[r][0] = 0;
//         }
//     }

//     if (firstRowHasZero) {
//         for (let c = 0; c < n; c++) {
//             matrix[0][c] = 0;
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
//     if (!this.map.has(val)) {
//         this.map.set(val, this.list.length);
//         this.list.push(val);
//         return true;
//     } else {
//         return false;
//     }
// };

// RandomizedSet.prototype.remove = function(val) {
//     if (this.map.has(val)) {
//         let index = this.map.get(val);
//         let lastElement = this.list[this.list.length - 1];
//         this.map.set(lastElement, index);
//         this.list[index] = lastElement;
//         this.list.pop();
//         this.map.delete(val);
//         return true;
//     } else {
//         return false;
//     }
// };

// RandomizedSet.prototype.getRandom = function() {
//     let random = Math.floor(Math.random() * this.list.length);
//     return this.list[random];
// }






// var productExceptSelf = function(nums) {
//     let left = new Array(nums.length).fill(1);
//     let right = new Array(nums.length).fill(1);
//     let result = new Array(nums.length);

//     for (let i = 1; i < nums.length; i++) {
//         left[i] = nums[i - 1] * left[i - 1];
//     }

//     for (let i = nums.length - 2; i >= 0; i--) {
//         right[i] = nums[i + 1] * right[i + 1];
//     }

//     for (let i = 0; i < nums.length; i++) {
//         result[i] = left[i] * right[i];
//     }
//     return result;
// };






// var convert = function(s, numRows) {
//     let goingDown = false;
//     let rows = new Array(numRows).fill("");
//     let currentRow = 0;

//     for (let c of s) {
//         rows[currentRow] += c;
//         if (currentRow === 0 || currentRow === numRows) {
//             goingDown = !goingDown;
//         }
//         currentRow += (goingDown) ? 1 : -1;
//     }

//     return rows.join("");
// };






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
//     let index = haystack.indexOf(needle);
//     return index;
// };

// var strStr = function(haystack, needle) {
//     let m = haystack.length;
//     let n = needle.length;

//     if (n === 0 || m === 0) return null;

//     for (let i = 0; i < m; i++) {
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
//         let area = Math.min(height[left], height[right]) * width;
//         maxArea = Math.max(area, maxArea);

//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxArea;
// };

// height = [1,8,6,2,5,4,8,3,7] // Expected: 49
// height2 = [1,1] // Expected 1

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
//             switch (token) {
//                 case "+":
//                     result = a + b;
//                     stack.push(result);
//                     break;
//                 case "-":
//                     result = a - b;
//                     stack.push(result);
//                     break;
//                 case "*":
//                     result = a * b;
//                     stack.push(result);
//                     break;
//                 case "/":
//                     result = a / b;
//                     stack.push(result);
//                     break;
//                 default:
//                     throw new Error('Invalid operator');
//             }
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
//         if (slow.val === fast.val) return true;
//     }

//     return false;

// };





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



// var candy = function(ratings) {
//     let shares = new Array(ratings.length).fill(1);
//     for (let i = 1; i < ratings.length; i++) {
//         if (ratings[i] > ratings[i - 1]) {
//             shares[i] = shares[i - 1] + 1;
//         }
//     }

//     for (let j = ratings.length - 2; j >= 0; j--) {
//         if (ratings[j] > ratings[j + 1]) {
//             shares[j] = Math.max(shares[j], shares[j + 1] + 1);
//         }
//     }

//     let total = shares.reduce((sum, val) => sum + val, 0);

//     return total;
// };









// var summaryRanges = function(nums) {
//     let n = nums.length;
//     if (n === 0) return [];

//     let result = [];
//     let start = nums[0];

//     for(let i = 1; i < n; i++) {
//         if (nums[i] !== nums[i - 1] + 1) {
//             if (start === nums[i - 1]) {
//                 result.push(`${start}`)
//             } else {
//                 result.push(`${start} -> ${nums[i - 1]}`);
//             }
//             start = nums[i];
//         }
//     }

//     if (start === nums[n - 1]) {
//         result.push(`${start}`);
//     } else {
//         result.push(`${start} -> ${nums[n - 1]}`);
//     }

//     return result;
// };




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
//     while (node !== null) {
//         arr.push(node.val);
//         node = node.next;
//     }
//     console.log(arr);
// }

// let ex = [1,2,3,3,4,4,5]; // [1,2,5]
// let ex2 = [1,1,1,2,3]; // [2,3]
// let head = arrayToList(ex2); 
// listToArray(deleteDuplicates(head));




var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let result = [];
    let rangeStart = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (rangeStart[1] >= intervals[i][0]) {
            rangeStart[1] = Math.max(rangeStart[1], intervals[i][1]);
        } else {
            result.push(rangeStart);
            rangeStart = intervals[i];
        }
    }
    result.push(rangeStart);
    return result;
};


intervals = [[1,3],[2,6],[8,10],[15,18]]; // Expected: [[1,6],[8,10],[15,18]]
intervals2 = [[1,4],[4,5]]; // Expected: [[1,5]]
console.log(merge(intervals2));
