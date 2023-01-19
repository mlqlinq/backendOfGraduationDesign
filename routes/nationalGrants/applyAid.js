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

    /*  国家助学金申请 */
    .post("/submitStudentApplyData", async (ctx) => {
        const data = ctx.request.body;
        const familyData = await poorStudCertific.getStudentPoorData(data.id_card_number);
        if (familyData.length > 2) {
            sortByKey(familyData, "id");
            data.family_member_information = familyData[0].family_member_information;
        } else {
            data.family_member_information = familyData[0].family_member_information;
        }
        await applyAid.postStudentapplyAidData(data);
        ctx.body = {
            msg: "提交成功！",
        };
    });

module.exports = router;
