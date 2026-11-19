'use strict';

const sum = (...args) => {
    let result = 0;

    for (let arg of args) {
        result += arg;
    }
    return result;
}

console.log(sum(10,3,6));