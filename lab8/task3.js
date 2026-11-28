'use strict';

const contract = (fn, ...types) => (...args) => {
    for (let i = 0; i < types.length - 1; i++) {
            const expectedType = types[i].name.toLowerCase();
            if (expectedType !== typeof (args[i])) {
                throw new TypeError(`Args[${i}] type is expected to be ${expectedType}`);
            }
        }

    const result = fn(...args);
    const expectedResult = types[types.length - 1];
    const expectedResultType = expectedResult.name.toLowerCase();

    if (expectedResultType !== typeof(result)) {
        throw new TypeError(`Result type is expected to be ${expectedResultType}`);
    }

    return result;
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number, Number);
const res = addNumbers(2, 3, 'Hi');
console.dir(res);