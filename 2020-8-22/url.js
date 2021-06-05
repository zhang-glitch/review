//URLSearchParams用来解析参数的
let url = '?name=zh&age=20';
let searchParams = new URLSearchParams(url)
// console.log(searchParams)//map对象
let arr = [...searchParams]

// console.log(arr) //[ [ 'name', 'zh' ], [ 'age', '20' ] ]

// console.log(searchParams.get('name'))
// console.log(searchParams.has('sex')) // false
// console.log(searchParams.has('age')) // true

searchParams.append('sex', 'male')
// console.log(searchParams)//URLSearchParams { 'name' => 'zh', 'age' => '20', 'sex' => 'male' }
// console.log(url)//?name=zh&age=20

// searchParams.delete('sex');
// console.log(searchParams.has('sex')); // false

searchParams.set('age', 22)
// console.log(searchParams)
console.log(searchParams.toString())

// let map = new Map([['name', 'zh']])
// console.log(map)