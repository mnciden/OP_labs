'use strict';

const table = {
    Marcus: {phone: '+380445554433'},
    Sasha: {phone: '+380650345709'},
    Lesya: {phone: '+380565554907'},
    Ivan: {phone: '+380445580684'},
    Dasha: {phone: '+380574782737'}
};

const findPhoneByName = (name) => table[name].phone;

console.log(findPhoneByName('Dasha'));
