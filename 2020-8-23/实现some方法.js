const someFilter = function (fn, context) {
  let arr = Array.prototype.slice.call(this)
  for (let i = 0; i < arr.length; i++) {
    if (fn.call(context, arr[i], i, this))
      return true
  }
  return false
}

Array.prototype.someFilter = someFilter

let arr = [1, 2, 3]

let arr1 = arr.someFilter(item => item > 2)
console.log(arr1)