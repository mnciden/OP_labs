'use strict';

const fn = () => {

    const obj1 = {name: 'Nastya'};
    const obj2 = {name: 'Sasha'};

    const a = obj1;
    let b = obj2;

    console.log(a,b);

    obj1.name = 'Lesya';
    obj2.name = 'Max';

    // a = obj2;  <- Error, can't change constant's value
    b = obj1;

    console.log(a,b); // a = link for obj1, b = link for obj1 => output: {name: 'Lesya'} {name: 'Lesya'}
};

console.log(fn());