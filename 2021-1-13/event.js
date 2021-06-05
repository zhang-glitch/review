const EventEmmiter = require('events');

// 监听事件
// const bus = new EventEmmiter();

// function clickHanlde(args) {
//   console.log("监听到click事件", args);
// }

// bus.on("click", clickHanlde);

// setTimeout(() => {
//   bus.emit("click", "coderwhy");
//   bus.off("click", clickHanlde);
//   bus.emit("click", "kobe");
// }, 2000);

const emitter = new EventEmmiter();
emitter.once('click', (args) => {
  console.log("监听到事件", args);
})

setTimeout(() => {
  emitter.emit('click', 'coderwhy');
  emitter.emit('click', 'coderwhy99');
}, 2000);