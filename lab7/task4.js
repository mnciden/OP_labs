'use strict';

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];

const difference = (arr1, arr2) => {
    return arr1.filter(element => arr2.includes(element) === false);
}

const result = difference(array1, array2);
console.log(result);