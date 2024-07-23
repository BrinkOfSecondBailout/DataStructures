// var canCompleteCircuit = function(gas, cost) {
//     let totalGas = 0, totalCost = 0, tank = 0, start = 0;

//     let n = gas.length;

//     for (let i = 0; i < n; i++) {
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





// var intToRoman = function(nums) {
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
//     ];

//     let result = '';
    
//     for (let i = 0; i < romanMap.length; i++) {
//         const {value, symbol} = romanMap[i];

//         while (nums >= value) {
//             result += symbol;
//             nums -= value;
//         }
//     }

//     return result;
// };


// console.log(intToRoman(3));    // Output: "III"
// console.log(intToRoman(4));    // Output: "IV"
// console.log(intToRoman(9));    // Output: "IX"
// console.log(intToRoman(58));   // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"



// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }


// var removeNthFromEnd = function(head, n) {
//     let length = findLength(head);
//     if (length <= 1 && n === 1) return null
//     let steps = 0;
//     let stepsToN = length - n;

//     let dummy = new ListNode(0, head);
//     let prev = dummy;
//     let current = head;

//     while (steps < stepsToN) {
//         prev = current;
//         current = current.next;
//         steps++;
//     }

//     prev.next = current.next;

//     return dummy.next;
// };

// function findLength(node) {
//     let count = 1;
//     while (node.next) {
//         node = node.next;
//         count++;
//     }
//     return count;
// }

// function arrayToLinkedList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy.next;

//     while (current !== null) {
//         for (let val of arr) {
//             current.val = val;
//             current = current.next;
//         }
//     }

//     return dummy.next;
// }

// function showResult(node) {
//     let result = '';

//     while (node !== null) {
//         result += node.val;
//         result += '->';
//         node = node.next;
//     }

//     return result;
// }

// let arr = [1, 2, 3, 4, 5];
// let n = 2;
// let list = arrayToLinkedList(arr);
// let result = removeNthFromEnd(list, n);
// console.log(showResult(result));






// var threeSum = function(nums) {
//     nums = nums.sort((a, b) => a - b);
//     let n = nums.length

//     let result = [];

//     for (let i = 0; i < n; i++){

//         let left = i + 1;
//         let right = n - 1;
//         let sum = nums[i] + nums[left] + nums[right];
//         while (left < right) {
//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
    
//                 while (nums[left] === nums[left + 1]) left++;
//                 while (nums[right] === nums[right - 1]) right--;
    
//                 left++;
//                 right--;
//             } else if (sum > 0 ) {
//                 right--;
//             } else {
//                 left++;
//             }
//         }
//     }

//     return result;

// };

// nums = [-1,0,1,2,-1,-4];
// nums2 = [0,1,1]
// nums3 = [0,0,0]
// console.log(threeSum(nums3));


// var reverseWords = function(s) {
//     let words = s.trim().split(" ");
    
//     words = words.filter(word => word.length > 0);

//     return words.reverse().join(" ");
    
// };

// let s = "the sky is blue";
// let s2 = "  hello world  ";
// let s3 = "a good   example";
// console.log(reverseWords(s3));



// var MinStack = function() {
//     this.stack = [];
//     this.minStack = [];
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//     this.stack.push(val);
//     if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//         this.minStack.push(val);
//     } else {
//         this.minStack.push(this.minStack[this.minStack.length - 1]);
//     }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     this.stack.pop();
//     this.minStack.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1];
// };




// var rotate = function(matrix) {
//     let m = matrix.length;
//     let n = matrix[0].length;

//     // Transpose
//     for (let r = 0; r < m; r++) {
//         for (let c = r + 1; c < n; c++) {
//             [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
//         }
//     }

//     // Reverse
//     for (let r = 0; r < m; r++) {
//         matrix[r].reverse();
//     }
// };

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// rotate(matrix);
// console.log(matrix);













// function Node(val, next = null, random = null) {
//     this.val = val;
//     this.next = next;
//     this.random = random;
// }


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


// let head = createList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
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
//     let current = head;

//     while (current && current.next) {
//         if (current.val === current.next.val) {
//             while (current.val === current.next.val) {
//                 current = current.next;
//             }
//             current = current.next;
//             prev.next = current;
//         } else {
//             prev = prev.next;
//             current = current.next;
//         }
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
//     while (node) {
//         arr.push(node.val);
//         node = node.next;
//     }

//     console.log(arr);
    
// }

// let ex = [1,2,3,3,4,4,5];
// let ex2 = [1,1,1,2,3];
// let head = arrayToList(ex2);
// listToArray(deleteDuplicates(head));








// var setZeroes = function(matrix) {
//     let m = matrix.length;
//     let n = matrix[0].length;
//     let firstRowHasZero = false;
//     let firstColumnHasZero = false;
    
//     for (let c = 0; c < n; c++) {
//         if (matrix[0][c] === 0) {
//             firstRowHasZero = true;
//             break;
//         }
//     }

//     for (let r = 0; r < m; r++) {
//         if (matrix[r][0] === 0) {
//             firstColumnHasZero = true;
//             break;
//         }
//     }

//     for (let r = 1; r < m; r++) {
//         for (let c = 1; c < n; c++) {
//             if (matrix[r][c] === 0) {
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

//     if (firstRowHasZero) {
//         for (let c = 0; c < n; c++) {
//             matrix[0][c] = 0;
//         }
//     }

//     if (firstColumnHasZero) {
//         for (let r = 0; r < m; r++) {
//             matrix[r][0] = 0;
//         }
//     }
// };


// matrix = [[1,1,1],[1,0,1],[1,1,1]]
// matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// setZeroes(matrix2);
// console.log(matrix2);





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
//         this.list[index] = lastElement;
//         this.map.set(lastElement, index);
//         this.map.delete(val);
//         this.list.pop();
//         return true;
//     } else {
//         return false;
//     }
// };

// RandomizedSet.prototype.getRandom = function() {
//     return this.list[Math.floor(Math.random() * this.list.length)];
// };




// var productExceptSelf = function(nums) {
//     let n = nums.length;
//     let left = new Array(n).fill(1);
//     let right = new Array(n).fill(1);
//     let result = new Array(n);

//     for (let i = 1; i < n; i++) {
//         left[i] = left[i - 1] * nums[i - 1];
//     }

//     for (let j = nums.length - 2; j >= 0; j--) {
//         right[j] = right[j + 1] * nums[j + 1];
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

//     let rows = new Array(Math.min(numRows, s.length)).fill('');
//     let goingDown = false;
//     let currentRow = 0;

//     for (let c of s) {
//         if (currentRow === 0 || currentRow === numRows - 1) {
//             goingDown = !goingDown
//         }
//         rows[currentRow] += c;
//         currentRow += (goingDown) ? 1 : -1;
//     }

//     return rows.join("");
// };


// let s = "PAYPALISHIRING";
// let numRows = 3;
// console.log(convert(s, numRows)); // Expected output: "PAHNAPLSIIGYIR"












// var gameOfLife = function(board) {
//     let m = board.length;
//     let n = board[0].length;

//     const countLiveNeighbors = (r, c) => {
//         let count = 0;
//         for (let i = -1; i <= 1; i++) {
//             for (let j = -1; j <= 1; j++) {
//                 if (i === 0 && j === 0) continue;
//                 let nr = r + i;
//                 let nc = c + j;
//                 if (nr >= 0 && nr < m && nc >= 0 && nc < n && (board[nr][nc] === 1 || board[nr][nc] === -1)) {
//                     count++;
//                 }
//             }
//         }
//         return count;
//     }

//     for (let r = 0; r < m; r++) {
//         for (let c = 0; c < n; c++) {
//             let liveNeighbors = countLiveNeighbors(r, c);

//             if (board[r][c] === 1) {
//                 if (liveNeighbors < 2 || liveNeighbors > 3) {
//                     board[r][c] = -1;
//                 }
//             } else {
//                 if (liveNeighbors === 3) {
//                     board[r][c] = 2;
//                 }
//             }
//         }
//     }

//     for (let r = 0; r < m; r++) {
//         for (let c = 0; c < n; c++) {
//             if (board[r][c] === -1) {
//                 board[r][c] = 0;
//             } else if (board[r][c] === 2) {
//                 board[r][c] = 1;
//             }
//         }
//     }
// };


// board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]; // Expected: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
// board2 = [[1,1],[1,0]];

// gameOfLife(board);
// console.log(board);






