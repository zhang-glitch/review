

/**
 *
 * instanceof，表示后者是否在前者的原型链上。
 */

function MyInstanceof(left, right) {
  const prototype = right.prototype;
  left = left.__proto__

  while (true) {
    if (left === null) {
      return false
    } else if (left === prototype) {
      return true
    }
    // 每次循环都找一下上一级的原型对象。如果找到顶部就会为null
    left = left.__proto__
  }
}

console.log(MyInstanceof({ name: "zh" }, Object))// true
console.log(MyInstanceof(["1"], Array))// true