# my-webpack-react
1. [参考链接](https://blog.csdn.net/pcaxb/article/details/82014500)
2. 参考react项目（比如：create-react-app创建的项目）

### 目录结构
```
|--my-webpack-react  项目
    |--build    编译后的文件
    |--config   webpack配置文件
        |--webpack.dev.config.js     开发环境webpack配置
        |--webpack.prod.config.js    生产环境webpack配置
    |--node_modules   所有的依赖和插件
    |--src   项目源码
        |--assets  静态文件
        |--components  公共组件
        |--http        网络请求
        |--pages       页面
        |--router      路由
        |--utils       工具
        |--index.js    程序入口
    |--.babelrc        babel配置
    |--.gitignore
    |--index.html  
    |--package.json    包管理记录
    |--README.md
```    

## 目标：从0搭建webpack脚手架---可到处复用

### 步骤：
1. 安装node环境
2. 建目录结构
3. 配置package.json并安装必要的开发和生产包
4. webpack配置
5. 配置.babelrc

### 进度
1. 提交初始主体结构
2. 配置开发环境webpack，并启动起本地开发服务---提交开发webpack配置
    1. 在package.json里面配置webpack-dev-server的启动cmd(参考官方配置文档和别人的blog)
        [官网](https://www.webpackjs.com/configuration/dev-server/#devserver)
        [参考链接](https://segmentfault.com/a/1190000006670084)
    2. 配置启动的index.html
        [官网](https://www.webpackjs.com/plugins/html-webpack-plugin/)
        [参考链接](https://segmentfault.com/a/1190000013883242)
    3. 配置babel
        https://www.jianshu.com/p/329e4dccd660
    问题：用了es6的结构赋值，误认为是babel没编译好解构赋值，一直在找babel的问题。最后，更改es6为es5语法，发现编译同样未通过，证实不是babel编译问题，最终定位到自己语法写错，然后解决了问题。---总结：这次解决问题发现在找babel过程中浪费了很多时间，原因在于自己定位问题失误，以后必须精确定位问题在针对处理问题，可节省大量不必要的时间开销。
3. 配置生产打包环境webpack---提交生产打包webpack配置