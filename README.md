# gshop
    一个外卖平台的项目

# 项目相关
    1.下载依赖
    yarn install
    2.启动项目
    yarn start
    3.一般访问
    http://localhost:8080/#/msite
    4.打包
    yarn build

# mongodb安装
    启动
    C:\Program Files\MongoDB\Server\3.2\bin
    _> mongod

# 服务端项目下载 
    git clone git@github.com:liuer1211/vue-serve.git
    1.下载依赖
    yarn install
    2.启动项目
    yarn start

# 这个下面是启动mongodb和服务端项目图片，启动本项目后的图片。
  1.本地项目启动结果
  ![image.png](https://liuer1211.github.io/vue_shop/static/img/3.png)
  ![image.png](https://liuer1211.github.io/vue_shop/static/img/6.png)
  ![image.png](https://liuer1211.github.io/vue_shop/static/img/7.png)
  2.服务端启动结果和数据库启动结果
  ![image.png](https://liuer1211.github.io/vue_shop/static/img/4.png)
  ![image.png](https://liuer1211.github.io/vue_shop/static/img/5.png)

# 访问
    在github中设置访问地址，然后即可访问。由于本项目不是纯静态项目，需要服务端支持，只能看到大概样子
   [点我访问](https://liuer1211.github.io/vue_shop/dist/#/)

# 打包
    命令：npm run build
    更改文件位置：config/index.js
    // assetsPublicPath: './',  // 发包
    assetsPublicPath: '/',  // 不发包
    
    # github 快速打开github
    203.208.39.104 assets-cdn.github.com
    199.96.58.157 github.global.ssl.fastly.net

# 知识点
    1.获取地理位置
    2.商品列表展示
        2.1轮播图 
            二维数组
            页面加载完，在进行初始轮播 $nextTick
