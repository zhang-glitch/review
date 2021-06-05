const selfReduce = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let pre
  for (let i = 0; i < arr.length; i++) {
    pre = fn.call(context, pre, arr[i], i, this)
    return pre
  }
}