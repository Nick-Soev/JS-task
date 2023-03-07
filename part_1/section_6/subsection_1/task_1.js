// С использованием цикла
function sumTo1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum;
}
console.log(sumTo1(1));
console.log(sumTo1(2));
console.log(sumTo1(3));
console.log(sumTo1(4));
console.log(sumTo1(100));

// Через рекурсию
function sumTo2(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo2(n - 1);
  }
}
console.log(sumTo2(1));
console.log(sumTo2(2));
console.log(sumTo2(3));
console.log(sumTo2(4));
console.log(sumTo2(100));

// С использованием формулы арифметической прогрессии
function sumTo3(n) {
  return n * (n + 1) / 2;
}
console.log(sumTo3(1));
console.log(sumTo3(2));
console.log(sumTo3(3));
console.log(sumTo3(4));
console.log(sumTo3(100));


