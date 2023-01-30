const arr = [-2, 11, -4, 13, -5, -2];


function fn(arr) {
  const tempArr = [];
  let temp = 0;
  let flag = false;
  let start = 0;
  let end = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0 || flag) {
      start = i;
      flag = true;
      temp += arr[i];
      tempArr.push(temp);
    }else {
      continue;
    }
  }
  const max = Math.max(...tempArr);
  for(let j = 0; j < tempArr.length; j++) {
    if(max === tempArr[j]) {
      end = start + j;
    }
  }
  console.log("子段为", end - start, "最大子段和", max)
}
fn(arr)