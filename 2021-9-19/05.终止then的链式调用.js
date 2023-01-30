new Promise((resolve, reject) => {
  // resolve("111")
  reject("222")
}).then(data => {
  console.log(data)
  // return new Promise(_ => { })
}, err => {
  console.log(err)
  // return {
  //   name: 'zh'
  // }
  return new Promise(_ => { })
}).then(_ => {
  console.log("这里将不会在执行。", _)
})