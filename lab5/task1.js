'use strict';

const seq = (...args) => {

    const check = (arg) => {
        if (typeof (arg) !== 'function') {

            let result = arg;

            for (let i = args.length - 1; i >= 0; i--) {
                let current_fn = args[i];
                result = current_fn(result);
            }
            return result;

        } else {
            args.push(arg);
            return check;
        }
    }
    return check;
}

console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));