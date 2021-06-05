// nodejs中，每一个js文件都在一个自执行函数中，所有的变量都是局部变量。
// 我们可以通过不带又标识符声明变量，来验证。

a = 0;

console.log(arguments.callee + "S");
console.log(global);