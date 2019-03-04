# vue-demo


## About
vue-demo是基于vue+element-UI+node的SPA单页面应用。<br>
注意：该项目可能不支持低版本浏览器(如 ie)
![image](https://github.com/kdk007/kdk/blob/master/images/1.png)
![image](https://github.com/kdk007/kdk/blob/master/images/2.png)
![image](https://github.com/kdk007/kdk/blob/master/images/3.png)

## 前序准备
你需要在本地安装 node 和 git。

## 开发
克隆项目<br>
git clone https://github.com/kdk007/kdk.git<br>
安装依赖<br>
npm install<br>
建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题<br>
npm install --registry=https://registry.npm.taobao.org<br>
启动服务<br>
npm run dev(启动后切记不要关闭cmd窗口)

## 发布
npm run bulid (生成打包之后的项目文件,此文件主要用于项目部署)。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
