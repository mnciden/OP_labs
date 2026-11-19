'use strict'; 

const sum = (...args) => {
    let result = 0;
    let i = 0;

    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
}

console.log(sum(17,8,5));