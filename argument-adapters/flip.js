function flip(fn) {
    return function flipped(arg1, arg2, ...args) {
        return fn(arg2, arg1, ...args);
    }
}

function f(...args) {
    return args;
}

var g = flip(f);
g(1, 2, 3, 4);