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







