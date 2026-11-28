'use strict';

const store = (value) => {
    return () => value;
}


const read = store(7);
const value = read();
console.log(value);