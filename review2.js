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

function arrayToLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy.next;

    while (current !== null) {
        for (let val of arr) {
            current.val = val;
            current = current.next;
        }
    }

    return dummy.next;
}

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


function printList(head) {
    let current = head;
    let result = '';
    while (current) {
        const randomVal = current.random ? current.random.val : 'null';
        result += `[${current.val}, ${randomVal}]`;
        current = current.next;
        if (current) {
            result += ' -> ';
        }
    }
    console.log(result);
}


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

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

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





// var twoSum = function(nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let difference = target - nums[i];
//         if (map.has(difference)) {
//             return [map.get(difference), i];
//         } else {
//             map.set(nums[i], i);
//         }
//     }
//     return false;
// };

// nums = [2,7,11,15]; 
// target = 9; // Expected: [0,1]
// nums2 = [3,2,4]; 
// target2 = 6; // Expected: [1,2]
// console.log(twoSum(nums, target));




// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// var addTwoNumbers = function(l1, l2) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     let p = l1;
//     let q = l2;
//     let carry = 0;

//     while (p || q) {
//         let x = (p.val) ? p.val : 0;
//         let y = (q.val) ? q.val : 0;
//         let sum = carry + x + y;

//         let next = new ListNode(Math.floor(sum % 10));
//         carry = Math.floor(sum / 10);
//         current.next = next;

//         current = current.next;
//         p = p.next;
//         q = q.next;
//     }

//     return dummy.next;
// };

// let l1 = arrayToList([2,4,3]); 
// let l2 = arrayToList([5,6,4]);

// let l3 = addTwoNumbers(l1, l2);
// printList(l3);





// var lengthOfLongestSubstring = function(s) {
//     let left = 0;
//     let right = 0;
//     let currentMax = 0;
//     let set = new Set();

//     while (right < s.length) {
//         if (!set.has(s[right])) {
//             set.add(s[right]);
//             currentMax = Math.max(currentMax, right - left + 1);
//             right++;
//         } else {
//             set.delete(s[left]);
//             left++;
//         }
//     }
//     return currentMax;
// };

// let s = "abcabcbb"; // Expected: 3
// let s2 = "bbbbb"; // Expected: 1
// let s3 = "pwwkew" // Expected: 3
// console.log(lengthOfLongestSubstring(s));





// var rotate = function(nums, k) {
//     const reverse = (nums, left, right) => {
//         while (left < right) {
//             let temp = nums[left];
//             nums[left] = nums[right];
//             nums[right] = temp;
//             left++;
//             right--;
//         }
//         return nums;
//     }

//     nums = reverse(nums, 0, nums.length - 1);
//     nums = reverse(nums, 0, k - 1);
//     nums = reverse(nums, k, nums.length - 1);

//     return nums;
// };

// let nums = [1,2,3,4,5,6,7];
// let k = 3; // Expected: [5,6,7,1,2,3,4]
// console.log(rotate(nums, k));






// var twoSum = function(numbers, target) {
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left < right) {
//         if (numbers[left] + numbers[right] === target) {
//             return [left + 1, right + 1];
//         } else if (numbers[left] + numbers[right] > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
//     return false;
// };

// numbers = [2,7,11,15];
// target = 9; // Expected: [1,2]

// numbers2 = [2,3,4];
// target2 = 6; // Expected: [1, 3]

// console.log(twoSum(numbers, target));




// var longestConsecutive = function(nums) {
//     if (nums.length < 1) return 0;
//     let set = new Set(nums);
//     let maxCount = 1;

//     for (let val of nums) {
//         if (!set.has(val - 1)) {
//             let currentVal = val;
//             let count = 1;

//             while (set.has(currentVal + 1)) {
//                 currentVal += 1;
//                 count += 1;
//             }

//             maxCount = Math.max(maxCount, count);
//         }
        
//     }

//     return maxCount;
// };

// let nums = [100,4,200,1,3,2] // Expected: 4
// let nums2 = [0,3,7,2,5,8,4,6,0,1] // Expected: 9
// console.log(longestConsecutive(nums));





// var simplifyPath = function(path) {
//     let stack = [];

//     let words = path.split("/");

//     for (let val of words) {
//         if (val === "" || val === ".") {
//             continue;
//         } else if (val === "..") {
//             if (stack.length > 0) stack.pop();
//         } else {
//             stack.push(val);
//         }
//     }
    
//     return '/' + stack.join('/');
// }

// path = "/home/"; // Expected: "/home"
// path2 = "/home//foo/" // Expected: "/home/foo"
// console.log(simplifyPath(path2));






var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let columns = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let cellValue = board[r][c];
            if (cellValue === ".") continue;

            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].has(cellValue)) return false;
            if (columns[c].has(cellValue)) return false;
            if (boxes[boxIndex].has(cellValue)) return false;

            rows[r].add(cellValue);
            columns[c].add(cellValue);
            boxes[boxIndex].add(cellValue);
        }
    }

    return true;
};


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

// // Expected: true;

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

// // Expected: false;

// console.log(isValidSudoku(board2));







// var maxProfit = function(prices) {
//     let profit = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < prices[i + 1]) {
//             profit += prices[i + 1] - prices[i];
//         }
//     }

//     return profit;
// };

// prices = [7,1,5,3,6,4] // Expected: 7
// prices2 = [1,2,3,4,5] // Expected: 4
// console.log(maxProfit(prices2));





// const maxProfit = (prices) => {
//     let min = Infinity;
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < min) {
//             min = prices[i];
//         } else if (prices[i] - min > maxProfit) {
//             maxProfit = prices[i] - min;
//         }
//     }

//     return maxProfit;
// };


// prices = [7,1,5,3,6,4] // Expected: 5
// prices2 = [7,6,4,3,1] // Expected: 0

// console.log(maxProfit(prices));





// var groupAnagrams = function(strs) {
//     let map = new Map();

//     for (let str of strs) {
//         sortedString = str.split('').sort().join('');
//         if (!map.has(sortedString)) {
//             map.set(sortedString, [])
//         }
//         map.get(sortedString).push(str);
//     }

//     return Array.from(map.values());
    
// };

// strs = ["eat","tea","tan","ate","nat","bat"]; // Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
// strs2 = ["a"]; // Expected: [["a"]]
// console.log(groupAnagrams(strs));




function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


// var reverseBetween = function(head, left, right) {
//     let count = 1;

//     let dummy = new ListNode(0, head);

//     let prev = dummy;
//     let current = head;

//     while (count < left) {
//         prev = prev.next;
//         current = current.next;
//         count++;
//     }

//     let leftNode = prev;
//     let lastNode = current;
//     prev = null;

//     while (count <= right) {
//         let nextNode = current.next;
//         current.next = prev;
        
//         prev = current;
//         current = nextNode;
//         count++;
//     }

//     leftNode.next = prev;
//     lastNode.next = current;

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

function listToArray(head) {
    let array = [];
    let current = head;
    while (current) {
        array.push(current.val);
        current = current.next;
    }
    return array;
}


// let head = arrayToList([1,2,3,4,5]);
// let left = 2;
// let right = 4; // Expected: [1,4,3,2,5]

// console.log(listToArray(reverseBetween(head, left, right)));







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

// head = arrayToList([1,2,3,4,5]);
// k = 2; // Expected: [4,5,1,2,3]
// head2 =arrayToList([0,1,2]);
// k2 = 4 // Expected: [2, 0, 1]
// printList(rotateRight(head2, k2));




// var canJump = function(nums) {
//     let maxReach = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (i > maxReach) {
//             return false;
//         }
//         maxReach = Math.max(maxReach, nums[i] + i);
//     }

//     return maxReach >= nums.length;
// };

// nums = [2,3,1,1,4]; // Expected: true
// nums2 = [3, 2, 1, 0, 4]; // Expected: false
// console.log(canJump(nums));








// var jump = function(nums) {
//     let n = nums.length;
//     if (n <= 1) return 0;

//     let jumps = 0;
//     let currentEnd = 0;
//     let maxReach = 0;

//     for (let i = 0; i < n - 1; i++) {
//         maxReach = Math.max(nums[i] + i, maxReach);

//         if (i === currentEnd) {
//             jumps++;
//             currentEnd = maxReach;
//             if (currentEnd >= n - 1) break;
//         }
//     }

//     return jumps;
// };

// nums = [2,3,1,1,4]; // 2
// nums2 = [2,3,0,1,4] // 2
// console.log(jump(nums2));







// var spiralOrder = function(matrix) {
//     let top = 0;
//     let right = matrix[0].length - 1;
//     let left = 0;
//     let bottom = matrix.length - 1;
//     let result = [];

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

// matrix = [[1,2,3],[4,5,6],[7,8,9]]; // [1,2,3,6,9,8,7,4,5]

// matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] // [1,2,3,4,8,12,11,10,9,5,6,7]

// console.log(spiralOrder(matrix2));







var hIndex = function(citations) {
    citations = citations.sort((a, b) => a - b);
    console.log(citations);
    
};

citations = [3,0,6,1,5]; // 3
citations2 = [1,3,1] // 1
console.log(hIndex(citations));
