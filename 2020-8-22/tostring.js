

// let num = new Number(1)
// let num1 = 1

// console.log(Object.prototype.toString.call(num))//[object Number]

// console.log(Object.prototype.toString.call(num1))//[object Number]



const selfMap = function (fn, context = this) {
  //这里的context会被当做fn函数中的this
  let arr = Array.prototype.slice.call(context)
  let mappedArr = Array()
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    mappedArr[i] = fn.call(context, arr[i], i, this)
    // console.log(context)
  }
  return mappedArr
}

Array.prototype.selfMap = selfMap

let resArr = [0, 0, 0, 1].selfMap(number => {
  console.log(this)
  return number * 2
}, [2, 3, 4])

console.log(resArr)//[4,6,8]

// const selfMap = function (fn, context) {
//   let arr = Array.prototype.slice.call(this)
//   return arr.reduce((pre, cur, index) => {
//     return [...pre, fn.call(context, cur, index, this)]
//   }, [])
// }
// Array.prototype.selfMap = selfMap
// let resArr = [1, 2, 3].selfMap(item => item * 2)
// console.log(resArr)


// let arr = [1, 2, 4]
// let a = new Array(10)
// let resArr = []
// for (let i = 0; i <= a.length; i++) {
//   let arr = [i]
//   resArr = [...arr, 2, 3, 4]
// }

// console.log(resArr)