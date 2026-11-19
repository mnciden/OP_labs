'use strict';

const sum = (...args) => args.reduce((result, currentval) => result + currentval, 0);

console.log(sum(1,2,3,4,5));