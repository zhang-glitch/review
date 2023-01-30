
// 定义一个cache_name变量，由于确定后续缓存文件的更新。
const CACHE_NAME = 'cache_v1';
// 监听install事件，用于缓存静态文件
self.addEventListener("install", async (e) => {
  console.log("install==========")
  // 定义一个缓存对象。
  const cache = await caches.open(CACHE_NAME);
  // 想cacheStorage中缓存文件
  await cache.addAll(['/', './01.jpg', './manifest.json', './index.css'])
  // 当上述代码执行完后，才开始安装。
  await self.skipWaiting()
})

// 用于删除过期的缓存
self.addEventListener("activate", async e => {
  console.log("activate========")
  // 获取当前所有的缓存对象
  const keys = await caches.keys();
  keys.forEach(item => {
    if (item !== CACHE_NAME) {
      // 删除过期缓存
      caches.delete(item)
    }
  })
  await self.clients.claim();
})

self.addEventListener("fetch", async e => {
  console.log("fetch=========")
  e.respondWith(webFirst(e.request))
})

async function webFirst (req) {
  try {
    const data = await fetch(req.url);
    return data
  } catch (error) {
    // 从缓存中取
    const cache = caches.open(CACHE_NAME);
    const data = await cache.match(req);
    return data
  }
}