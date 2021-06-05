

var curry = function (fn) {
  //这一步是将传入的参数除了fn以外的参数抽选出来。
  var args = [].slice.call(arguments, 1);
  return function () {
    //将传入的所有的参数连接在一起。
    var newArgs = args.concat([].slice.call(arguments));
    //其实我们分开调用函数，最后也是直接调用了最后一个函数。
    return fn.apply(this, newArgs);
  };
};


function add(x, y) {
  return x + y;
}

let res = curry(add, 3, 5)()
console.log(res)