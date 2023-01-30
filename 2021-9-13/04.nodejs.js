// 这个变量不是global的属性
// var name = 'oo';



// console.log("global", global);


// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });


// console.log(process)
const fs = require("fs")
const inputStream = fs.createReadStream('./04.nodejs.js');
const outputStream = fs.createWriteStream('./04.nodejs.js');
console.log(outputStream)