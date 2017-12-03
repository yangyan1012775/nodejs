# Nodejs Web开发

## Nodejs基础

### Nodejs基本介绍
- Nodejs的创造，历史背景与价值
- Nodejs的基本架构与优缺点
- Nodejs的优势场景
- Nodejs的现状与未来

### Nodejs的安装与使用
- Nodejs在各个平台下的安装以及相关的注意事项
- REPL环境的使用
- Nodejs的常规变更

### Nodejs网络编程
- 网络IO模型介绍
- Nodejs与TCP,UDP
- Nodejs与http
- Nodejs下的Web框架

### Nodejs事件模型
- 事件模型介绍
- event包介绍
- 事件的接收与发送

### 异步IO与异步编程
- 高并发与异步IO
- 深刻理解同步，异步，阻塞，非阻塞的含义
- 异步编程与回调地狱(Callback hell)
- 从promise到async/await

### Nodejs内存分配控制
- Nodejs内存分配机制简介
- Nodejs内存泄漏
- 内存使用监控与调试

### 模块
- 核心模块
- 自定义模块
- 模块的引入机制（commonjs, es6 import)
- 模块共享

### npm包机制
- npm基本介绍
- npm包的创作，发布，更新
- npm包本地服务器的架设


### Buffer、流、文件、字符串处理
- 理解什么Buffer是什么
- 理解如何使用Buffer
- 理解Buffer与字符串的差别

## Nodejs Web技术

### express编程介绍
- 基本介绍
- 中间件编写
- 路由编写

### nodejs模板介绍
- jade模板介绍与使用
- ejs模板介绍与使用
- handlerbars模板介绍与使用
- 如何选择模板

### Form数据的处理
- 普通表单获取
- 表单的检验
- 文件上传与处理
- 上传文件的管理与云化

### 数据库(NoSQL, SQL)与ORM
- NoSQL vs SQL
- 如何选择适合你的数据库
- ORM基本介绍
- ORM还是基本库
- Waterline介绍
- Waterline模型的定义
- Waterline的使用

### 用户验证相关
- Web用户验证的基础
- Cookie与Session实现
- 简单的用户登录与退出实现
- 通过OAuth登录或者允许第三方网站登录

### 基于HTTP的实时通讯（Websocket与socket.io介绍）
- HTTP与长连接
- Websocket之前的请求模型
- Websocket的原理，目标与现状
- socket.io对HTTP长连接的封装
- 使用socket.io进行编程

## Nodejs进阶
### Nodejs的调试
- debugger
- node-inspector
- 在chrome上调试nodejs

### 效率工具的介绍
- gulp/grunt
- yeoman

### 多进程与集群的支持
- 多进程与多CPU
- 进程的管理
- 进程的通讯
- cluster模块介绍与使用

### 测试与集成
- 基于mocha编写单元测试
- 基于istanbul的代码覆盖率测试
- 性能测试
- 压力测试
- 代码的持续集成
- 基于CI服务器保证代码的持续集成

### nodejs项目的部署
- 单进程的部署
- 多进程的部署
- 多台机器下的部署
- forever与pm2的介绍


## Nodejs与其它技术

### 基于Nodejs桌面编程介绍
- NodeWebKit与Electron

### Nodejs对前端开发的影响
- bower
- webpack
- browerify
- reactjs,angular2

### Nodejs与移动App编程的关系
- cordova/phonegap/ionic
- reactjs/react native
- nativescript
