function spreadArgs(fn) {
    return function spread(args) {
        return fn(...args);
    }
}

function f(x, y, z, w) {
    return x + y + z + w;
}

var g = spreadArgs(f);
g([1, 2, 3, 4]);