let p3 = new Promise((resolve, reject) => {
    throw('报错') // 直接调用reject。
})
console.log('p3', p3)