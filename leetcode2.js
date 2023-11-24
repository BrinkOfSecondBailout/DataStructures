const myObject = {
    key1: new Set(),
    key2: new Set([1, 2, 3]),
    key3: new Set(['apple', 'banana'])
};

myObject.key1.add('orange');
myObject.key2.add(4);
myObject.key3.add('orange');

console.log(myObject);