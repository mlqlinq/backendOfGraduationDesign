const Allship = require("../../mysql/Scholarship/Allship");
const Router = require("koa-router");
const router = new Router();
router.prefix("/Scholarship");

router
    .get("/getAllShip", async (ctx) => {
        const CtxData = ctx.request.query;
        let data = await Allship.getAllShipData(CtxData);
        ctx.body = {
            data: data,
            total: data.length,
            msg: "查询成功！",
        };
    })
    .get("/getShipSData", async (ctx) => {
        const idC = ctx.request.query.id;
        const data = await Allship.getShipStuData(idC);
        ctx.body = {
            msg: "查询成功",
            data,
        };
    });

module.exports = router;
