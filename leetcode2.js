// const myObject = {
//     key1: new Set(),
//     key2: new Set([1, 2, 3]),
//     key3: new Set(['apple', 'banana'])
// };

// myObject.key1.add('orange');
// myObject.key2.add(4);
// myObject.key3.add('orange');
// myObject.key3.add('apple');
// myObject.key3.delete('apple');

// console.log(myObject.key3.has('banana'));

// console.log(myObject);




// function analyzeUserLogs(logs) {

//     const userCounts = {};

//     logs.forEach(log => {
//         const [date, user] = log.split(', ');

//         if(userCounts.hasOwnProperty(date)) {
//             userCounts[date].add(user);
//         } else {
//             userCounts[date] = new Set([user]);
//         }
//     })
    

//     for (const date in userCounts) {
//         if(userCounts.hasOwnProperty(date)){
//             const uniqueUserCount = userCounts[date].size;
//             console.log(`${date}: ${uniqueUserCount}`);
//         }
//     }

// }

// function analyzeUserLogs(logs) {
// const logs = [
//     "2023-11-01, User1",
//     "2023-11-01, User2",
//     "2023-11-01, User1",
//     "2023-11-02, User2",
//     "2023-11-02, User3"
// ];

// analyzeUserLogs(logs);


// var twoSum = function(nums, target) {
//     const memoryObj = {};
//     const answer = [];

//     for (let i = 0; i < nums.length; i++) {
//         const difference = target - nums[i];
//         if (memoryObj.hasOwnProperty(difference)) {
//             answer.push(memoryObj[difference]);
//             answer.push(i);
//             return answer;
//         } else {
//             memoryObj[nums[i]] = i;
//         }
//     }

//     return false;
// };

// const nums1 = [2, 7, 11, 15];
// const target1 = 9;

// console.log(twoSum(nums1, target1));



// var groupAnagrams = function(strs) {
    
//     const anagramGroups = {};

//     for (const str of strs) {
//         const sortedStr = str.split('').sort().join('');
        
//         if (anagramGroups.hasOwnProperty(sortedStr)) {
//             anagramGroups[sortedStr].push(str);
//         } else {
//             anagramGroups[sortedStr] = [str];
//         }
//     };

//     // const answer = [];

//     // for (const anagram in anagramGroups) {
//     //     answer.push(anagramGroups[anagram]);
//     // }

//     // return answer;

//     return Object.values(anagramGroups);
// };

// const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// console.log(groupAnagrams(strs1));


// var groupAnagrams = function(strs) {

//     const hash = (word) => {
//         return word.split('').sort().join('');
//     }
    
//     const memoryMap = new Map();

//     strs.forEach((str) => {
//         const key = hash(str);
//         if (memoryMap.has(key)) {
//             memoryMap.get(key).push(str);
//         } else {
//             memoryMap.set(key, [str]);
//         }
//     })

//     return [...memoryMap.values()];
// };

// const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// console.log(groupAnagrams(strs1));



// my attempt below
// var longestConsecutive = function(nums) {

//     if (nums.length < 1) {
//         return 0;
//     }

//     const sortedNums = new Set(nums.sort((a, b) => a - b));
//     console.log(sortedNums);
//     let count = 0;
//     let max = 0;

//     const memoryMap = new Map();
    
//     sortedNums.forEach(num => {
//         const previousNum = num - 1;
//         if(memoryMap.has(previousNum)) {
//             count += 1;
//             memoryMap.set(num);
//         } else {
//             if (count > 0 && count > max) {
//                 max = count;
//             }
//             count = 0;
//             memoryMap.set(num);
//         }
//     })

//     return Math.max(count + 1, max + 1);
// };

// const nums1 = [100, 4, 200, 1, 3, 2];
// const nums2 = [0,3,7,2,5,8,4,6,0,1];
// const nums3 = [0,0,-1];
// const nums4 = [9,1,4,7,3,-1,0,5,8,-1,6];
// const nums5 = [100,4,200,1,3,2];
// const nums6 =[-6,8,-5,7,-9,-1,-7,-6,-9,-7,5,7,-1,-8,-8,-2,0];


// console.log(longestConsecutive(nums6));


// other ppl's answer
// var longestConsecutive = function(nums) {
//     const n = nums.length;
    
//     if (n === 0) {
//         return 0;
//     }

//     nums.sort((a, b) => a - b);

//     let count = 1;
//     let max = 0;

//     for (let i = 1; i < n; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             if (nums[i] === nums[i - 1] + 1) {
//                 count++;
//             } else {
//                 max = Math.max(max, count);
//                 count = 1;
//             }
//         }
//     }

//     return Math.max(max, count);

// };


// my code
// var containsNearbyDuplicate = function(nums, k) {
//     const memoryObj = {};

//     for (let i = 0; i < nums.length; i++) {
//         if(memoryObj.hasOwnProperty(nums[i]) && i - memoryObj[nums[i]] <= k) {
//             return true;
//         }
//         memoryObj[nums[i]] = i;
//     }
//     console.log(memoryObj);
//     return false
// };

// leetcode solution
// var containsNearbyDuplicate = function(nums, k) {
//     const hashmap = new Map();
//     for (let idx = 0; idx < nums.length; idx++) {
//         // Check if the difference betweend duplicates is less than k
//         if (idx - hashmap.get(nums[idx]) <= k) {
//             return true;
//         }
//         hashmap.set(nums[idx], idx);
//     }
//     return false;
// };


// nums1 = [1,2,3,1];
// nums2 = [1,0,1,1];
// nums3 = [1,2,3,1,2,3];
// k1 = 3;
// k2 = 1;
// k3 = 2;

// console.log(containsNearbyDuplicate(nums2, k2));


// var merge = function(nums1, m, nums2, n) {
//     for (let i = m, j = 0; j < n; i++, j++) {\
//         nums1[i] = nums2[j];
//     }
//     nums1.sort((a, b) => a - b);
//     return nums1;
// };


// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;

//     while( j >= 0) {
//         if ( i >= 0 && nums1[i] > nums2[j]) {
//             nums1[k--] = nums1[i--];
//         } else {
//             nums1[k--] = nums2[j--];
//         }
//     }

//     return nums1;
// };

// nums1 = [1,2,3,0,0,0];
// m = 3;
// nums2 = [2,5,6];
// n = 3;

// console.log(merge(nums1, m, nums2, n));


// my code, beats 95%
// var majorityElement = function(nums) {
//     if (nums.length === 1) {
//         return nums[0];
//     }

//     const halfSize = nums.length / 2;

//     const memoryObj = {};

//     for (const num of nums) {
//         if (memoryObj.hasOwnProperty(num)) {
//             memoryObj[num] = memoryObj[num] + 1;
//             if (memoryObj[num] > halfSize) {
//                 return num;
//             }
//         } else {
//             memoryObj[num] = 1;
//         }
//     }

//     return false;
// };

// nums1 = [3, 2, 3];
// nums2 = [2,2,1,1,1,2,2];

// console.log(majorityElement(nums2));


// var removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;
// };

// // nums1 = [1,1,2];
// nums2 = [0,0,1,1,1,2,2,3,3,4];
// nums3 = [0,1,2,3,4,5];
// console.log(removeDuplicates(nums3));


// my attempt
// var removeDuplicates2 = function(nums) {
//     const memoryObj = {};
//     let i = 0;
//     let j = 1;
//     memoryObj[nums[i]] = 1;

//     while (j < nums.length) {
//         if(memoryObj.hasOwnProperty(nums[j])) {
//             if(memoryObj[nums[j]] == 2) {
//                 i++;
//                 j++;
//                 nums[i] = nums[j];
//             }
//             memoryObj[nums[j]] = 2;
//             i++;
//             j++;
//         } else {
//             memoryObj[nums[j]] = 1;
//             j++;
//         }
//     }
//     return nums;

// }

// leetcode solution
// const removeDuplicates2 = (nums) => {
//     let j = 2;

//     for (let i = 2; i < nums.length; i++) {
//         if (nums[i] !== nums[j - 2]) {
//             nums[j] = nums[i];
//             j++;
//         }
//     }

//     return nums;
// };

// const removeDuplicates2 = (nums) => {
//     let j = 1;

//     for(let i = 1; i < nums.length; i++) {
//         if(nums[i] !== nums[j-1]) {
//             nums[j] = nums[i];
//             j++;
//         }
//     }
//     return nums;
// };



// nums1 = [0,0,1,1,1,1,2,3,3]

// console.log(removeDuplicates2(nums1));


// nums1 = [1,2,3,3,100,200,400];

// const newArr = nums1.map(num => num * 2);

// const newArr2 = nums1.filter(num => num > 10);

// const newArr3 = nums1.reduce((total, number) => {
//     return total.concat(`Number: ${number}`)
// }, []);

// const sum = nums1.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// console.log(newArr3);


// const users = [
//     { id: 1, name: "pedro", age: 26},
//     { id: 2, name: "john", age: 22},
//     { id: 3, name: "jess", age: 56},
//     { id: 4, name: "rio", age: 14},
//     { id: 5, name: "michael", age: 18},
// ];

// const changeAge = (id, newAge) => {
//     const newUserArray = users.map(user => {
//         if (user.id === id) {
//             return {id: user.id, name: user.name, age: newAge}
//         } else {
//             return user;
//         }
//     });

//     return newUserArray;
// }

// const filterAge = (age) => {
//     const newArray = users.filter(user => user.age >= age)

//     return newArray;
// }

// const showNames = () => users.reduce((newArr, user) => {
//         newArr.push(user.name)
//         return(newArr);
//     }, []);

// console.log(showNames());


// console.log(changeAge(4, 19));

// console.log(filterAge(18));


// const testArr = [1, 2, 3, 4, 5, 6, 7, 8];

// testArr.splice(-1, 1, 12);

// console.log(testArr);



// var rotate = function(nums, k) {
//     if (k === 0) {
//         return nums;
//     }
//     k = k % nums.length;
//     nums.splice(nums.length - k, k).reverse().forEach(num => nums.unshift(num));
//     return nums;
// };

// nums1 = [1,2,3,4,5,6,7];
// k = 11;
// console.log(rotate(nums1, k));

// const maxProfit = (prices) => {
//     let max = 0;
//     let profit = 0;
//     let buy = 0;
//     let sell = 1;
//     for (sell; sell < prices.length; sell++) {
//         if (prices[sell] > prices[buy]) {
//             profit = prices[sell] - prices[buy];
//             max = Math.max(profit, max);
//         } else {
//             buy = sell;
//         }
//     }
//     return max;
// }

// prices1 = [2,1,5,3,6,4];
// prices2 = [1,2,4,2,5,7,2,4,9,0,9];
// console.log(maxProfit(prices2));


// const maxProfit = (prices) => {
//     let left = 0; // Buy
//     let right = 1; // sell
//     let max_profit = 0;
//     while (right < prices.length) {
//         if (prices[left] < prices[right]) {
//             let profit = prices[right] - prices[left]; // our current profit

//             max_profit = Math.max(max_profit, profit);
//         } else {
//             left = right;
//         }
//         right++;
//     }
//     return max_profit;
// };

// prices2 = [1,2,4,2,5,7,2,4,9,0,9];
// console.log(maxProfit(prices2));

// my attempt
// var canJump = function(nums) {
//     let lastIndex = nums.length - 1;
//     for (let i = 0; i < nums.length; i++) {
//         let currentValue = nums[i];
//         if (currentValue === 0) {
//             if (i = 0) {
//                 return false;
//             } else {

//             }
//         } else if (currentValue >= lastIndex - i) {
//             return true;
//         } else {

//         }
//     }
// };


// leetcode solution
// var canJump = function(nums) {
//     // Base condition...
//     if(nums.length <= 1)
//         return true;
//     // To keep the maximum index that can be reached...
//     let maximum = nums[0];
//     // Traverse all the elements through loop...
//     for(let i = 0; i < nums.length; i++){
//         //if there is no way to jump to next...
//         // so we should return false...
//         if(maximum <= i && nums[i] == 0) 
//             return false;
//         //update the maximum jump...    
//         if(i + nums[i] > maximum){
//             maximum = i + nums[i];
//         }
//         //maximum is enough to reach the end...
//         if(maximum >= nums.length-1) 
//             return true;
//     }
//     return false;   
// };



// const nums1 = [2, 3, 1, 1, 4];

// console.log(canJump(nums1));


// function analyzeUserLogs(logs) {
//     const memoryObj = {};

//     logs.forEach(row => {
//         let oneEntry = row.split(', ');
//         let date = oneEntry[0];
//         let user = oneEntry[1];
//         if (memoryObj.hasOwnProperty(date)) {
//             memoryObj[date].add(user);
//         } else {
//             memoryObj[date] = new Set([user]);
//         }
//     })

//     for (const row in memoryObj) {
//         let length = memoryObj[row].size;
//         console.log(`${row}: ${length}`);
//     }
// }

// const logs = [
//     "2023-11-01, User1",
//     "2023-11-01, User2",
//     "2023-11-01, User1",
//     "2023-11-02, User2",
//     "2023-11-02, User3"
// ];

// analyzeUserLogs(logs);



var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    s = s.split('').sort();
    t = t.split('').sort();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }
    return true;
}
const s1 = 'anagram';
const t1 = 'nagaram';

console.log(isAnagram(s1, t1));