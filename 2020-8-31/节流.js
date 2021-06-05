

// 在规定时间内只执行一次函数

function throttle(fn, delay = 1000) {
  // 设置一个开关，表示可以执行该函数
  let canUse = true;
  return function () {
    if (!canUse) {
      return
    }
    canUse = false
    setInterval(() => {
      fn.call(this, arguments)
      //改变开关,由于执行完成后，还是可以执行该函数的
      canUse = true
    }, delay)
  }
}