// router/index.js
const compose = require('koa-compose')
const glob = require('glob')

/** 
 * 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
 * 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
 * allowedMethods方法可以做以下配置：
 * app.use(router.allowedMethods({
 *     // throw: true, // 抛出错误，代替设置响应头状态
 *     // notImplemented: () => '不支持当前请求所需要的功能',
 *     // methodNotAllowed: () => '不支持的请求方式'
 * }))
 */
/**
 * 递归式获取当前文件夹(router)下所有的js文件
 * !(index) : 排除index.js文件，因为这个文件不是具体的路由文件
 */
registerRouter = () => {
    let routers = [];
    glob.sync("router/**/!(index).js", { matchMedia: true })
        .forEach(v => {
            routers.push(require(v.replace('router', ".")).routes(), require(v.replace('router', '.')).allowedMethods())
        })
    return compose(routers)
}

module.exports = registerRouter
