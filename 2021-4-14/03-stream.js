const fs = require("fs");




const ws = fs.createWriteStream("hello.txt");

// 这里只是每个事件的监听
ws.on("open", () => {
  console.log("刘打开了")
})

ws.on("close", () => {
  console.log("刘关闭了")
})


ws.write("写入数据，，，，")
ws.write("写入数据，，，，")
ws.write("写入数据，，，，")
ws.write("写入数据，，，，")
ws.write("写入数据，，，，")

// 这里是真正的关闭操作
ws.end();

fs.createReadStream("hello.txt")