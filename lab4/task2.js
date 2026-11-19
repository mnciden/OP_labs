'use strict';

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const max = (a,b) => (a > b) ? a : b;
const max_in_rows = matrix.map((row) => row.reduce(max));
const result = max_in_rows.reduce(max);

console.log(result);