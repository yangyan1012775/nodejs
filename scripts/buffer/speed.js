// 1. safe
//
let MAX = 1000;
let start;
let end;
let str1, str2
// safe alloc
start = new Date();
console.log("safe");
console.log(start.getTime());
// 执行内存分配
Buffer.alloc(10000)
end = new Date();
console.log(end.getTime());
diff = end.getTime() - start.getTime();
console.log(diff);

// unsafe alloc
console.log("unsafe");
start = new Date();
console.log(start.getTime());
// 执行内存分配
Buffer.allocUnsafe(10000)
end = new Date();
diff = end.getTime() - start.getTime();
console.log(end.getTime());
console.log(diff);
