const myObject = {
    key1: new Set(),
    key2: new Set([1, 2, 3]),
    key3: new Set(['apple', 'banana'])
};

myObject.key1.add('orange');
myObject.key2.add(4);
myObject.key3.add('orange');
myObject.key3.add('apple');
myObject.key3.delete('apple');

console.log(myObject.key3.has('banana'));

console.log(myObject);




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
//         const uniqueUserCount = userCounts[date].size;
//         console.log(`${date}: ${uniqueUserCount}`);
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