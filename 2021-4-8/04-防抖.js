
/***
 * 
 * 防抖： 只执行最后一次
 * 
 * 
 */

function debounce(fn, delay = 1000) {
  return () => {
    let timer = null;
    // 先清除定时器
    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  }
}


