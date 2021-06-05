
//一层判断函数
const cycle = function (obj) {
  for (let prop in obj) {
    if (obj[prop] == obj) {
      return true;
    }
  }
  return false;
}

const obj1 = {
  a: null,
  name: 'zh'
}

obj1.a = obj1

console.log(cycle(obj1))


//多层判断函数。
function recycle(sonObj, obj) {
  let key = Object.keys(obj)
  // let arrObj = []
  // for (let item of key) {
  //   if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
  //     arrObj.push(item)
  //   }
  // }
  key.forEach(item => {
    if (obj[item] == obj) {
      if (Object.prototype.toString.call(obj[item]) === "[object Object]") {
        return recycle(obj[item])
      } else {
        return true
      }
    } else {
      return false
    }
  })
}

var a = {
  b: {
    c: {}
  }
};

a.b.c.d = a;

console.log(recycle(a));