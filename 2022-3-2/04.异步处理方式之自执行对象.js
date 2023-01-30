  function requestData(url) {
    return new Promise((resolve, reject) => {
      // 模拟网络请求
      setTimeout(() => {
        // 拿到请求的结果
        resolve(url)
      }, 2000);
    })
  }

  
  function* getData() {
    const res1 = yield requestData("zh")
    const res2 = yield requestData(res1 + "aaa")
    const res3 = yield requestData(res2 + "bbb")
    const res4 = yield requestData(res3 + "ccc") // 这里返回的依旧是done: false
    return res4 // 这里最后返回 {done: true, value: res4}
  }

  const iterator = getData();
  // // console.log(iterator)
  // iterator.next().value.then(res => {// 第一次直接调用，不需要传递参数
  //   iterator.next(res).value.then(res1 => { // 第二次需要传递参数，赋值给getData中的res1.
  //     console.log(res1)
  //   })
  // }) 

  function createAsyncFn(iterator) {
    return new Promise(resolve => {
      // 掉一次调用，不需要传递参数
      function exec(res) {
        const isFinished = iterator.next(res); // 返回的promise
        // console.log("isFinished", isFinished)
        // 每次必须先判断，要不然后面的value可能没有值
        if(isFinished.done) {
          resolve(isFinished.value)
        }else {
          isFinished.value.then(res1 => {
            exec(res1);
          })  
        }
      }
      exec();
    })
  }

  createAsyncFn(getData()).then(res => {
    console.log(res)
  })
  
  // // 封装了一个自动执行的函数
  // function execGenerator(genFn) {
  //   const generator = genFn()
  //   function exec(res) {
  //     const result = generator.next(res)
  //     if (result.done) {
  //         console.log(result.value) // zhaaabbbccc
  //       return result.value
  //     }
  //     result.value.then(res => {
  //       exec(res)
  //     })
  //   }
  //   exec()
  // }
  
  // execGenerator(getData)
