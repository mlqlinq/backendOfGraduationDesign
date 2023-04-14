const { query } = require("./model/query");
const jwtDecodeToken = require("../util/jwtDecodeToken");

/**
 *  删选用户身份的菜单
 * @param {Array} sysidList 要删除的菜单
 * @param {Array} data  通过条件查询到的所有菜单
 * @returns
 */

function getUserMenuData(sysidList, data) {
    let List = [];
    if (Array.isArray(sysidList)) {
        sysidList.forEach((id) => {
            const index = data.findIndex((item) => item.menu_id === id);
            data.splice(index, 1);
        });
        List = data;
    }
    return List;
}
/**
 * 菜单数据操作
 * 查询 getUserMenu()
 * 添加
 * 修改
 * 删除
*/
class menuO {
    // 查询所有菜单
    async getUserMenu(ctx) {
        let data = [];
        console.log("🚀 ~ file: menuOperation.js:32 ~ menuO ~ getUserMenu ~ ctx:", ctx)
        const userData = jwtDecodeToken(ctx);
        
        if (userData !== undefined) {
            if (userData.userIdentity == 0) {
                data = await query(`SELECT * FROM sys_menu WHERE is_deleted='0'`);
            } else if (userData.userIdentity == 1) {
                const sysidList = [1, 10, 17, 40];
                const List = await query(`SELECT * FROM sys_menu WHERE is_deleted='0'`);
                data = getUserMenuData(sysidList, List);
            } else if (userData.userIdentity == 2) {
                const sysidList = [1, 10, 17, 40];
                const List = await query(`SELECT * FROM sys_menu WHERE is_deleted='0'`);
                data = getUserMenuData(sysidList, List);
            } else if (userData.userIdentity == 3) {
                const sysidList = [1, 10, 17, 40];
                const List = await query(`SELECT * FROM sys_menu WHERE is_deleted='0'`);
                data = getUserMenuData(sysidList, List);
            } else if (userData.userIdentity == 4) {
                const sysidList = [1, 34, 40];
                const List = await query(`SELECT * FROM sys_menu WHERE is_deleted='0'`);
                data = getUserMenuData(sysidList, List);
            }
        }
        return data;
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
