/**
 * 1、cookie数据存放在客户的浏览器上，session数据放在服务器上。
 * 2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗,
 * 考虑到安全应当使用session。
 * 3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能,
 * 考虑到减轻服务器性能方面，应当使用COOKIE。
 * 4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
 */
// session 配置
const sessionConfig = {
    key: "koa:sess",
    maxAge: 86400000, // session 过期时间，以毫秒ms为计算单位(默认 is 1 days)
    autoCommit: true, // (boolean) 自动提交到响应头 headers (默认 true)
    overwrite: true, // (boolean) 是否允许重写 (默认 true)
    httpOnly: true, // (boolean) cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true, // (boolean) 是否签名 (默认 true)
    rolling: false, // (boolean)在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false
    renew: false, // (boolean)在会话快要过期时更新会话，因此我们可以始终保持用户登录。(默认为false)
    secure: true, // (boolean) 安全 cookie
};

module.exports = sessionConfig;
