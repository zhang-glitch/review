
async function errorCaptured(asyncFunc) {
  try {
    let res = await asyncFunc()
    return [null, res]
  } catch (e) {
    return [e, null]
  }
}

function asyncFunc() {
  return Promise.resolve('ζζεδΊ')
}

let ss = await errorCaptured(asyncFunc)

console.log(ss)