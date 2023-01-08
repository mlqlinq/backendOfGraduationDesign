const jsonToken = require("jsonwebtoken");
const config = require("../config/utilToken");
// 生成token
const setToken = (username) => {
    return jsonToken.sign(
        // payload 存储用户信息
        {username},
        // 私钥
        config.PRIVATE_KEY,
        // 设置过期时间
        {expiresIn: config.JWT_EXPIRED}
    );
};

module.exports = (app) => {
    app.use(async (ctx, next) => {
        if (ctx.header && ctx.header.authorization) {
            const parts = ctx.header.authorization.split(" ");
            if (parts.length === 2) {
                //取出token
                const scheme = parts[0];
                const token = parts[1];

                if (/^Bearer$/i.test(scheme)) {
                    try {
                        //jwt.verify方法验证token是否有效
                        jsonToken.verify(token, config.PRIVATE_KEY, {
                            complete: true,
                        });
                    } catch (error) {
                        //token过期 生成新的token
                        const newToken = setToken(global.userData);
                        //将新token放入Authorization中返回给前端
                        ctx.res.setHeader("Authorization", `Bearer ${newToken}`);
                    }
                }
            }
        }

        return next().catch((err) => {
            if (err.status === 401) {
                ctx.status = 401;
                // ctx.body = 'Protected resource, use Authorization header to get access\n'
                ctx.body = "受限资源，当前接口没有权限访问！";
            } else {
                throw err;
            }
        });
    });
};
