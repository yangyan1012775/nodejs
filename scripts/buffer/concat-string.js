const buf1 = Buffer.from("我的", "utf8");
const buf2 = Buffer.from("家乡", "utf8");
const buf3 = Buffer.from("最美", "utf8");
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);

const bufferArray = [];
bufferArray.push(buf1);
bufferArray.push(buf2);
bufferArray.push(buf3);

const bufA = Buffer.concat(bufferArray, totalLength);

console.log(bufA);

console.log(bufA.length);
console.log(String(bufA));
