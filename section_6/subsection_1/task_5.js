let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printReverseList(l) {
  if (l.next) {
    printReverseList(l.next);
  }
  alert(l.value);
}
printReverseList(list);

function printReverseList(l) {
  let arr = [];
  let tmp = l;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

printReverseList(list);