const User = require("../../mysql/userModel");
const Router = require("koa-router");
const router = new Router();

router.get("/getUserList", async (ctx) => {
    const userList = await User.getAllUser();
    let newArrVal = JSON.parse(JSON.stringify(userList)); //数组是引用类型, 深拷贝一下
    newArrVal.map((e) => {
        delete e.password, delete e.create_time, delete e.create_by, delete e.update_by;
    });
    if (userList.length > 0) {
        ctx.body = { code: 200, total: newArrVal.length, data: newArrVal, message: "查询成功" };
    }
    return;
});

module.exports = router;
