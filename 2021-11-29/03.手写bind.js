function myBind(obj, ...args1) {
  // 保存调用函数的this
  const fn = this;
  const thisKey = Symbol();
  obj[thisKey] = fn;
  return function(...args2) {
    const args = [...args1, ...args2]
    obj[thisKey](...args)
  }

}

const obj = {
  name: 'zh'
}


function foo(...args) {
  console.log("this", this.name, args)
}

Function.prototype.myBind = myBind

// foo.bind(obj)()
foo.myBind(obj)("llm", "jcl")