// koa文件处理
const fs = require("fs");
const path = require("path");
const mime = require("mime-types");
const Router = require("koa-router");
const router = new Router();

router.get("/404", async (ctx, next) => {
    // await next();
    if (parseInt(ctx.status) === 404) {
        // 同步读取文件
        let filePath = path.join(__dirname, "../../public/assets/404_images/404.png");
        let file = fs.readFileSync(filePath);
        // 根据读取到的文件到底是什么类型的
        let mineTypes = mime.lookup(filePath);
        // 设置 content-type 是什么类型
        ctx.set("content-type", mineTypes);
        // 直接返回图片
        ctx.body = file;
    }
    return;
});

module.exports = router;
