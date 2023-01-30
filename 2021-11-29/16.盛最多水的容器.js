/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let arr  = [];
  let maxAreaTemp = 0;
  for(let i = 0; i < height.length; i++) {
    for(j = i + 1; j < height.length; j++) {
      // 找出两个元素的最小值。
      const min = Math.min(height[i], height[j])
      const temp = (j - i) * min
      arr.push(temp)
    }
    // 找出每一次循环的最大值
    maxAreaTemp = Math.max(maxAreaTemp, ...arr);
    arr = [];
  }
  return maxAreaTemp;
};


console.log(maxArea([1,2,1]))


const maxArea1 = function(height) {
  let maxAreaTemp = 0;
  for(let i = 0; i < height.length; i++) {
    for(j = i + 1; j < height.length; j++) {
      // 找出两个元素的最小值。
      const min = Math.min(height[i], height[j])
      const temp = (j - i) * min
      maxAreaTemp = Math.max(temp, maxAreaTemp);
    }
  }
  return maxAreaTemp;
};


console.log(maxArea1([1,2,1,3]))

// 简化的算法，双指针算法。
const maxArea2 = function(height) {
  let maxAreaTemp = 0;
  let left = 0;
  let right = height.length - 1;
  while(left < right) {
    let minHeight = Math.min(height[right], height[left])
    maxAreaTemp = Math.max(maxAreaTemp, (right - left) * minHeight);
    // 谁小移动谁
    if(height[right] > height[left]) {
      left++;
    }else {
      right--;
    }
  }
  return maxAreaTemp;
};

console.log(maxArea2([1,2,1,3]))