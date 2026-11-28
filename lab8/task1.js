'use strict';

const obj = { a: 1, b: 2, c: 3 };

const callback = (key, value) => console.log({ key, value });

const iterate = (obj, callback) => {
    for (let key in obj) {
        callback(key, obj[key]);
    } 
}
    
iterate(obj, callback);