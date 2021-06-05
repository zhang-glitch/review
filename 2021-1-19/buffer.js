// const buf = Buffer.from("张");

// console.log(buf);//<Buffer 41><Buffer e5 bc a0>

// const buffer3 = Buffer.from("张昊", 'utf16le');
// console.log(buffer3);//<Buffer 20 5f 0a 66>

// const str = buffer3.toString('utf8');
// console.log(str); // _f



// alloc
const buf = Buffer.alloc(8);
buf[0] = 0x78;//给buf赋值只能表示为16进制。如果其他进制的数，则内部会转化为16进制数。
buf[1] = 78;
console.log(buf);//<Buffer 78 4e 00 00 00 00 00 00>
