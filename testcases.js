// Two Sum

// nums = [2,7,11,15]; 
// target = 9; // Expected: [0,1]
// nums2 = [3,2,4]; 
// target2 = 6; // Expected: [1,2]
// console.log(twoSum(nums, target));


////////////////////////////////

// Add Two Numbers

// let l1 = arrayToList([2,4,3]); 
// let l2 = arrayToList([5,6,4]);

// let l3 = addTwoNumbers(l1, l2);
// printList(l3);


/////////////////////////////

// Longest SubString without Repeating Characters

// let s = "abcabcbb"; // Expected: 3
// let s2 = "bbbbb"; // Expected: 1
// let s3 = "pwwkew" // Expected: 3
// console.log(lengthOfLongestSubstring(s));

/////////////////////////

// Rotate Array
// let nums = [1,2,3,4,5,6,7];
// let k = 3; // Expected: [5,6,7,1,2,3,4]
// console.log(rotate(nums, k));

/////////////////////////

// Two Sum II


// numbers = [2,7,11,15];
// target = 9; // Expected: [1,2]

// numbers2 = [2,3,4];
// target2 = 6; // Expected: [1, 3]

// console.log(twoSum(numbers2, target2));

/////////////////////////

// Longest Consecutive Sequence

// let nums = [100,4,200,1,3,2] // Expected: 4
// let nums2 = [0,3,7,2,5,8,4,6,0,1] // Expected: 9
// console.log(longestConsecutive(nums2));


/////////////////////////////

// Simplify Path

// path = "/home/"; // Expected: "/home"
// path2 = "/home//foo/" // Expected: "/home/foo"
// console.log(simplifyPath(path2));

///////////////////////////////

// Valid Sudoku


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


/////////////////////////////////////

// Best Time to Buy and Sell Stock II

// prices = [7,1,5,3,6,4] // Expected: 7
// prices2 = [1,2,3,4,5] // Expected: 4
// console.log(maxProfit(prices2));


///////////////////////////////////////

// Best Time to Buy Sell Stock

// prices = [7,1,5,3,6,4] // Expected: 5
// prices2 = [7,6,4,3,1] // Expected: 0

// console.log(maxProfit(prices));

/////////////////////////////////////

// Group Anagrams

// strs = ["eat","tea","tan","ate","nat","bat"]; // Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
// strs2 = ["a"]; // Expected: [["a"]]
// console.log(groupAnagrams(strs));


///////////////////////////////

// Reverse Linked List II

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


// let head = arrayToList([1,2,3,4,5]);
// let left = 2;
// let right = 4; // Expected: [1,4,3,2,5]

// console.log(listToArray(reverseBetween(head, left, right)));


////////////////////////////

// Rotate List

// head = arrayToList([1,2,3,4,5]);
// k = 2; // Expected: [4,5,1,2,3]
// head2 =arrayToList([0,1,2]);
// k2 = 4 // Expected: [2, 0, 1]
// printList(rotateRight(head2, k2));


///////////////////////////

// Jump Game

// nums = [2,3,1,1,4]; // Expected: true
// nums2 = [3, 2, 1, 0, 4]; // Expected: false
// console.log(canJump(nums));

//////////////////////////

// Jump Game II

// nums = [2,3,1,1,4]; // 2
// nums2 = [2,3,0,1,4] // 2
// console.log(jump(nums2));


///////////////////////

// Spiral Matrix

// matrix = [[1,2,3],[4,5,6],[7,8,9]]; // [1,2,3,6,9,8,7,4,5]

// matrix2 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] // [1,2,3,4,8,12,11,10,9,5,6,7]

// console.log(spiralOrder(matrix2));

////////////////////////

// H Index

// citations = [3,0,6,1,5]; // 3
// citations2 = [1,3,1] // 1
// console.log(hIndex(citations2));

////////////////////////
// Is Happy

// n = 19; // True
// n2 = 2; // False
// console.log(isHappy(n2));


















// Gas Station

// gas = [1,2,3,4,5]; 
// cost = [3,4,5,1,2];

// console.log(canCompleteCircuit(gas, cost));




///////////////////////



// Integers to Romans

// console.log(intToRoman(3));    // Output: "III"
// console.log(intToRoman(4));    // Output: "IV"
// console.log(intToRoman(9));    // Output: "IX"
// console.log(intToRoman(58));   // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"


///////////////////////



// Remove Nth Node From End of List

// let arr = [1, 2, 3, 4, 5];
// let n = 2;
// let list = arrayToLinkedList(arr);
// let result = removeNthFromEnd(list, n);
// let showResult = linkedListToArr(result);
// console.log(showResult);



///////////////////////


// Three Sum

// nums = [-1,0,1,2,-1,-4]; // [[-1,-1,2],[-1,0,1]]
// nums2 = [0,1,1] // [0,1,1]
// nums3 = [0,0,0] // [[0,0,0]]
// console.log(threeSum(nums));



///////////////////////



// Reverse Words in String

// let s = "the sky is blue";
// let s2 = "  hello world  ";
// let s3 = "a good   example";
// console.log(reverseWords(s3));



///////////////////////

// Rotate Image

// let matrix = [[1,2,3],[4,5,6],[7,8,9]]; // [[7,4,1],[8,5,2],[9,6,3]]
// rotate(matrix);
// console.log(matrix);



////////////////////////

// Copy List with Random Pointer 

// const head = createList([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]);
// // printList(head); // Original list
// const copiedHead = copyRandomList(head);
// printList(copiedHead);





////////////////////////


// Remove Duplicates from Sorted Lists II

// let ex = [1,2,3,3,4,4,5]; // [1,2,5]
// let ex2 = [1,1,1,2,3]; // [2,3]
// let head = arrayToList(ex); 
// listToArray(deleteDuplicates(head));



////////////////////////


// Set Matrix Zeroes

// matrix = [[1,1,1],[1,0,1],[1,1,1]]
// matrix2 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// setZeroes(matrix2);
// console.log(matrix2);


///////////////////////////

// Insert Delete Get Random

// let set = new RandomizedSet();
// set.insert(0);
// set.insert(1);
// set.remove(0);
// set.insert(2);
// set.remove(1);
// console.log(set.getRandom());


/////////////////////////////

// Product of Array Except Self

// nums = [1,2,3,4];
// console.log(productExceptSelf(nums));


//////////////////////////


/// ZIG ZAG CONVERSION

// let s = "PAYPALISHIRING";
// let numRows = 3;
// console.log(convert(s, numRows)); // Expected output: "PAHNAPLSIIGYIR"


//////////////////////

// Game Of Life

// board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];

// gameOfLife(board);
// console.log(board);



/////////////////////////


// Length of Last Word

// s = "Hello World" // Expected: 5
// s2 = "   fly me   to   the moon  " // Expected: 4
// s3 = "luffy is still joyboy" // Expected: 6
// console.log(lengthOfLastWord(s3)); 



///////////////////////

// Find Index of First Occurence

// haystack = "sadbutsad";
// needle = "sad"; // Expected: 0
// haystack2 = "leetcode";
// needle2 = "leeto"; // Expceted: -1
// haystack3 = "hello";
// needle3 = "ll"; // Expceted: 2
// console.log(strStr(haystack3, needle3));


/////////////////////////

// Containers with Most Water

// height = [1,8,6,2,5,4,8,3,7] // Expected: 49
// height = [1,1] // Expected 1

// console.log(maxArea(height));



///////////////////////

// Evaluate Reverse Polish Notation 

// tokens = ["2","1","+","3","*"]; // Expected: 9
// tokens2 = ["4","13","5","/","+"] // Expected: 6
// tokens3 = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"] // Expected: 22

// console.log(evalRPN(tokens3));


////////////////////////

// Linked List Cycle 


// head = [3,2,0,-4]; // Expected: true
// pos = 1;
// console.log(hasCycle(headList));



/////////////////////////////

// Merge Sorted Linked Lists

// list1 = [1,2,4];
// list2 = [1,3,4]; // Expected: [1,1,2,3,4,4]

// let list1real = arrayToList(list1);
// let list2real = arrayToList(list2);

// let head = mergeTwoLists(list1real, list2real);
// printList(head);



////////////////////////////

// Candy

// ratings = [1,0,2]; // Expected: 5
// ratings2 = [1,2,2]; // Expected: 4

// console.log(candy(ratings2));


/////////////////////////

// Summary Ranges

// nums = [0,1,2,4,5,7]; // Expected: ["0->2","4->5","7"]

// nums2 = [0,2,3,4,6,8,9]; // Expected: ["0","2->4","6","8->9"]

// console.log(summaryRanges(nums));

////////////////////////


// Merge intervals

// intervals = [[1,3],[2,6],[8,10],[15,18]]; // Expected: [[1,6],[8,10],[15,18]]
// intervals2 = [[1,4],[4,5]]; // Expected: [[1,5]]
// console.log(merge(intervals));

///////////////////////////


// Insert Intervals

// intervals = [[1,3],[6,9]];
// newInterval = [2,5]; // Expected: [[1,5],[6,9]]

// intervals2 = [[1,2],[3,5],[6,7],[8,10],[12,16]];
// newInterval2 = [4,8]; // Expected: [[1,2],[3,10],[12,16]]

// console.log(insert(intervals, newInterval));

/////////////////////////

// Minimum Arrows to Pop balloons

// points = [[10,16],[2,8],[1,6],[7,12]] // Expected: 2
// points2 = [[1,2],[3,4],[5,6],[7,8]] // Expected: 4

// console.log(findMinArrowShots(points));


///////////////////////////

// Partition List

// head = [1,4,3,2,5,2];
// let headNode = arrayToList(head);
// x = 3;

// printList(partition(headNode, x));

/////////////////////////////

// Populating next right pointer of each node II

// let root = createTree([1, 2, 3, 4, 5, null, 7]);
// connect(root);
// printTreeWithNext(root); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> null

////////////////////////////

// Maximum Tree Depth

// let root = createTree([3,9,20,null,null,15,7]); // Expected: 3
// let root2 = createTree([1,null,2]); // Expected: 2
// let root3 = createTree([0,2,4,1,null,3,-1,5,1,null,6,null,8]) // Expected: 5
// console.log(maxDepth(root2));

///////////////////////////////

// Same Tree

// let p = createTree([1,2,3]); 
// let q = createTree([1,2,3]);

// let p2 = createTree([1,2]);
// let q2 = createTree([1,null,2]);
// console.log(isSameTree(p2, q2));


////////////////////////////////

// Invert Binary Tree

// let root = createTree([4, 2, 7, 1, 3, 6, 9]);
// root = invertTree(root);
// console.log(printTree(root)); // Output: [4, 7, 2, 9, 6, 3, 1]

// let root2 = createTree([2, 1, 3]);
// root2 = invertTree(root2);
// console.log(printTree(root2)); // Output: [2, 3, 1]

// let root3 = createTree([]);
// root3 = invertTree(root3);
// console.log(printTree(root3)); // Output: []


///////////////////////////////

// Symmetric Tree

// let root = createTree([1, 2, 2, 3, 4, 4, 3]);
// console.log(isSymmetric(root)); // Output: true

// let root2 = createTree([1, 2, 2, null, 3, null, 3]);
// console.log(isSymmetric(root2)); // Output: false


/////////////////////////////

// Flatten Tree

// let root = createTree([1,2,5,3,4,null,6]);
// console.log(flatten(root));


////////////////////////////

// Path Sum

// let root = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
// let targetSum = 22;
// console.log(hasPathSum(root, targetSum)); // Output: true

// let root2 = createTree([1, 2, 3]);
// let targetSum2 = 5;
// console.log(hasPathSum(root2, targetSum2)); // Output: false


/////////////////////////////

// Sum Root to Leaf Numbers

// let root1 = createTree([1, 2, 3]);
// console.log(sumNumbers(root1)); // Output: 25

// let root2 = createTree([4, 9, 0, 5, 1]);
// console.log(sumNumbers(root2)); // Output: 1026

///////////////////////////

// Binary Search Tree Iterator

// let root = createTree([7, 3, 15, null, null, 9, 20]);
// let bSTIterator = new BSTIterator(root);
// console.log(bSTIterator.next());    // return 3
// console.log(bSTIterator.next());    // return 7
// console.log(bSTIterator.hasNext()); // return true
// console.log(bSTIterator.next());    // return 9
// console.log(bSTIterator.hasNext()); // return true
// console.log(bSTIterator.next());    // return 15
// console.log(bSTIterator.hasNext()); // return true
// console.log(bSTIterator.next());    // return 20
// console.log(bSTIterator.hasNext()); // return false


////////////////////////////

// Average Of Levels In Trees

// root = createTree([3,9,20,null,null,15,7]); // [3.00000,14.50000,11.00000]
// root2 = createTree([3,9,20,15,7]); // [3.00000,14.50000,11.00000]
// console.log(averageOfLevels(root2));


////////////////////////////

// Binary Tree Right Side View 

// root = createTree([1,2,3,null,5,null,4]); // [1,3,4]
// root2 = createTree([1,null,3]); // [1,3]
// root3 = createTree([1,2]); // [1,2]

// console.log(rightSideView(root3));


////////////////////////////

// Binary Tree Level Order Traversal

// root = createTree([3,9,20,null,null,15,7]); // [[3],[9,20],[15,7]]
// console.log(levelOrder(root));

///////////////////////////

// Binary Tree Zigzag Level Order Traversal

// root = createTree([3,9,20,null,null,15,7]);
// root2 = createTree([1,2,3,4,null,null,5]);
// console.log(zigzagLevelOrder(root2));

/////////////////////////////


// Search Insert Position 


// nums = [1,3,5,6];
// target = 5; // 2

// nums2 = [1,3,5,6];
// target2 = 2; // 1 

// nums3 = [1,3,5,6];
// target3 = 7; // 4
// console.log(searchInsert(nums, target));



/////////////////////////////

// Search 2D Matrix

// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// target = 3; // True
// console.log(searchMatrix(matrix, target));

// matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// target = 13; // False
// console.log(searchMatrix(matrix, target));

////////////////////////////

// Find Peak Element

// nums = [1,2,3,1]; // 2
// nums2 = [1,2,1,3,5,6,4]; // 5

// console.log(findPeakElement(nums));


///////////////////////////

// Search in Rotated Sorted Array

// nums = [4,5,6,7,0,1,2];
// target = 0; // 4

// nums = [4,5,6,7,0,1,2]; 
// target = 3; // -1

// console.log(search(nums));
