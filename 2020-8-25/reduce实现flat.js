// let arr = [[1, 2, 3], [2, 3, 4, [7, 7, 7]]]

// let arr1 = arr.flat(4)

// console.log(arr1)


const selfFlat = function (depth = 1) {
  let arr = Array.prototype.slice.call(this)
  // let resArr = []
  if (depth === 0) return arr
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      //反正就是递归
      return [...pre, ...selfFlat.call(cur, depth - 1)]
    } else {
      return [...pre, cur]
    }
  }, [])
}


Array.prototype.selfFlat = selfFlat;

let arr1 = [1, 2, 3, [2222, 222, [4, 5, 6]]].selfFlat(Infinity)
console.log(arr1)
