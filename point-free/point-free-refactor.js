function isOdd(v) {
    return v % 2 === 1;
}

function isEven(v) {
    return !isOdd(v);
}

isEven(4);