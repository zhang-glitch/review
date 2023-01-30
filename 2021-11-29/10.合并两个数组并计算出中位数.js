/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...nums1, ...nums2];
  arr.sort((n1, n2) => n1 - n2);
  const length = arr.length;
  if(length % 2 === 0) {// 表示偶数个数
    return (arr[(length / 2) - 1] + arr[length / 2]) / 2
  } else { // 表示奇数个数
    return arr[Math.floor(length / 2)]
  }
};

console.log(findMedianSortedArrays([1,2], [3,4]));