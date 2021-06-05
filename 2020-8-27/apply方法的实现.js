function selfApply(context, arr) {
  //这一步等于this，但是this是一个对象呀。
  //又误会了这个this了，其实他表示的只是Function类的一个实例，即就是调用的函数而已。
  let func = this;
  console.log(this)// [Function: sayName]
  context = context || window;
  if (typeof func !== 'function') throw new TypeError('this is not a function')
  let caller = Symbol('caller')
  context[caller] = func
  let res;
  if (!arr) {
    res = context[caller]()
  } else {
    res = context[caller](...arr)
  }
  // 执行完毕，删除传入context对象上添加的this方法删除。防止污染context对象。
  delete context[caller]
  return res
}

Function.prototype.selfApply = selfApply;

let name = 'llm'
let obj = {
  name: 'zh'
}

function sayName(a, b) {
  console.log(this.name, a, b)
}

sayName.selfApply(obj, [1, 2])