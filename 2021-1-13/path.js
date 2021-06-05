const path = require("path");

const myPath = '/Users/coderwhy/Desktop/Node/课堂/PPT/01_邂逅Node.pdf';

// dirname：获取文件的父文件夹；
// basename：获取文件名；
// extname：获取文件扩展名；

const dirname = path.dirname(myPath);
const basename = path.basename(myPath);
const extname = path.extname(myPath);

console.log(dirname); // /Users/coderwhy/Desktop/Node/课堂/PPT
console.log(basename); // 01_邂逅Node.pdf
console.log(extname); // .pdf

// 如果是加了"/",拼接的是绝对路径。反之是拼接当前文件的父级目录。并且直接忽略加"/"的前面的路径。
console.log(path.resolve("../p", '../abc'))