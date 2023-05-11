function unspreadArgs(fn) {
  return function unspread(...args) {
    return fn(args);
  };
}

function f(args) {
    const [x, y, z, w] = [...args];
    console.log(x + y + z + w);
  return x + y + z + w;
}

var g = unspreadArgs(f);
g(1, 2, 3, 4);
