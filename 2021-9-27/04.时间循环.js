

// 我们一定要分清是谁先进入微任务队列的，一次执行。不用考虑太多。

console.log('1');

setTimeout(function () {
  console.log('2');
  process.nextTick(function () {
    console.log('3');
  })
  new Promise(function (resolve) {
    console.log('4');
    resolve();
  }).then(function () {
    console.log('5')
  })

  // process.nextTick(function () {
  //   console.log('3');
  // })
})


process.nextTick(function () {
  console.log('6');
})


new Promise(function (resolve) {
  console.log('7');
  resolve();
}).then(function () {
  console.log('8')
})


setTimeout(async function () {
  console.log('9');
  // process.nextTick(function () {
  //   console.log('10');
  // })
  // new Promise(function (resolve) {
  //   console.log('11');
  //   resolve();
  // }).then(function () {
  //   console.log('12')
  // })

  let result = await Promise.resolve("11")
  console.log(result)
  console.log("12")
})


  ; (async () => {
    console.log('13');

    let result = await Promise.resolve("14")
    console.log(result)
    console.log("15")
  })()