// 时间复杂度为ox2
// arr = [1,2,3] target = 3; => [0, 1]
function resultSumIndex(arr, target) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // 或者直接从i+1开始，因为i之前都会通过一遍相加，所以就没必要再从开头开始了。
      if (j === i) {
        continue
      } else {
        total = arr[i] + arr[j]
        if (total === target) {
          // 找到符合条件的
          return [i, j]
        } else {
          // 未找到
          return []
        }
      }
    }
  }
}

console.log(resultSumIndex([7, 8, 3, 4, 5, 6], 5))

// map的实现，时间复杂度为ox

function resultSumIndex1(arr, target) {
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i)
  }

  // 查找
  for (let i = 0; i < arr.length; i++) {
    const restNum = target - arr[i]
    // 判断有这个值，并且不是当前下标对应的值。
    if (map.has(restNum) && i !== map.get(restNum)) {
      return [i, map.get(restNum)]
    }
  }
}

console.log(resultSumIndex1([7, 2, 3, 4, 5, 6], 5))
