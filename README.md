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
- TODO: 如何统一各个组件？（增加一个可发布的依赖包，存放公共组件）

# 注意点：

- 子应用需要部署在主应用的二级域名
