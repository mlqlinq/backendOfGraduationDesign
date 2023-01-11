// 获取菜单相关的接口逻辑
const useUserData = require("../../mysql/userModel");
const Router = require("koa-router");
const router = new Router();
// 路由前缀 用于分类
router.prefix("/user/information");

router.post("/saveInformation", async (ctx) => {
    const userData = ctx.request.body;
    // userData.ii = userData.user_id;
    // userData.ia = userData.bank_card_no;
    const a = await useUserData.editUserData(userData);
    ctx.body = {
        msg: "保存成功！",
    };
});

module.exports = router;
