let arr = [1, 2, 3, 4]

// let resArr = arr.filter(item => {
//   if (item > 2) {
//     return item
//   }
// })

// let resArr = arr.every(item => {
//   if (item >= 1) {
//     return item
//   }
// })

let resArr = arr.every(item => item >= 1)

console.log(resArr)


// let arr = [
//   { id: 1, name: 'zh', age: 20 },
//   { id: 2, name: 'hy', age: 19 },
//   { id: 3, name: 'llm', age: 19 }
// ]

// let reArr = arr.reduce((pre, next) => {
//   if (next.age === 19) {
//     return pre.concat(Object.assign({}, next, { sex: 'female' }))
//   }
//   return []//这里必须有返回值，不然会报错，因为每遍历一项都需要有返回值。如果上面用到了pre，下面没有返回就会报错，pre的值是每次回调函数返回的值。
// }, [])

// console.log(reArr)

