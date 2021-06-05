// const arr = [1, 2, 3];

let resArr = [4, 5, 6].map(function (item, index, arr1) {

  // console.log(arr1)
  console.log(this === arr1)
  console.log(this)
  return item * 2
}, [1, 2, 3])


console.log(resArr)
