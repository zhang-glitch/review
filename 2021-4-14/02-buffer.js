

const buf = Buffer.alloc(10);

buf[0] = 257; //转化为二进制超过8位后直接取后7位。
console.log(buf)