function sum(a) {
  if (!Number.isFinite(a)) return;
  sum.count = a;
  function calc(b) {
    if (arguments.length === 0) {
      return sum.count;
    };
    sum.count += b;
    return calc;
  }
  return calc;
}
sum.count = 0;

console.log(sum(1)(2)());
console.log(sum(5)(-1)(2)());
console.log(sum(6)(-1)(-2)(-3)());
console.log(sum(0)(1)(2)(3)(4)(5)()); 