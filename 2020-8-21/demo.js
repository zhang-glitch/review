// let obj = { a: 1, b: { name: 'zh' } }

// let obj1 = { ...obj }

// //主要认识扩展运算符只是一层拷贝，浅拷贝而已
// console.log(obj1.b === obj.b)

Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]
let objArr = {
  0: 'zh',
  1: 'llm',
  2: 'jcl',
  // length: 3
}

objArr.length = 3

let arr = [...objArr]

console.log(arr)

// console.log(Array.from(objArr))