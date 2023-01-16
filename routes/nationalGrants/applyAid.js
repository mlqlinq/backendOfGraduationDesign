/**
 * 国家助学金申请
 */

const applyAid = require("../../mysql/nationalGrants/applyAid/applyAid");
const Router = require("koa-router");
const router = new Router();
router.prefix("/nationalGrants");
router.get("/getgStudentApplyData", async (ctx) => {
    const idCardNum = ctx.request.query.id_card_number;
    const data = await applyAid.getStudentapplyAidData(idCardNum);
    ctx.body = {
        msg: "查询成功！",
        data: data,
        total: data.length,
    };
});

module.exports = router;
