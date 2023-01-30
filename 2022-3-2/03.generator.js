// 1.生成器来替代迭代器
function* createArrayIterator(arr) {

  // 3.第三种写法 yield*
  // yield* arr

  // 2.第二种写法
  // for (const item of arr) {
  //   yield item
  // }
  
  // 1.第一种写法
  for(let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const names = ["zh", "llm", "zhllm"]
const namesIterator = createArrayIterator(names)

console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
console.log(namesIterator.next())
