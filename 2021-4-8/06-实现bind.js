function MyBind(context, ...arg) {
  const fn = this;
  context = context || window;
  // if (typeof fn !== 'function') {
  //   throw new Error("this is not an undefined!");
  // }
  // const sym = Symbol();
  // context[sym] = fn;
  return function (...arg1) {
    // context[sym](...arg)
    fn.call(context, ...arg, ...arg1)
  }
}

Function.prototype.MyBind = MyBind

Function.prototype.myBind = function (context) {
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
const a = 0;
function foo(name) {
  this.name = name
  // 这里必须的加上this
  console.log(this.a)
}


obj = { a: 8 }

// foo.MyBind(obj)()


// 使用new操作符
// const bar = foo.MyBind(obj, "zh");
const bar = foo.myBind(obj, "zh");
const p = new bar();

console.log(p.name)