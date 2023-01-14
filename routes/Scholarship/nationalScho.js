const nationalschos = require("../../mysql/Scholarship/nationalschos/nationalschos");
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
    .get("/downloadNationalschosForm", async (ctx) => {
        ctx.body = {
            url: path.join(`http://${host}:${port}/uploads/Scholarship/nationalschos`, "1673447720021.doc").replace(/\\/g, "/").replace("/", "//"),
            msg: "文件下载成功",
        };
    })
    .get("/Allnationalschos", async (ctx) => {
        const Data = await nationalschos.getAllNationalschosData();
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    })

    .get("/Nationalschos", async (ctx) => {
        const icardNumber = ctx.request.query.id_card_number;
        if (!icardNumber) {
            ctx.status = 400;
            ctx.body = "缺少必要参数！";
            return;
        }
        const Data = await nationalschos.getNationalschosData(icardNumber);
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    });

module.exports = router;
