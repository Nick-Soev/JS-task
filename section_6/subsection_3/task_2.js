let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (i) {
    return i >= a && i <= b
  }
}
function inArray(a) {
  return function (i) {
    return a.includes(i)
  }
}
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));