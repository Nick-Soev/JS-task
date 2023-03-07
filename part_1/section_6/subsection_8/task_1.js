function printNumbers(from, to) {
  let setId = setInterval(() => {
    if (from === to) {
      clearInterval(setId);
    }
    console.log(from);
    from++
  }, 1000)
}
printNumbers(2, 10)


function printNumbers1(from, to) {
  let setId = setTimeout(function run() {
    if (from !== to) {
      setId = setTimeout(run, 1000)
    } else {
      clearInterval(setId);
    }
    console.log(from);
    from++
  }, 1000)
}
printNumbers1(4, 10)