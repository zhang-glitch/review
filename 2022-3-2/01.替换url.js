const queryString = require("querystring");

// 输入
const url = 'https://www.nowcoder.com/discuss/v2/post?type=0&key=test'
// key = 'abcd'
// // 输出
// res = 'https://www.nowcoder.com/discuss/v2/post?type=0&key=abcd'
const urlParse = queryString.parse(url);
let res = ""
urlParse.key = "abcd";
for(let key in urlParse) {
  res = res + key + "=" + urlParse[key] + "&"
}

console.log(res.slice(0, res.length - 1))


// 写代码用到了for in，问与for of的区别，答到了原型链上，顺着就让手写了个es5的类的继承；又问prototype.constructor的作用，不写会发生什么

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function() {
  console.log("say")
}


function Son(name, age) {
  Person.call(this, name, age)
}

Son.prototype = Object.create(Person.prototype);
// 改变构造函数名称
Son.prototype.constructor = Son


const son = new Son("zh", 22);
console.log(son.__proto__.constructor)
son.say()
