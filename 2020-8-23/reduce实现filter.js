const selfFilter = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  let resArr = []
  return arr.reduce((pre, cur, index) => {
    // if (fn.call(context, cur, index, this)) {
    //   resArr.push(cur)
    //   return resArr
    // }
    return fn.call(context, cur, index, this) ? [...pre, cur] : [...pre]
  }, [])
}

Array.prototype.selfFilter = selfFilter

let arr = [0, 2, 3]

let arr1 = arr.selfFilter(item => item > 2)

console.log(arr1)