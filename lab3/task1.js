 'use strict';

 const random = (min, max) => {

    if (typeof max == 'undefined') {
        max = min;
        min = 0;
    };

    let res1 = Math.random() * (max - min + 1) + min;
    return Math.floor(res1);
 };

console.log(random(100));