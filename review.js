
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







