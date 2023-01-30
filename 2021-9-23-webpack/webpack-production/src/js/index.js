import '../css/a.css';
import $ from 'jquery';
console.log("$", $)


function add (x, y) {
  return x + y;
}

new Promise((resolve) => {
  setTimeout(() => {
    resolve("'''''");
  }, 1000);
});
document.getElementById("btn").onclick = () => {
  import(/* webpackChunkName: "a" webpackPrefetch: true*/"./a").then(({ mul }) => {
    console.log(mul(10, 10))
  }).catch(err => {
    console.log("错除了")
  })
}


console.log(add(1, 2));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // 这个文件自动生成
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log("注册成功");
    }).catch(registrationError => {
      console.log("注册失败");
    });
  });
}
