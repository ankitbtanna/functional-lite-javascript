function reverseArgs(fn) {
    return function reversed(...args) {
        return fn(...args.reverse());
    }
}

function f(...args) {
    return args;
}

var g = reverseArgs(f);
g(1, 2, 3, 4);