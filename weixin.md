# 微信公共帐号开发
    基于nodejs实现

## 准备工作
- 公共号的类别与注册
- 认证公共号与基本服务的学习
- 熟悉使用公共号测试环境

## 基础知识
### 服务器端开发基础
#### 传输协议
- HTTP/HTTPS

#### 数据传输格式
1. XML
2. JSON

#### 服务器API设计
1. RESTful APIs介绍

#### nodejs服务器端可以选择的框架
1. express
2. koa
3. hiapi
4. sails

### 微信服务器的安全基础
1. 传输安全
   - TLS/SSL
2. 基本的加密原理
3. 中间人攻击
4. CA证书

### 微信服务器的安全验证与传输
对于微信服务器来说，需要保证与其通讯的服务器是可信的。

1. OAUTH
2. 微信消息加密原理

### 微信公共帐号网页开发

1. HTML  
2. CSS  
3. Javascript  
4. weui框架  

## 微信开发  
 
1. Ack服务器（检验服务器)  
  - 原理
  - node-weixin-auth与ack服务器实现
2. 公共号消息处理  
  - 原理
  - node-weixin-message与消息服务器实现
  - 自动回复机器人的开发
3. OAuth实现  
  - 原理
  - node-weixin-oauth与Oauth服务器实现
  - 结合JSSDK实现客户的OAuth
4. 支付的功能实现  
  - 原理
  - node-weixin-pay与微信支付服务器的实现
  - 基于JSSDK实现公共帐号支付功能
5. 客户功能的开发  
  - API介绍
  - node-weixin-message与微信客服功能的实现
  - 搭建客户后台
6. 素材管理  
  - API介绍
  - node-weixin-media与素材管理的实现
7. 公共帐号用户管理  
  - API介绍
  - node-weixin-user实现用户管理
8. 菜单开发  
  - API介绍
  - node-weixin-menu实现对菜单的管理
9. 生成二维码及推广链接  
  - API介绍
  - node-weixin-link介绍与API功能实现
10. JSSDK开发  
  - API介绍与使用
  - 官方WEUI库介绍与使用
