

// 测试一
const obj = {}
function fn () {
  return () => {
    console.log(this)
  }
}

fn.call(obj)()

// 测试二
const o = {
  name: 'zh',
  // fn () {
  //   return () => {
  // 这个this不会改变
  //     console.log("this", this)
  //   }
  // }
  fn () {
    return function () {
      // 这个this会改变
      console.log("this", this)
    }
  }
}

o.fn()()


// 测试三
const third = "ppp"
{
  let third = 'zh';
  const fn = () => {
    console.log("this", this.third) // undefined
  }

  fn()
}