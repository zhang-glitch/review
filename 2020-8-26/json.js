
// 数组
// const arr = [function () { }, undefined, NaN, Infinity, Symbol(), 2]
// // arr.toJSON = () => {
// //   return '你失真了'
// // }

// const tojson = JSON.stringify(arr)

// console.log(tojson)



//对象
// const obj = {
//   name: undefined,
//   age: Symbol(),
//   sex: function () { },
//   address: NaN,
//   friend: Infinity,
//   hobbit: 'llm'
// }

// console.log(JSON.stringify(obj))

// //日期类型
// const time = new Date()

// const tojson1 = JSON.stringify(time)
// const tojson = time.toISOString()

// console.log(tojson1)
// console.log(tojson)

//非对象的复杂类型

// const reg = new RegExp("at", 'i')

// const res = JSON.stringify(reg)

// console.log(res)

//循环引用问题
const obj1 = {
  a: null,
  name: 'zh'
}

obj1.a = obj1

const res = JSON.stringify(obj1)
console.log(res)