'use strict';

const array = [1, 2, 3, 4, 5, 6, 7];

const removeElement = (arr, element) => {
    let index = arr.indexOf(element);
    if (index >= 0) arr.splice(index, 1);                     //if el is found (indexOf returns -1 if el isn't found)
}

removeElement(array, 5);
console.log(array);