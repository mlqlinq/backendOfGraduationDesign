/**
 * 国家助学金申请
 */

const applyAid = require("../../mysql/nationalGrants/applyAid/applyAid");
const poorStudCertific = require("../../mysql/nationalGrants/poorStudCertific/poorStudCertific");
const UserModel = require("../../mysql/userModel");
const Router = require("koa-router");
const router = new Router();

// 对数组 重新进行 排序
sortByKey = (array, key) => {
    return array.sort(function (a, b) {
        var x = a[key]; //如果要从小到大,把<,>互换就好
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
    });
};

router.prefix("/nationalGrants");
router
    /**学生个人查询 */
    .get("/getgStudentApplyData", async (ctx) => {
        const idCardNum = ctx.request.query.id_card_number;
        const data = await applyAid.getStudentapplyAidData(idCardNum);
        const List = await UserModel.getStudentBank(idCardNum);
        data.forEach((item) => {
            item.bank_of_deposit = List[0].bank_of_deposit;
            item.bank_card_no = List[0].bank_card_no;
        });
        ctx.body = {
            msg: "查询成功！",
            data: data,
            total: data.length,
        };
    })

    /**  国家助学金申请 */
    .post("/submitStudentApplyData", async (ctx) => {
        const data = ctx.request.body;
        const Verification = await poorStudCertific.getStudentPoorVerification(data.id_card_number);
        if (Verification.length === 0) {
            ctx.status = 500;
            return (ctx.body = {
                msg: "您不是贫困生身份！不可提交！",
            });
        } else {
            const familyData = await poorStudCertific.getStudentPoorData(data.id_card_number);
            if (familyData.length > 2) {
                sortByKey(familyData, "id");
                data.family_member_information = familyData[0].family_member_information;
            } else {
                data.family_member_information = familyData[0].family_member_information;
            }
            await applyAid.postStudentapplyAidData(data);
            return (ctx.body = {
                msg: "提交成功！",
            });
        }
    })

    .post("/StudentVerification", async (ctx, next) => {
        const data = ctx.request.body;
        const Verification = await poorStudCertific.getStudentPoorVerification(data.id_card_number);
        if (Verification.length === 0) {
            // ctx.status = 500;
            return (ctx.body = {
                msg: "您不是贫困生身份！不可申请！",
            });
        } else {
            next();
        }
    })

    /**
     * 查询所有的申请
     */

    .get("/getAllApplyAidData", async (ctx) => {
        const loginData = ctx.request.query;
        const data = await applyAid.getAllStudentPoorData(loginData);
        ctx.body = {
            msg: "查询成功！",
            data,
            total: data.length,
        };
    })

    /**
     * 民主评议 导员提交审核
     */
    .put("/putApplyAidClassExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await applyAid.postClassExamine(data);
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
    .put("/putApplyAidSchoolExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await applyAid.postSchoolExamine(data);
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
    .put("/putApplyAidDepartmentExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await applyAid.postDepartmentExamine(data);
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
