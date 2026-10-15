'use strict';

const arr = [
    {name: 'Marcus', phone: '+380445554433'},
    {name: 'Sasha', phone: '+380650345709'},
    {name: 'Lesya', phone: '+380565554907'},
    {name: 'Ivan', phone: '+380445580684'},
    {name: 'Dasha', phone: '+380574782737'}
];

const findPhoneByName = (name) => {
    for (let i = 0; i < 5; i++) {
        if(arr[i].name == name) {
              return arr[i].phone;
        };
    };
};

console.log(findPhoneByName('Dasha'));