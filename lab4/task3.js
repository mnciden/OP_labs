'use strict';

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

const ages = (persons) => {
    for (let person in persons) {
        persons[person] = persons[person].died - persons[person].born;    
    } 
    return persons;
}

console.log(ages(persons));