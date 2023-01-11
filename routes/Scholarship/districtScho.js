const districtschos = require("../../mysql/Scholarship/districtScho/districtScho");
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
    .get("/downloadDistrictschos", async (ctx) => {
        ctx.body = {
            url: path.join(`http://${host}:${port}/uploads/Scholarship/districtschos`, "1673445157685.doc").replace(/\\/g, "/").replace("/", "//"),
            msg: "文件下载成功",
        };
    })

    .get("/AllDistrictschosData", async (ctx) => {
        const Data = await districtschos.getAllDistrictschosData();
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    })

    .get("/DistrictschosData", async (ctx) => {
        const icardNumber = ctx.request.query.query;
        if (!icardNumber) {
            ctx.status = 400;
            ctx.body = "缺少必要参数！";
            return;
        }
        const Data = await districtschos.getDistrictschosData(icardNumber);
        ctx.body = {
            msg: "查询成功！",
            data: sortByKey(Data, "create_time"),
            total: Data.length,
        };
    });

module.exports = router;
