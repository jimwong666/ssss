# micro app

based on react, qiankun, lerna, dumi and more

- ~~TODO: immutable => immutability-helper~~
- ~~TODO: home page style fix~~
- TODO: creat an application launcher based on electron(thinking...)
- TODO: micro app don't load when main app trigger hot reload(https://github.com/umijs/qiankun/issues/830, no solution... )
- ~~TODO: react-loadable has problem~~(switch to suspense and lazy)
- ~~TODO: main app route menu doesn't match to micro app route~~(use exact mode in react-route)
- ~~TODO: home page has some problem on styles~~(add global loading)
- TODO: whether to specify the protocol(http/https)
- TODO: 生产环境关闭子应用入口
- ~~TODO: 如何统一各个组件？（增加一个可发布的依赖包，存放公共组件）~~（20211014 resolved✌✌✌ 坑比较多）

# 注意点：

- 子应用需要部署在主应用的二级域名

## 介绍

### 本项目使用的技术概括

1. 首先是底层的依赖：node、express、npm、webpack、ejs、gulp、react、antd、lerna、qiankun、pm2 等
2. 本项目也将会使用了 [郭兆东](https://github.com/Bubble2) 开发的基于 antd 的基础组件库
3. 在上一条基础组件之上，由于此项目是一个基于 qiankun 的微前端项目，所以又通过 lerna 开发了一个业务组件库，供各个子应用共享使用，达到效率和统一（不然各个子项目组件都重写一边太反人类了）
4. 文档系统基于 dumi
