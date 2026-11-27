'use strict';

const callback = (acc, fn) => {
    return fn(acc);
}

const pipe = (...args)  => {
    for (let arg of args) {
        if(typeof(arg) !== 'function') {
            throw new Error('Not all arguments are functions');
        } 
    }
         
    return (initial_val) => args.reduce(callback, initial_val);
}   

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc,twice,cube);
console.log(f(5));