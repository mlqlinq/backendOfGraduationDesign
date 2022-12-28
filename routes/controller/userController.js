// controller主要存放操作和数据处理的一些逻辑
const jwt = require('jsonwebtoken');  // token工具
const config = require('../../config/utilToken');
const User = require('../../mysql/userModel');
const Router = require('koa-router');
const router = new Router();
// 路由前缀 用于分类
router.prefix('/user')

// 注册
router.post('/register', async (ctx) => {
    let { name, password } = ctx.request.body
    const names = await User.getUser(name) // 用户名是否重复

    if (names.length > 0) {
        ctx.body = { type: 'error', message: '用户名已存在' }
    } else {
        await User.userRegistration(name, password)
        ctx.body = { type: 'success', code: 0, message: '注册成功' }
    }
})

// 登录
router.post('/login', async (ctx) => {
    let name = ctx.request.body.name
    let password = ctx.request.body.password
    const data = ctx.request.body

    // 对接收到的验证码进行后端验证
    const code = decodeURI(data.verificationCode);
    let c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (let i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }

    if ('dat' in global) {
        if (c !== dat) {
            return ctx.body = {
                type: 'error',
                message: '验证码不正确'
            }
        } else if (!c) {
            return ctx.body = {
                type: 'error',
                message: '请填写验证码'
            }
        }
    } else {
        ctx.status = 400
        return ctx.body = {
            type: 'error',
            message: '验证码不正确'
        }
    }

    // 从数据中查询数据
    const res = (await User.getUser(name))[0]
    if (!data.name || !data.password || !data.userIdentity) {
        return ctx.body = {
            code: '参数不合法',
            data: null,
            msg: '参数不合法'
        }
    } else if (res) {
        if (res.password === password) {
            global.name = res.username
            ctx.body = {
                code: 200,
                data: {
                    name: res.username,
                },
                token: jwt.sign({ name: res.username }, config.PRIVATE_KEY, { expiresIn: config.JWT_EXPIRED }),
                message: '登录成功！',
                type: 'success'
            }
        } else {
            ctx.body = { type: 'error', message: '用户名或密码不正确' }
        }
    } else {
        ctx.body = { type: 'error', message: '用户不存在' }
    }
})

module.exports = router
