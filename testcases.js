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

// nums = [-1,0,1,2,-1,-4];
// nums2 = [0,1,1]
// nums3 = [0,0,0]
// console.log(threeSum(nums3));



///////////////////////



// Reverse Words in String

// let s = "the sky is blue";
// let s2 = "  hello world  ";
// let s3 = "a good   example";
// console.log(reverseWords(s3));



///////////////////////

// Rotate Image

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
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

// let ex = [1,2,3,3,4,4,5];
// let ex2 = [1,1,1,2,3];
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

