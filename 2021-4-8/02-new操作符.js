
/**
 * 
 * @param {*} custructor 
 * @param  {...any} arg 
 * 
 * 1.创建一个对象
 * 2.绑定prototype
 * 3.改变this指向
 * 4.返回新的对象
 * 
 */

function MyNew(fn, ...arg) {
  // 1.创建一个对象
  const newObj = {}
  // 2.绑定prototype
  newObj.__proto__ = fn.prototype
  // 3.改变this指向
  fn.call(newObj, ...arg)
  // 4.返回新的对象
  return newObj
}


class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }



}

// const p = new Test("zhllm", 20)
// console.log(p)
const o = MyNew(Test, "zhllm", 20);
console.log(o)