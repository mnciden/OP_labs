'use strict';

//task 1

const inc1 = (n) => n+1;


const a = 5;
const b = inc1(a);

console.dir({a,b});


//task 2

const inc2 = (num) => {
    num.n++;
};
    
const obj = {n: 5};

inc2(obj);

console.dir(obj);
