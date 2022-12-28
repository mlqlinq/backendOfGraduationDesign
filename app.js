// 使用 require 导入koa
const Koa = require("koa"),
    // 导入配置的接口和环境
    { host, port } = require("./utils"),
    // cors跨域资源共享是一种机制，用来允许不同源服务器上的指定资源可以被特定的Web应用访问。
    cors = require("koa2-cors"),
    // koa-body 使用
    { koaBody } = require("koa-body"),
    // 路由
    router = require("./routes/index"),
    // 导入 koa-static 用来访问静态资源
    path = require("path"),
    static = require("koa-static"),
    // 登录验证 jwt 认证模块
    jwt = require("koa-jwt"),
    // jwt 自定义配置：私钥
    config = require("./config/utilToken"),
    // 引入错误处理
    errorHandler = require("./util/errorHandler");

// 创建一个koa对象
const app = new Koa();

// 错误处理
errorHandler(app);

// 注册认证
app.use(
    jwt({
        secret: config.PRIVATE_KEY,
    }).unless({
        path: [/^\/user\/login/, /^\/captcha/, /^\/404/],
    })
)

    .use(koaBody()) // 中间件

    // 跨域
    // 这里cors中间件一定要写在路由之前
    .use(
        cors({
            origin: function (ctx) {
                //设置允许来自指定域名请求
                if (ctx.url === "/") {
                    return "*"; // 允许来自所有域名请求
                }
                return "http://localhost:3060"; //只允许http://localhost:8080这个域名的请求
            },
            maxAge: 5, // 指定本次预检请求的有效期，单位为秒。
            credentials: true, // 是否允许发送Cookie
            allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // 设置所允许的HTTP请求方法'
            allowHeaders: ["Content-Type", "Authorization", "Accept", "Access-Control-Expose-Headers"], // 设置服务器支持的所有头信息字段
            exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], // 设置获取其他自定义字段
        })
    )

    // 注册路由
    .use(router())

    /**
     * 获取静态资源文件夹
     * 这里需要放在路由后面
     * 访问方法：http://127.0.0.1:4090/assets/404_images/404_cloud.png
     * 不需要加 assets ,因为我们已经在下面配置了 根路径 assets，访问时会直接指向它
     */
    .use(static(path.join(__dirname + "/public/assets")))

    // 监听端口
    .listen(port, () => {
        console.log(`启动成功,服务端口为:http://${host}:${port}`);
    });
