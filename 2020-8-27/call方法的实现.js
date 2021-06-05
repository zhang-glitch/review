const selfCall = function (context, ...args) {
  //这一步等于this，但是this是一个对象呀。
  //又误会了这个this了，其实他表示的只是Function类的一个实例，即就是调用的函数而已。
  let func = this
  context || (context = window)
  if (typeof func !== 'function') throw new TypeError('this is not a function')
  let caller = Symbol('caller')
  context[caller] = func
  let res = context[caller](...args)
  delete context[caller]
  return res
}

Function.prototype.selfCall = selfCall
let name = 'llm'
let obj = {
  name: 'zh'
}

function sayName() {
  console.log(this.name)
}

sayName.selfCall(obj)

