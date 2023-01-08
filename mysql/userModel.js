// 操作数据库的函数（包含数据库语句）
const {query} = require("./model/query");

/**
 * 登录注册，获取菜单数据
 */
class UserModel {
    // 获取登录用户
    async getUser(name) {
        return await query(`SELECT *
                            FROM sys_user
                            WHERE username = '${name}' AND is_deleted='0'`);
    }

    //用户注册
    async userRegistration(name, password) {
        return await query(`INSERT INTO sys_user(username, password)
                            VALUES ('${name}', '${password}')`);
    }

    //获取所有用户数据
    async getAllUser() {
        return await query(`SELECT *
                            FROM sys_user WHERE is_deleted='0'`);
    }
}

module.exports = new UserModel();
