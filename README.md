# 安装 koa-bodyparser

这个中间件可以将 post 请求的参数转为 json 格式返回；

```
npm install --save koa-bodyparser
```

# 安装 koa-session

session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session保存在服务器上。

当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似于key,value的键值对， 然后将key(cookie)
返回到浏览器(客户)端，浏览器下次再访问时，携带key(cookie)，找到对应的session(value)。 客户的信息都保存在session中。

```
npm install koa-session --save
```

# 开始写接口之前，我们安装一下路由 Koa-router

Koa-router 是 koa 的一个路由中间件，它可以将请求的 URL 和方法（如：GET 、 POST 、 PUT 、 DELETE 等） 匹配到对应的响应程序或页面。

```
npm install koa-router
```

# 安装中间件 koa2-cors

cors 跨域资源共享是一种机制，用来允许不同源服务器上的指定资源可以被特定的 Web 应用访问。

```
npm i koa2-cors
```

# 安装中间件 nodemon 用于 node 项目热部署

```
npm i nodemon
```

# 安装 svg-captcha 用于生成图片验证码

```
npm i svg-captcha
```

# 安装 jsonwebtoken 以及 koa-jwt 用于生成 token ，操作 token

```
npm i jsonwebtoken koa-jwt
```

# 安装 koa-static 用来访问后端的静态资源，例如 图片

```
npm install koa-static
```

# 安装 mime-types 用于返回静态资源

```
npm i mime-types
```

# 安装 koa-compress 实现网页 gizp 压缩

## 可以加快网页的加载速度。在 Koa2 中我们可以使用 koa-compress 开启服务器 Gzip 压缩功能。这样服务器就会对网页进行压缩。让我们可以更快速的打开网站。

```
npm install koa-compress --save
```

# npm: -S -D -g

-g:安装在你这台设备上的全局插件,只有在我们的设备上才能使用

-D: 这个插件只安装在本项目(本文件夹中)中; 代表这个插件是开发中才需要用到的,发布到线上不需要它;

-S: (默认) 这个插件只安装在本项目(本文件夹中)中; 代表这个插件在线上也需要用到;
