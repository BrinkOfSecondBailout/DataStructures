
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



function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function arrayToTreeNode(arr) {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }
    return root;
}

var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;

    const inorderTraverse = (node) => {
        if (!node || result !== null) return;

        inorderTraverse(node.left);
        count++;

        if (count === k) {
            result = node.val;
            return;
        }
        inorderTraverse(node.right);
    }

    inorderTraverse(root);
    return result;
};

// Test Case
arr = [3,1,4,null,2];
k = 1;
let root = arrayToTreeNode(arr);

console.log(kthSmallest(root, k));

