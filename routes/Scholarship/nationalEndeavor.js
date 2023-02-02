const nationalendeavor = require("../../mysql/Scholarship/nationalEndeavor/nationalEndeavor");
const Router = require("koa-router");
const router = new Router();
const { host, port } = require("../../utils");
const path = require("path"); // nodeJs内置路径模块
// 对数组 重新进行 排序
sortByKey = (array, key) => {
    return array.sort(function (a, b) {
        var x = a[key]; //如果要从小到大,把<,>互换就好
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
    });
};

router.prefix("/Scholarship");

router
    .get("/downloadNationalendeavor", async (ctx) => {
        ctx.body = {
            url: path.join(`http://${host}:${port}/uploads/Scholarship/nationalEndeavor`, "1673446531610.docx").replace(/\\/g, "/").replace("/", "//"),
            msg: "文件下载成功",
        };
    })

    .get("/AllnationalendeavorData", async (ctx) => {
        const Data = await nationalendeavor.getAllNationalendeavorData();
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    })

    .get("/NationalendeavorData", async (ctx) => {
        const icardNumber = ctx.request.query.id_card_number;
        if (!icardNumber) {
            ctx.status = 400;
            ctx.body = "缺少必要参数！";
            return;
        }
        const Data = await nationalendeavor.getNationalendeavorData(icardNumber);
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    })

    .post("/SubmitApplication", async (ctx) => {
        const data = ctx.request.body;
        // await nationalendeavor.postSubmitApplication(data);
        ctx.body = {
            msg: "提交成功！",
        };
    })

    .put("/putNationalendeavorSchoolExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await nationalendeavor.postSchoolExamine(data);
        if ("msg" in msg) {
            return (ctx.body = {
                msg: msg.msg,
            });
        }
        ctx.body = {
            msg: "提交审核成功！",
        };
    })

    .put("/putNationalendeavorDepartmentExamine", async (ctx) => {
        const data = ctx.request.body;
        const msg = await nationalendeavor.postDepartmentExamine(data);
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
