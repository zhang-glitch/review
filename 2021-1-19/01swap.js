
// 和java函数传递值的思想是一样的。

function swap(m, n) {
  let temp = m;
  m = n;
  n = temp;
}


let m = 3;
let n = 4;
swap(m, n);


console.log(`m${m}n为${n}`);
let obj = {
  m: 3,
  n: 4
}

function swap1(obj) {
  let temp = obj.m;
  obj.m = obj.n;
  obj.n = temp;
}
swap1(obj);

console.log(`m${obj.m}n为${obj.n}`);