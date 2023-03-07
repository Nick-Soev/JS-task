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

function printList(l) {
  let t = l;
  while (t) {
    alert(t.value);
    t = t.next;
  }
}
printList(list);

function printList2(l) {
  alert(l.value);
  if (l.next) {
    printList(l.next);
  }
}
printList2(list)