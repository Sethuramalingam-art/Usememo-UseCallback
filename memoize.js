function fib(n, prefetchValue = []) {
  if (prefetchValue[n] !== null) {
    return prefetchValue[n];
  }
  let result;
  if (n === 1) {
    result = 0;
  }

  if (n === 2) {
    result = 1;
  }

  result = fib(n - 1, prefetchValue) + fib(n - 2, prefetchValue);

  prefetchValue[n] = result;
  return result;
}

console.log(fib(100));
