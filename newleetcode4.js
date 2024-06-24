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
// console.log(twoSum(nums, target));

function ListNode(val, next) {
    this.val = (val==undefined ? 0 : val)
    this.next = (next==undefined ? null : next)
}

function convertToList(array) {
    var newList = ListNode();
    console.log(newList.val);
    console.log(newList.next);
    // for (let i = 0; i < array.length; i++) {
    //     newList.val = array[i];
    //     newList.next = array[i+1];
    // }
    // console.log(newList);
}

// var addTwoNumbers = function(l1, l2) {
    
// };

l1 = [2,4,3];

l2 = [5,6,4];

convertToList(l1, l2);

// console.log(addTwoNumbers(l1, l2));