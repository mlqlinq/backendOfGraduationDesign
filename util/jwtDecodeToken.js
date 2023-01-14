const jwtDecode = require("jwt-decode");
module.exports = (ctx) => {
    let Data = new Object();
    if (ctx.header && ctx.header.authorization) {
        const parts = ctx.header.authorization.split(" ");
        if (parts.length === 2) {
            //取出token
            const scheme = parts[0];
            const token = parts[1];

            if (/^Bearer$/i.test(scheme)) {
                const userData = jwtDecode(token);
                Data = userData.userData;
            }
        }
    } else {
        const userData = jwtDecode(ctx);
        Data = userData.userData;
    }

    return Data;
};
// 解析token 里的用户数据
