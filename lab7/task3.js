'use strict';

const unique = (array) => {
    return array.filter((value, index, arr) => arr.indexOf(value) === index);   //indexOf returns index of the first el from the left
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);