
async function errorCaptured(asyncFunc) {
  try {
    let res = await asyncFunc()
    return [null, res]
  } catch (e) {
    return [e, null]
  }
}

function asyncFunc() {
  return Promise.resolve('我成功了')
}

let ss = await errorCaptured(asyncFunc)

console.log(ss)