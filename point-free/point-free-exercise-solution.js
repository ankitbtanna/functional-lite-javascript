var output = console.log.bind(console);

function not(fn) {
    return function negated(...args) {
        return !fn(args);
    }
}

var isLongEnough = not(isShortEnough);

function when(fn) {
    return function (predicate) {
        return function (...args) {
            if (predicate(...args)) {
                return fn(...args);
            }
        }
    }
}

/* function printIf(shouldPrintIt) {
    return function (msg) {
        if (shouldPrintIt(msg)) {
          output(msg);
        }
    }
} */

var printIf = when(output);

function isShortEnough(str) {
    return str.length <= 5;
}

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);
