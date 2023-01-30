
/**
  他的实现原理就是创建一个数组，控制行数，将对应行数的元素，追加到对应的数组位置。
 */
function zType(s, num) {{
  // 先创建一个给定行数的数组，然后用空字符串填充
  const arr = new Array(num).fill("");
  let flag = true; // true表示向下
  let temp = 0;
  for(let i in s) {
    // if(temp === 0) {
    //   arr[0] += s[i]
    // }else if(temp === 1){
    //   arr[1] += s[i]
    // }else if(temp === 2) {
    //   arr[2] += s[i]
    // }
    arr[temp] += s[i]
    // 控制是向上，还是向下
    if(temp === num - 1) {
      flag = false
    }
    if(temp == 0) {
      flag = true
    }
    // 控制向上向下时，添加的位置。
    if(flag) {
      temp++;
    }else {
      temp--;
    }
  }
  return arr.join("\n")
}} 

console.log(zType("paypalishiring", 3));