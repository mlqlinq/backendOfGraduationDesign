const universityScho = require("../../mysql/Scholarship/universityScho/universitySchoModel");
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
    .get("/downloadUniversityApplicationForm", async (ctx) => {
        ctx.body = {
            url: path.join(`http://${host}:${port}/uploads/Scholarship/universitySchoData`, "1673440587046.doc").replace(/\\/g, "/").replace("/", "//"),
            msg: "文件下载成功",
        };
    })

    .get("/AlluniversityScho", async (ctx) => {
        const Data = await universityScho.getAllUniversityschoData();
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    })

    .get("/universityScho", async (ctx) => {
        const icardNumber = ctx.request.query.id_card_number;
        if (!icardNumber) {
            ctx.status = 400;
            ctx.body = "缺少必要参数！";
            return;
        }
        const Data = await universityScho.getUniversityschoData(icardNumber);
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    })

    .post("/SubmitUniversityScho", async (ctx) => {
        const data = ctx.request.body;
        console.log("🚀 ~ file: districtScho.js:52 ~ .post ~ data", data);
        await universityScho.postSubmitApplication(data);
        ctx.body = {
            msg: "提交成功！",
        };
    });

module.exports = router;
