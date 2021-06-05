const selfFilter = function (fn, context) {
  //要处理的数组
  let arr = Array.prototype.slice.call(this)
  let resArr = Array()
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    if (fn.call(context, arr[i], i, this) === 0) {
      resArr.push(0)
    } else {
      fn.call(context, arr[i], i, this) && resArr.push(arr[i])
    }
  }
  return resArr
}

Array.prototype.selfFilter = selfFilter

let arr = [0, 2, 3]

// let arr1 = arr.selfFilter(item => item > 2)
let arr1 = arr.selfFilter(item => {
  if (item < 3) {
    return item
  }
})

console.log(arr1)