# SSSS

## TODO:

- ~~TODO: immutable => immutability-helper~~
- ~~TODO: home page style fix~~
- TODO: creat an application launcher based on electron(thinking...)
- TODO: micro app don't load when main app trigger hot reload([https://github.com/umijs/qiankun/issues/830](https://github.com/umijs/qiankun/issues/830), no solution... )
- ~~TODO: react-loadable has problem~~(switch to suspense and lazy)
- ~~TODO: main app route menu doesn't match to micro app route~~(use exact mode in react-route)
- ~~TODO: home page has some problem on styles~~(add global loading)
- TODO: whether to specify the protocol(http/https)
- TODO: 生产环境关闭子应用入口
- ~~TODO: 如何统一各个组件？（增加一个可发布的依赖包，存放公共组件）~~（20211014 resolved✌✌✌ 坑比较多）

## Attention:

- 子应用需要部署在主应用的二级域名

## introduction:

based on react, qiankun, lerna, dumi and more

### 技术概括

1. 首先是底层的依赖：node、express、npm、webpack、ejs、gulp、react、antd、lerna、qiankun、pm2 等
2. 本项目也将会使用了 [Bubble2](https://github.com/Bubble2) 开发的基于 antd 的基础组件库
3. 在上一条基础组件之上，由于此项目是一个基于 qiankun 的微前端项目，所以又通过 lerna 开发了一个业务组件库，供各个子应用共享使用，达到效率和统一（不然各个子项目组件都重写一边太反人类了）
4. 文档系统基于 dumi

### Getting Started

#### 安装依赖

```
$ npm run install
```

#### 启动应用

```
$ npm run all:fe:dev // 启动所有前端应用（开发环境）
$ npm run all:fe:build // 打包所有前端应用（生产环境）
$ npm run all:server // 启动所有node应用（开发环境）
$ npm run all:server:dev // 启动所有node应用（生产环境）
```

#### 其他命令

````
$ npm run prettier // 格式化所以代码
$ npm run eslint // 代码语法等校验（js,jsx,tsx,md,json）
$ npm run stylelint // 样式代码语法等校验（css,scss,less）
$ npm run dumi:dev // 预览文档（开发环境）
$ npm run dumi:build // 打包文档（生产环境）
$ npm run build:aeps-rc // 打包aeps-rc组件
$ npm run publish // 发布组件到npm（网络大多数时候是不同的，原因不详，这时使用```npm publish --access public```发布）
$ npm run commit // commit代码
````

#### 代码提交步骤

1. 先 `git add .` 将所有文件添加到暂存区
2. 再 `npm run commit` 根据命令行提示一步步完成需要确认的信息
3. 走后 `git push` 推送到 git
