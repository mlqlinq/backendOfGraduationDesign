// 图形验证码 接口
const Router = require("koa-router");
const { Base64 } = require("js-base64");
const svgCaptcha = require("svg-captcha");
const router = new Router();

router.get("/captcha", async (ctx, next) => {
    //  若创建算数式验证码，将create改为createMathExpr
    const newCaptcha = svgCaptcha.createMathExpr({
        size: 4, // 验证码长度
        fontSize: 45, // 验证码自号
        ignoreChars: "0o1i", // 验证码字符中排除 0o1i
        noise: Math.floor(Math.random() * 3), // 干扰线条数目_随机0-4条
        width: 100,
        height: 40,
        color: true, //验证码字符是否有颜色，默认是没有，但是如果设置了背景颜色，那么默认就是有字符颜色
        background: "#a9a8a0", // 验证码图片背景颜色
    });

    const bas = newCaptcha.data;
    const dat = newCaptcha.text.toLowerCase();
    global.dat = dat;
    ctx.set("Content-Type", "image/svg+xml");
    ctx.body = {
        code: 200,
        msg: "获取成功",
        data: Base64.encode(bas),
    };
    return newCaptcha.text.toLowerCase();
});

module.exports = router;
