# 安装 koa-bodyparser
这个中间件可以将post请求的参数转为json格式返回；
`npm install --save koa-bodyparser`

# 开始写接口之前，我们安装一下路由 Koa-router
Koa-router是 koa 的一个路由中间件，它可以将请求的URL和方法（如：GET 、 POST 、 PUT 、 DELETE 等） 匹配到对应的响应程序或页面。
`npm install koa-router`

# 安装中间件 koa2-cors
`npm i koa2-cors`
cors跨域资源共享是一种机制，用来允许不同源服务器上的指定资源可以被特定的Web应用访问。

# 安装中间件 nodemon 用于node项目热部署

`npm i nodemon ` 

# 安装 svg-captcha 用于生成图片验证码

`npm i svg-captcha`

# 安装 jsonwebtoken 以及 koa-jwt 用于生成token ，操作token

`npm i jsonwebtoken koa-jwt`

# 安装 koa-static 用来访问后端的静态资源，例如 图片
`npm install koa-static`

# 安装 mime-types 用于返回静态资源
`npm i mime-types`

# npm: -S -D -g
-g:安装在你这台设备上的全局插件,只有在我们的设备上才能使用

-D:
这个插件只安装在本项目(本文件夹中)中;
代表这个插件是开发中才需要用到的,发布到线上不需要它;

-S: (默认)
这个插件只安装在本项目(本文件夹中)中;
代表这个插件在线上也需要用到;
