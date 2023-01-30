/**
 * @param {string} s
 * @return {string}
  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。

  对于字符串来说，每一个字符都可以作为回文串的中心点（回文串的中心点的意思是从中间向两边扩散开来）
  既然每个一字符都可以作为回文串的中心点，回文串又有奇数回文串和偶数回文串
  遍历字符串的每个字符，分别对奇数回文串和偶数回文串取最长的
 */
/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function (s) {
//   // 思路：从中间开始向两边扩散来判断回文串
//   /**
//    *
//    * @param {*} s
//    * @param {*} l 左边界
//    * @param {*} r 右边界
//    */
//   let palindrome = (s, l, r) => {
//     while (l >= 0 && r < s.length && s[l] == s[r]) {
//       // 向两边展开
//       l--;
//       r++;
//     }
//     // 返回以s[l]和s[r]为中心的最长回文串
//     return s.substr(l + 1, r - l - 1);
//   };
//   let res = "";
//   for (let i = 0; i < s.length; i++) {
//     // 以s[i]为中心的最长回文串
//     let s1 = palindrome(s, i, i);
//     // 以s[i]和s[i+1]为中心的最长回文串
//     let s2 = palindrome(s, i, i + 1);
//     res = res.length > s1.length ? res : s1;
//     res = res.length > s2.length ? res : s2;
//   }
//   return res;
// };

// console.log(longestPalindrome("babad"));


// 自己的实现

function longestP(s) {
  let res = ''
  // 查找函数
  const findStr = (s, l, r) => {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.slice(l, r);
  }
  for(let i in s) {
    // 当奇数对称时
    // 传入相同的初始下表
    let r1 = findStr(s, i, i) || '';
    
    // 当偶数对称时
    // 传入不同的初始下标
    let r2 = findStr(s, i, i + 1) || '';
    res = res.length > r1.length ? res : r1
    res = res.length > r2.length ? res : r2
  }
  return res
}

console.log(longestP("babad"));