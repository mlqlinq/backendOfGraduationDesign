// 获取菜单相关的接口逻辑
const useUserData = require("../../mysql/userModel");
const Router = require("koa-router");
const router = new Router();
// 路由前缀 用于分类
router.prefix("/user/information");

router
    .post("/saveInformation", async (ctx) => {
        const userData = ctx.request.body;
        // userData.ii = userData.user_id;
        // userData.ia = userData.bank_card_no;
        await useUserData.editUserData(userData);
        ctx.body = {
            msg: "保存成功！",
        };
    })
    .post("/editGuideInform", async (ctx) => {
        const data = ctx.request.body;
        ctx.body = {
            msg: "保存成功！",
        };
    })
    .post("/saveGuideImg", async (ctx) => {
        const imgUrl = ctx.request.body.imgUrl;
        const guideId = ctx.request.body.guideId;
        await useUserData.saveGuideImg(imgUrl, guideId);
        ctx.body = {
            msg: "更换成功",
        };
    })
    .post("/saveSecretaryImg", async (ctx) => {
        const imgUrl = ctx.request.body.imgUrl;
        const secretaryId = ctx.request.body.secretaryId;
        await useUserData.savSecretaryImg(imgUrl, secretaryId);
        ctx.body = {
            msg: "更换成功",
        };
    });

module.exports = router;
