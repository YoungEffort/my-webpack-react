# my-webpack-react

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

## 从0搭建webpack脚手架

### 步骤：
1. 安装node环境
2. 建目录结构
3. 配置package.json并安装必要的开发和生产包
4. webpack配置
5. 配置.babelrc