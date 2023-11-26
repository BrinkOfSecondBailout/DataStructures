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



var groupAnagrams = function(strs) {
    
    const anagramGroups = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (anagramGroups.hasOwnProperty(sortedStr)) {
            anagramGroups[sortedStr].push(str);
        } else {
            anagramGroups[sortedStr] = [str];
        }
    };

    const answer = [];

    for (const anagram in anagramGroups) {
        answer.push(anagramGroups[anagram]);
    }

    return answer;
};

const strs1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs1));