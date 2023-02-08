/**
 * 贫困生认证
 */

const poorStudCertific = require("../../mysql/nationalGrants/poorStudCertific/poorStudCertific");
const Router = require("koa-router");
const router = new Router();
router.prefix("/nationalGrants");

router
    /**
     * 学生查询自己的申请历史
     */
    .get("/getgStudentPoorCertificData", async (ctx) => {
        const idCardNum = ctx.request.query.id_card_number;
        const data = await poorStudCertific.getStudentPoorData(idCardNum);
        ctx.body = {
            msg: "查询成功！",
            data: data,
            total: data.length,
        };
    })

    /**
     * 学生提交申请接口
     */
    .post("/submitStudentPoorData", async (ctx) => {
        const data = ctx.request.body;
        await poorStudCertific.postStudentPoorApplyData(data);
        ctx.body = {
            msg: "提交成功！",
        };
    })

    /**
     * 查询所有的申请
     */

    .get("/getAllPoorCertificData", async (ctx) => {
        const loginData = ctx.request.query;
        console.log("🚀 ~ file: poorStudCertific.js:41 ~ .get ~ loginData", loginData);
        const data = await poorStudCertific.getAllStudentPoorData(loginData);
        ctx.body = {
            msg: "查询成功！",
            data,
            total: data.length,
        };
    })

    /**
     * 民主评议 导员提交审核
     */
    .put("/putPoorStudCertificClassExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await poorStudCertific.postClassExamine(data);
        if ("msg" in msg) {
            return (ctx.body = {
                msg: msg.msg,
            });
        }
        ctx.body = {
            msg: "提交审核成功！",
        };
    })

    /**
     * 学校提交审核
     */
    .put("/putPoorStudCertificSchoolExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await poorStudCertific.postSchoolExamine(data);
        if ("msg" in msg) {
            return (ctx.body = {
                msg: msg.msg,
            });
        }
        ctx.body = {
            msg: "提交审核成功！",
        };
    })

    /**
     * 院系提交审核
     */
    .put("/putPoorStudCertificDepartmentExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await poorStudCertific.postDepartmentExamine(data);
        if ("msg" in msg) {
            return (ctx.body = {
                msg: msg.msg,
            });
        }
        ctx.body = {
            msg: "提交审核成功！",
        };
    });

module.exports = router;
