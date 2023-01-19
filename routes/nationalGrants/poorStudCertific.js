/**
 * 贫困生认证
 */

const poorStudCertific = require("../../mysql/nationalGrants/poorStudCertific/poorStudCertific");
const Router = require("koa-router");
const router = new Router();
router.prefix("/nationalGrants");

router
    .get("/getgStudentPoorCertificData", async (ctx) => {
        const idCardNum = ctx.request.query.id_card_number;
        console.log("🚀 ~ file: poorStudCertific.js:12 ~ router.get ~ idCardNum", idCardNum);
        const data = await poorStudCertific.getStudentPoorData(idCardNum);
        ctx.body = {
            msg: "查询成功！",
            data: data,
            total: data.length,
        };
    })
    .post("/submitStudentPoorData", async (ctx) => {
        const data = ctx.request.body;
        console.log("🚀 ~ file: poorStudCertific.js:23 ~ .post ~ data", data);
        await poorStudCertific.postStudentPoorApplyData(data);
        ctx.body = {
            msg: "提交成功！",
        };
    });

module.exports = router;
