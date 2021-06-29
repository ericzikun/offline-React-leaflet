# Readme

1. 后端采用Springboot，分为Springboot服务和瓦片地图两个文件夹，将瓦片地图（roadmap文件）存放在电脑上某个路径下下，并把此路径替换Springboot中的application.properties--DATA_PATH

   <img src="/Users/apple/Library/Application Support/typora-user-images/image-20200726093443738.png" alt="image-20200726093443738" style="zoom:50%;" />

   点击OfflinemapApplication并运行服务即可 默认启动8080端口 ，（后面也可以直接打jar包，终端运行也可以）：

   <img src="/Users/apple/Library/Application Support/typora-user-images/image-20200726093620231.png" alt="image-20200726093620231" style="zoom:50%;" />

2. 前端offline-React-leaflet：cd到文件下：
   * 安装依赖项：```yarn install```
   * 运行项目：```yarn start```