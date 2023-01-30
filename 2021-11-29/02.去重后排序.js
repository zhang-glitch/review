//  [1,1,2,'1',55,-1,0]

function deleteAndSort(arr) {
  // 先去重
  const arrSet = new Set(arr);
  arr = [...arrSet];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}
console.log(deleteAndSort([55, -1,1,1,'1',1,1,2]))