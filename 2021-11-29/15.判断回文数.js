/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if((x + "").length === 1) return true
    console.log("============")
    if(x < 0) return false
    x = x + ''
    arr = x.split('');
    //奇数回文数
    if(x.length % 2) {
      for(let i = 0, j = arr.length - 1; i <= j; i++, j--) {
          if(arr[i] !== arr[j]) {
              return false
          }
      }  
      return true
    }else {
    // 偶数回文数
    // 找到中间那个数和中间前面的那个数
    let next = arr.length / 2;
    let prev = next - 1;
    while(next <= arr.length - 1 && prev >= 0) {
      console.log(arr[next], arr[prev])
        if(arr[next] !== arr[prev]) {
            return false
        }
        next++;
        prev--;
    }
    return true
    }
};

console.log(isPalindrome(1001))