const Router = require("koa-router");
const router = new Router();
const cityData = require("./cityJsonData.json");

// 获取城市数据
router.get("/cityJsonData", async (ctx) => {
    // const treeData = convert(cityData);

    // function convert(list) {
    //     const res = [];
    //     const map = list.reduce((res, v) => ((res[v.i] = v), (v.children = []), res), {});
    //     for (const item of list) {
    //         if (item.p === 0) {
    //             res.push(item);
    //             continue;
    //         }
    //         if (item.p in map) {
    //             const parent = map[item.p];
    //             parent.children = parent.children || [];
    //             parent.children.push(item);
    //         }
    //     }
    //     return res;
    // }

    //data为需要修改的tree，这里主要是为element 里面select规范数据
    const ass = (data) => {
        let item = [];
        data.map((list, i) => {
            let newData = {};
            newData.key = list.i;
            newData.parenId = list.p;
            newData.value = list.n;
            newData.lable = list.n;
            newData.children = list.children ? ass(list.children) : []; //如果还有子集，就再次调用自己
            item.push(newData);
        });
        return item;
    };
    ctx.body = {
        code: 200,
        msg: "获取成功",
        data: ass(cityData),
    };
});

module.exports = router;
