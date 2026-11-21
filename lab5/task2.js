'use strict';

const array = () => {
    const arr = [];

    const fn_obj = (i) => {
        return arr[i];
    }

    fn_obj.push = (value) => {
        arr.push(value); 
    }

    fn_obj.pop = () => {
        return arr.pop();
    }

    return fn_obj;
}

const a = array();

a.push('first');
a.push('second');
a.push('third');

console.log(a(0)); //first
console.log(a(1)); //second
console.log(a(2)); // third

console.log(a.pop()); //third
console.log(a.pop()); //second
console.log(a.pop()); //first

console.log(a.pop()); //undefined