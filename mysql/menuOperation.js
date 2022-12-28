const { query } = require("./model/query");

/**
 * 菜单数据操作
 * 查询 getUserMenu()
 * 添加
 * 修改
 * 删除
 */
class menuO {
    //获取所有菜单
    async getUserMenu() {
        return await query(`SELECT *
                            FROM sys_menu`);
    }

    // 添加菜单
    async addMenu(data) {
        console.log(data);
        return await query(`INSERT INTO sys_menu(
        menu_name, parent_id,order_num,path,component,is_cache,menu_type,visible,status,icon)
        VALUES ('${data.menuName}', '${data.parentMenu}', '${data.orderNum}', '${data.path}', '${data.component}', '${data.isCache}', '${data.menuType}', '${data.alwaysShow}', '${data.status}', '${data.icon}')`);
    }
}
module.exports = new menuO();
