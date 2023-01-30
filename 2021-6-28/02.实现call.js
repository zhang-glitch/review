function fn () {
  console.log("this", this)
}

// 参数一： this指向的对象。
// 参数二： 函数的参数。


function myCall (obj, ...args) {
  const fn = this;
  obj = obj || window;
  if (typeof this !== 'function') {
    console.log("it not is function")
  }
  const sym = Symbol();
  obj[sym] = fn;
  obj[sym](...args);
  delete obj[sym]
}


Function.prototype.myCall = myCall;
const foo = {
  name: 'zh'
}

fn.myCall(foo, 1)
