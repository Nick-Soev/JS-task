function fib(n) {
  let s = 0;
  let t = 1;
  for (let i = 0; i < n; i++) {
    t = s + t;
    s = t - s;
  }
  return s
}
alert(fib(3));
alert(fib(7));
alert(fib(77));