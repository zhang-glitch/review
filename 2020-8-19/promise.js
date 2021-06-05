class Promise {
  constructor(executor) {//执行器函数
    let _this = this
    _this.status = 'pending'  //保存当前状态
    _this.value = undefined //执行成功时，传递的值
    _this.error = undefined//执行失败时，传递的值
    _this.onResolvedCallbacks = []; // 存放then成功的回调,这里存的都是resolve()的函数
    _this.onRejectedCallbacks = []; // 存放then失败的回调，这里存的都是reject()的函数
    function resolve(value) {
      if (_this.status === 'pending') {
        _this.status = 'resolved'
        _this.value = value
        // 当成功的函数 (resolve()) 被调用时，之前缓存的回调函数会被一一调用
        _this.onResolvedCallbacks.map(callback => callback())
      }
    }

    function reject(error) {
      if (_this.status === 'pending') {
        _this.status = 'rejected'
        _this.error = error
        // 当失败的函数 (reject()) 被调用时，之前缓存的回调函数会被一一调用
        _this.onRejectedCallbacks.map(callback => callback())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      console.log(e)
    }
  }

  then(onfulfilled, onRejected) {
    let _this = this
    if (_this.status === 'pending') {
      //缓存成功时的回调函数，等到状态变为resolved的时候，在执行
      _this.onResolvedCallbacks.push(function () {
        onfulfilled(_this.value)
      })

      //缓存失败时的回调函数，等到状态变为rejected的时候，在执行
      _this.onRejectedCallbacks.push(function () {
        onRejectedCallbacks(_this.error)
      })
    } else if (_this.status === 'resolved') {
      onfulfilled(_this.value)

    } else if (_this.status === 'rejected') {
      onRejected(_this.error)
    }
  }
}

// let promise = new Promise((resolve, reject) => {
//   // setTimeout(() => {
//   //   resolve('我是张昊')
//   //   reject('我是李龙淼')
//   // }, 1000)
//   throw new Error('我是错误')
// }).then(res => {
//   console.log(res)
// }, res => {
//   console.log(res)
// })