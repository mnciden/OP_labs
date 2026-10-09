'use strict';

const arr = [true, 'hello', 5, 12.3, false, 500, 'bye', -20, 'word'];

const Obj = {};

for(const element of arr) {
    const type = typeof element;
    if (Obj[type] == undefined) {
        Obj[type] = 1;
    } else {
        Obj[type]++;
    }
}

console.dir(Obj);