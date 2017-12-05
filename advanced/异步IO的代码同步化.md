<!--
$theme: gaia
template: gaia
-->


Node.js进阶
异步IO的代码的同步化<p style="text-align:right;font-size:28px;margin-right:50px;color:#cFc;">:star: by calidion</p>
===
---
回调函数
===
1. 是一种高效的函数调用方式
```
function(req, res, next) {
// next 回调函数
}
```
2. 回调函数适合用事件驱动的场景
```
obj.on("event1", function() {
});
```

3. 回调可以降低代码的耦合性
回调函数回调时，不需要知道之前的函数的内容 

4. 回调函数在异步调用时容易让执行顺变的不可区分
会形成回调地狱或者回调金字塔等问题

---
回调地狱
===
1. 对于为了防止阻塞而采用异步的IO模型来讲，
回调并不是个理想的形式
因为通常调用后，后继的代码需要等IO完成才能继续
2. 也就是回调地狱形成的原因：
异步代码依赖另一个异步代码
```
function abc(q, b, function() {
      fs.readdir(file, function (dir) {
         ....
      }
  }
}
```
---
如何防止回调地狱（Promise)
===
1. 方法考虑将代码线性化
即将回调函数通过某种方案写成是线性的
这种方案后来叫成是Promise
2. 提供线性化方法then
通过Promise.then方法实现了线性化
3. 链式调用
Promise.then(f1).then(f2).then(..)...then(fn)
4. 从而获得比较清楚的调用逻辑

---
如何使用Promise
===
1. 创建一个Promise

```
const p = new Promise(function(resolve, reject) {
  return resolve(1);
}）
```
resolve，表示问题解决，返回值。
reject，表示出错，返回错误。

2. 执行链式调用.then

```
p.then(function() {
 return new Promise();
}).then(f1).then(f2)...
```
---
async/await
===
终极解决方案

```
function timing(ms) {
	ms = ms || 1000;
  return new Promise(function(resolve, reject) {
	  setTimeout(() => {
		  resolve(ms);
	  }, ms);
  });
}
async function timed() {
   const ms = await timing();
	console.log(ms + " ms passed!");
}

timed()
```
---

比较
===
1. 回调
适合事件等不需要等待返回的工作
2. Promise
适合必须返回后才能继续的工作
3. async/await
让异步的代码看起来与同步的代码是一样的。需要与Promise配合













