 'use strict';

 const { EventEmitter } = require('node:events');

 const callback = (acc, fn) => {
    return fn(acc);
 }

 const compose = (...args) => {
    const fns = [];

    for(let i = args.length - 1; i >= 0; i--) {
        fns.push(args[i]);
    }

    const emitter = new EventEmitter();

    const composed = (initial_val) => {
        try {
            return fns.reduce(callback, initial_val);
        } catch (error) {
            if (emitter.listenerCount('error') > 0) {
                emitter.emit('error', error);
            }
        }
        
    }

    composed.on = (name, listener) => { 
        emitter.on(name, listener);
    }

   return composed;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const error_func = () => { 
    throw new Error('Error'); 
}

const f = compose(inc, error_func, twice, cube);
f.on('error', e => console.log(e.message));
console.log(f(5));