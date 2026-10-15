'use strict';

const rangeOdd = (start, end) => {
    const arrOdd = [];

    for (let i = start; i <= end; i++) {
        if (i % 2 != 0) {
            arrOdd.push(i);
        }

    }
    
    return arrOdd;
};

console.log(rangeOdd(15, 30));