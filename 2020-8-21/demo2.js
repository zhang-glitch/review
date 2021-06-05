let arr = [
  { id: 1, name: 'zh', age: 20 },
  { id: 2, name: 'hy', age: 19 },
  { id: 3, name: 'llm', age: 19 }
]

// let reArr = arr.reduce((pre, next) => {
//   if (next.age === 19) {
//     return pre.concat(Object.assign({}, next, { sex: 'female' }))
//   }
//   return []//这里必须有返回值，不然会报错，因为每遍历一项都需要有返回值。
// }, [])

// console.log(reArr)

let resArr1 = arr.filter(item => item.age === 19).map(item => { item.sex = "female"; return item })
console.log(resArr1)

// let arr = [1, 2, 3]

// let resArr = arr.filter(item => item >= 3)
// console.log(resArr)