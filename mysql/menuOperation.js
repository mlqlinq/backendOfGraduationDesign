const {query} = require("./model/query");

/**
 * 菜单数据操作
 * 查询 getUserMenu()
 * 添加
 * 修改
 * 删除
 */
class menuO {
    // 查询所有菜单
    async getUserMenu() {
        return await query(`SELECT * FROM sys_menu WHERE is_deleted='0'`);
    }

    // 添加菜单
    async addMenu(data) {
        return await query(`INSERT INTO sys_menu(
        menu_name, parent_id,order_num,path,component,is_cache,menu_type,visible,status,icon)
        VALUES ('${data.menuName}', '${data.parentMenu}', '${data.orderNum}', '${data.path}', '${data.component}', '${data.isCache}', '${data.menuType}', '${data.alwaysShow}', '${data.status}', '${data.icon}')`);
    }

    // 修改菜单
    async editMenu(data) {
        return await query(`UPDATE sys_menu 
        SET menu_name = '${data.menuName}',
            parent_id = '${data.parentMenu}', 
            order_num = '${data.orderNum}', 
            path = '${data.path}', 
            component = '${data.component}',
            is_cache =  '${data.isCache}',
            menu_type = '${data.menuType}',
            visible = '${data.alwaysShow}',
            status = '${data.status}',
            icon = '${data.icon}'
        WHERE menu_id = '${data.menuid}'`);
    }

    // 删除菜单
    async delMenu(id) {
        return await query(`UPDATE sys_menu SET is_deleted = '1' WHERE menu_id = '${id}'`);
    }
}

module.exports = new menuO();
