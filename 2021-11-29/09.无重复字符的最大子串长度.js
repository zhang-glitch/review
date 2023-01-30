
// 他的思路就是循环字符串，创建一个新数组，一步步将字符串中的字符加入到数组中，如果数组存在该元素，那么将在头部删除该字符，shift()。然后继续循环。

function notRepeatedStrLength(str) {
  const arr = [];
  let count = 0;
  let maxCount = [];
  // 设置保存删除后的元素
  const symbolId = Symbol();
  for(let i in str) {
    if(!arr.includes(str[i])) {
      arr.push(str[i])
    }else {
      const firstIndex = arr.indexOf(str[i]);
      arr[firstIndex] = symbolId;
      arr.push(str[i])
    }
  }
  
  // 如何找到两个symbol相差了多少个字符。
  for(let i in arr) {
    if(arr[i] === symbolId) {
      count = 0;
    }else {
      count++;
    }

    maxCount.push(count);
  }

  return Math.max(...maxCount)
}

// console.log(notRepeatedStrLength('opsdp123456'))
console.log(notRepeatedStrLength("abcabcbb"))


/**
  for循环会存在问题，使用while循环。
 */
function notRepeatedStrLength1(str) {
  const arr = [];
  let res = 0;
  for(let i = 0; i < str.length; i++) {
    if(arr.includes(str[i])) {
      i = i - 1;
      arr.shift()
    }else {
      arr.push(str[i])
    }
    res = res > arr.length ? res : arr.length;
  }
  return res
}

console.log(notRepeatedStrLength1("abcabcbb"))



/**
  通过map来实现
 */
function notRepeatedStrLength2(str) {
  const map = new Map();
  let res = 0;
  for(let i = 0; i < str.length; i++) {
    if(map.has(str[i]) && map.get(str[i]) < i) {
      res = Math.max(res, i - map.get(str[i]))
    }else {
      map.set(str[i], i) // 存储元素值和下标。
    }
  }
  return res;
}

console.log(notRepeatedStrLength2("abcabcbb"))

/**
  实现思路：将字符串元素循环放入到数组中，判断是否有存在的元素，然后删除存在元素之前的全部元素。每次循环都要统计一下数组中的长度，直到最后。
 */

function notRepeatedStrLength3(str) {
  const arr = [];
  let max = 0;
  for(let i = 0; i < str.length; i++) {
    if(arr.includes(str[i])) {
      arr.splice(0, arr.indexOf(str[i]) + 1);
    }
    arr.push(str[i]);
    max = Math.max(max, arr.length);
  }
  return max;
}

console.log(notRepeatedStrLength3("abcabcbb"))
