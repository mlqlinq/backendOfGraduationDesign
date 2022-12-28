// session 配置 未使用
const sessionConfig = {
    key: 'koa:sess',
    maxAge: 86400000, // session 过期时间，以毫秒ms为计算单位(默认 is 1 days)
    autoCommit: true, // (boolean) 自动提交到响应头 headers (默认 true)
    overwrite: true, // (boolean) 是否允许重写 (默认 true)
    httpOnly: true, // (boolean) httpOnly or not (默认 true)
    signed: true, // (boolean) 是否签名 (默认 true)
    rolling: false, // (boolean)强制在每个响应上设置一个会话标识符cookie。过期被重置为原始的maxAge，重置过期倒计时。(默认为false)
    renew: false, // (boolean)在会话快要过期时更新会话，因此我们可以始终保持用户登录。(默认为false)
    secure: true, // (boolean) 安全 cookie
}

module.exports = sessionConfig
