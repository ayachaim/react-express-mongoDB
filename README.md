
##npm依赖
-------------------------------
##利用官方脚手架创建的依赖
> ```create-react-app```
> ```npm install express --save```
*git初始化本地仓库后（不初始化会报错）
> ````git init````
> ```git add```
> ```git commit```
> ```npm run eject //释放配置```
> ```npm install //不运行会报错```
> ```npm install express --save```
> *创建server文件夹下的server.js
> *定义端口为8888
> *利用nodemon进行端口热更替  
> ```npm install -g nodemon```
> *安装mongoDB数据库，打开bin文件夹mongodb.exe（windows）
> *安装mongoose操作数据库
> ```npm install mongoose --save```
> *开启nodemon
> ```nodemon 文件名```
> *使用antd-mobile
> ```npm install antd-mobile --save```
> *安装babel-plugin-import
> ```npm install babel-plugin-import --save```   
> 
### 项目心得
>绑定this，bind方法比箭头函数的性能更好，箭头函数每次都会扫描对象
>conbinreducer可以合并多个reduce,并返回一个新的reducer
>connect(mapStateToProps, mapDispatchToProps)（）可以把ui组件链接到外部组件上
>>mapStateToProps建立一个从（外部的）state对象到（UI组件的）props对象的映射关系。
>>mapDispatchToProps建立UI组件的参数到store.dispatch方法的映射
