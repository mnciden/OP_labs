'use strict';

function introspect(iface) {
  const result = [];

  for (const key in iface) {
    let val = iface[key];
    if (typeof val == 'function') {
      result.push([key, val.length]);
    };
  };

  return result;

};

const iface = {
  m1: x => [x],
  b: true,
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
  s: 'hello'
};

console.log(introspect(iface));