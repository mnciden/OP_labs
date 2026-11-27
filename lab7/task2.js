'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (arr, ...elements) => {
    let result = arr.filter(element => (elements.includes(element) === false));
    return result;
}

console.log(removeElement(array, 1,4,7));