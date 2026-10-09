'use strict';

const arr = [true, 'hello', 5, 12.3, false, 500, 'bye', -20, 'word'];

const obj = {
    boolean: 0,
    string: 0,
    number: 0
}

for (const element of arr) {
    let type = typeof(element); 
    obj[type]++;
}

console.log(obj);