// let a = 1;
let obj = {
  name: 'zh'
}

setTimeout(() => {
  // a = 2
  obj.name = "llm"
}, 2000)

// exports.a = a
module.exports = obj