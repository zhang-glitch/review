
// 导出对象。导出的是地址值。他改变还会影响导出的值
const obj = {
  a: {
    name: 'zh'
  }
}




module.exports = obj
obj.a.name = "llm"


console.log("obj------------a", obj)

// 导出基本类型的值

// let anum = 0;

// module.exports = anum //这里虽然导出了值发生了变化。但是b.js文件的导入值不会发生变化。


// anum = 9;