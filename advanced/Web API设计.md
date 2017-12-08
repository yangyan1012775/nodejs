<!--
$theme: gaia
template: gaia
-->


Node.js进阶
API设计与RESTful API<p style="text-align:right;font-size:28px;margin-right:50px;color:#cFc;">:star: by calidion</p>
===
---
什么是API？
===
API是Application programming interface的缩写。
意思是***应用编程接口***。
也就是API是给应用开发人员使用的。
Web里的API通常是指服务器提供给前端或者第三方开发者的接口。

---
API设计的基本原则
===
1. 原子性
即一个API完成一件特定的事情。
比如登录是一个原子性的事情，所以我们可以有login这个接口。
但是我们不会将login拆分成输入密码，检测密码，登录成功三个接口。

2. 准确性
即API的接口名称要与实际相符合。比如登录操作我们会使用/user/login,
/login等相符合的接口名称。

---

3. 独立性
API要体现业务的逻辑，所以API必须保证在逻辑层面的正确。比如我们不能设计出来user/logincreatearticle这样的接口。即要做登录，同时又写文章。我们要将user/login与create/article拆分成至少两个接口。

4. 直观性
API除了要能准确的描述以外，还需要容易阅读。比如将user/login换成是u/l，意义就会模糊。所以API里的单词要准确，清晰，全面。
---
API的命名的一些原则
===
1. 通常以名词开头
2. 可配合动词(尽量避免)
3. 全部使用小写
4. 以"/"分割

示例：
```
/user/login
```
---
RESTful API
===
REST是Representational state transfer的缩写。
中文意思： 可重复表达的状态迁移
提出的人：Roy Fielding
文章地址：[http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm](http://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

为分布式的超媒体系统而设计

![](../images/rest.png)

---
内容
===
1. Uniform Interface
统一接口

2. Stateless
无状态
3. Cacheable
可缓存
4. Client-Server
客户服务器分离模式，任何一个客户端与服务器都是可替换的
---
5. Layered System
分层的系统，客户端不知道他联系的是不是最终服务器
6. Code on Demand (optional)
服务器可以将能力扩展到客户端，如果客户端可以执行的话。这个功能是可选择的。


---
统一接口
===
1. 以资源为基础
每个资源都可以通过URI访问到。
也就是一个个可以认知的资源，比如文档，音乐，视频等信息，都可以通过唯一的URI确定
2. 通过重表达的客户端可以管理原资源
就是我们通过客户端可以修改原资源的状态
3. 返回信息足够描述自己
这样重表达的客户端可以知道如何处理
4. 超媒体是应用状态的引擎
处理以超媒体为基础的状态变化
---
理解
===

![](../images/rest.png)

1. 可重复表达
a. 在服务器端表达，在客户端可重复表达
b. 以JSON表达，以xml可重复表达
2. 状态迁移
a. 从服务器迁移到客户端
b. 从A服务器迁移B服务器（分层系统）

---
RESTful API（即资源命名）
===
1. 创建/插入
```
POST /users
```
2. 读取
```
GET /users
GET /users/1
GET /users/rwx
GET /users?page=2&limit=20
```
3. 更新
```
PUT /users/1
```
---
4. 删除
```
DELETE /users/1
```
5. 多层API
```
GET /users/1/mails
```
6. 其它参数表达或者分页信息
```
GET /users/1?page=1&limit=50&filter=name&name=eirc
```
---
HTTP方法说明
===
1. GET方法是安全方法
不会有副作用
不会修改任何记录
2. PUT和POST有等冥性
就是不管执行多少次都与执行一次的效果是一样的
等冥性如下公式所示：
$$ f(f(x)) = f(x) $$

---
RESTful API存在的问题
===

1. 使用过多的HTTP方法，很多方法大部分程序员并不熟悉
2. 虽然使用了很多的HTTP方法，但是这些方法跟现实比又显得不够用
3. PUT/POST等方法语义接近，区分困难
4. RESTful通过HTTP方法来操作资源的方式并不容易理解，导致大部分程序员不能真正的理解RESTful API的意义，从而无法实践

---

5. 过于学术化，实用性相对较差
6. 将网络底层协议与应用的API结合会造成协议规范与应用API规范的混乱
7. 无状态对于非用户的交互机制来说是方便的，但是对于用户交互来说显得有点繁琐。
8. 无法表达更加复杂的业务逻辑

---
vig api (支持业务的API)
===
[vig规范地址](https://github.com/calidion/vig-api)
目标:
1. 支持session与cookie，也支持token
2. 支持资源表达，更符合业务的表达，不支持静态资源的API化
3. 动作自定义，不再以HTTP方法为准
4. 权限提供业务API，不提供音频，视频等多媒体文件的API
5. 可与RESTful API合作使用

---
vig api规范
===
1. GET用于数据的获取，GET方法不得改变用户的统计信息外的任何数据
2. POST用于数据的更新，删除，添加，可以改变
3. 只使用GET与POST两个HTTP方法
4. 所以有API必须是名词开头，并采用复数形式，不能出现动词
5. 只接收表单提交
6. 返回格式默认JSON

---

7. 统一返回格式。如下:

| 字段名 | 描述 | 备注 |
| --- | --- | --- |
| code | 错误代码 | 0 表示成功, 1表示失败, [详细](https://github.com/Errorable/common) |
| name | 错误名称 |  |
| message | 错误消息 | |
| data | 返回数据 | |

---
保留字
===
1. action
表示操作动作，限用于POST
2. page
表示当前页
3. limit
表示每个分页大小
4. token
表示服务器的token
5. state
表示资料的状态

---

6. from
表示开始时间
7. to
表示结束时间

---
VIG API示例
===
1. 创建/插入
```
POST /users

action=create&name=eric&password=1234
```
2. 读取
```
GET /users     # 读取全部
GET /users/1   # 读取ID为1的用户信息
GET /users/rwx
GET /users?page=2&limit=20&filter=name-eric&age=100
```
---

3. 更新
```
POST /users

action=update&name=eric&password=1234&id=1
# 或者
POST /users/1

action=update&name=eric&password=1234
```
---
4. 删除
```
POST /users

action=delete&id=1
```

5. 用户登录
```
POST /users

action=login&username=eric&password=1234
```
---
6. 多层API
```
GET /users/1/mails
```
7. 其它参数表达或者分页信息
```
GET /users/1?page=1&limit=50&filter=name&name=eirc
```
---
网站URL与API的差别
===
* 网站的URL
1. 通过GET方法获取的
2. 必须是HTML页面
3. 不能修改数据，除非提交表单
4. 只能给浏览器用

---

* 网站的API
1. 可以通过GET或者其它方法获取
2. 数据通常JSON/XML
3. 给所有的能处理数据的终端使用，更加方便的被处理

---






