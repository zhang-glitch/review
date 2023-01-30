// const http = require('http');
// const fs = require('fs');

// http.createServer((request, response) => {
//   // 发送 HTTP 头部
//   // HTTP 状态值: 200 : OK
//   // 内容类型: text/plain
//   response.writeHead(200);

//   // 发送响应数据 "Hello World"
//   fs.readFile('../build/index.html', (err, data) => {
//     if (err) {
//       console.log(err);
//       response.end('错误');
//     } else {
//       response.end(data);
//     }
//   });
// }).listen(3000);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');

/*
  服务器代码
  启动服务器指令：
    npm i nodemon -g
    nodemon server.js

    node server.js
  访问服务器地址：
    http://localhost:3000

*/
const express = require('express');

const app = express();
// express.static向外暴露静态资源
// maxAge 资源缓存的最大时间，单位ms
app.use(express.static('build', { maxAge: 1000 * 3600 }));

app.listen(3000);
