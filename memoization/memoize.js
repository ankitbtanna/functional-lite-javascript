function repeat(count) {
  return memoize(function allTheAs() {
    return "".padStart(count, "A");
  });
}

function memoize(fn) {
  var a;

  if (a !== undefined) return a;

  a = fn();
  return a;
}

repeat(10);
repeat(10);