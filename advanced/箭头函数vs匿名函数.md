<!--
$theme: gaia
template: gaia
-->


Node.js进阶
箭头函数vs匿名函数<p style="text-align:right;font-size:28px;margin-right:50px;color:#cFc;">:star: by calidion</p>
===
---
定义与形式
===
1. 箭头函数

```
() => {
}
() => a

```

2. 匿名函数
```
funciton () {
}

```
---
语法上的this与anguments
==
1. 在箭头函数里没有自己的this和arguments
```
let a = {
    foo: 42,
    bar: () => {
    console.log(this);
    console.log(arguments);
    //  console.log('Inside `bar`:', this.foo);
    console.log('Inside `bar`:', a.foo);
    },
  }
```

---

2. 在匿名函数里有
```
let a = {
    foo: 42,
    bar: function() {
      console.log(this);
      console.log(arguments);
      console.log('Inside `bar`:', this.foo);
    },
  }
```

---
箭头函数无法new
===
1. 箭头函数无法new
```
> new (() => {});
TypeError: (intermediate value) is not a constructor
> var x = () => {};
> new x(); 
TypeError: x is not a constructor
```
2. 匿名函数可以
```
> new (function() {});
{}
> let f = function() {};
> new f();
f {}
```

---


