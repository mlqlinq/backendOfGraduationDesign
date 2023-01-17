// 获取菜单相关的接口逻辑
const useManu = require("../../mysql/menuOperation");
const Router = require("koa-router");
const router = new Router();
// 路由前缀 用于分类
router.prefix("/menu");

// 对数组 重新进行 排序
sortByKey = (array, key) => {
    return array.sort(function (a, b) {
        var x = a[key]; //如果要从小到大,把<,>互换就好
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
    });
};

// 获取所有所有菜单
router
    .get("/getmenu", async (ctx) => {
        let allMenu = await useManu.getUserMenu(ctx);
        // const arr = allMenu;
        // const parentList = arr.filter((v) => v.menu_type === "M");
        // const itemList = arr.filter((v) => v.menu_type === "C");
        // parentList.forEach((item) => {
        //     const children = itemList.filter((v) => item.menu_id === v.parent_id);
        //     item.children = children.length > 0 ? (item.children = children) : [];
        // });
        const arr = [];
        for (const obj of JSON.parse(JSON.stringify(allMenu))) {
            if (obj.menu_type === "M") {
                arr.push({
                    menu_id: obj.menu_id,
                    menu_name: obj.path.replaceAll("/", ""),
                    parent_id: obj.parent_id,
                    path: "/" + obj.path,
                    alwaysShow: obj.visible,
                    status: obj.status,
                    orderNum: obj.order_num,
                    menuType: obj.menu_type,
                    component: obj.component,
                    createTime: obj.create_time,
                    updateTime: obj.update_time,
                    meta: {
                        title: obj.menu_name,
                        icon: obj.icon,
                        noCache: obj.is_cache,
                        link: null,
                    },
                    children: [],
                });
            } else if (obj.menu_type === "C") {
                const index = arr.findIndex((item) => item.menu_id === obj.parent_id);
                // 没有父级菜单的不返回
                if (index !== -1 && arr[index].children !== undefined) {
                    arr[index].children.push({
                        menu_id: obj.menu_id,
                        parent_id: obj.parent_id,
                        name: obj.path.replaceAll("/", ""),
                        path: "/" + obj.path,
                        alwaysShow: obj.visible,
                        component: obj.component,
                        status: obj.status,
                        orderNum: obj.order_num,
                        menuType: obj.menu_type,
                        createTime: obj.create_time,
                        updateTime: obj.update_time,
                        meta: {
                            title: obj.menu_name,
                            icon: obj.icon,
                            noCache: obj.is_cache,
                            link: null,
                        },
                    });
                }
            }
        }
        //对第一层菜单进行排序
        sortByKey(arr, "orderNum");
        // 对第二级菜单进行排序
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].children.length > 0) {
                sortByKey(arr[i].children, "orderNum");
            }
        }
        if (allMenu.length > 0) {
            ctx.status = 200;
            ctx.body = {
                data: arr,
                total: arr.length,
            };
        } else {
            return (ctx.body = { type: "error", message: "没有数据" });
        }
    })

    // 获取所有所有菜单 -- 原始数据
    .get("/getAllmenu", async (ctx) => {
        let allMenus = await useManu.getUserMenu(ctx);
        let arrs = [];
        for (const obj of JSON.parse(JSON.stringify(allMenus))) {
            if (obj.menu_type === "M") {
                arrs.push({
                    value: obj.menu_id,
                    label: obj.menu_name,
                    children: [],
                });
            } else if (obj.menu_type === "C") {
                const index = arrs.findIndex((item) => item.value === obj.parent_id);
                // 没有父级菜单的不返回
                if (index !== -1 && arrs[index].children !== undefined) {
                    arrs[index].children.push({
                        value: obj.menu_id,
                        label: obj.menu_name,
                        disabled: true,
                    });
                }
            }
        }

        if (allMenus.length > 0) {
            ctx.body = {
                code: 200,
                data: arrs,
                total: arrs.length,
            };
        } else {
            return (ctx.body = { type: "error", message: "没有数据" });
        }
    })

    // 添加菜单
    .post("/addMenu", async (ctx) => {
        console.log("aa", ctx.request.body);
        const Data = ctx.request.body;
        await useManu.addMenu(Data);
        ctx.body = {
            code: 200,
            msg: "添加成功",
        };
    })

    // 修改菜单
    .put("/editMenu", async (ctx) => {
        console.log("bb", ctx.request.body);
        const Data = ctx.request.body;
        Data.path = Data.path.replaceAll("/", "");
        await useManu.editMenu(Data);
        ctx.body = {
            code: 200,
            msg: "修改成功",
        };
    })

    // 删除菜单
    .delete("/delMenu/:id", async (ctx) => {
        const id = ctx.params.id;
        await useManu.delMenu(id);
        ctx.body = {
            code: 200,
            msg: "删除成功",
        };
    });

module.exports = router;
