

function curry(fn, args) {
  //访问fn函数中参数的个数。
  let length = fn.length;
  args = args || []
  return function () {
    let _args = args.slice(0), arg, i;
    for (i = 0; i < arguments.length; i++) {
      //将第二个函数中的参数加入到第一个参数中去。
      arg = arguments[i];
      _args.push(arg)
    }
    //比较总的参数和fn参数。
    if (_args.length < length) {
      //如果参数一致小于他，那么该函数将一直不会被执行。
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args)
    }
  }
}


let fn = curry(function (a, b, c) {
  console.log([a, b, c])
})

fn("a", "b", "c")
fn("a")("c", "b", "d")