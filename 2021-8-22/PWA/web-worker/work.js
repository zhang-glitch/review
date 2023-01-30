let total = 0;
for (let i = 0; i < 100000000; i++) {
  total += i;
}
// 这里的self是另一个全局上下文。self就是接受消息的全局对象。
// console.log("++++++++++", self)

self.postMessage({
  total
})

// 关闭worker线程。所以后面的代码不执行。
close();

// 这里的web worker的接收端和发送端都是同一个对象。不像window.postMessage()需要制定发送的origin。
self.onmessage = (e) => {
  console.log(e.data)
}

