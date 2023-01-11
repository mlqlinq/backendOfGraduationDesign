const { query } = require("../../model/query");

/**
 * 国家励志奖学金 数据操作
 * 查询
 * 添加
 * 修改
 * 删除
 */
class nationalendeavor {
    // 查询指定表单
    async getNationalendeavorData(icardNumber) {
        const data = await query(`SELECT * FROM nationalendeavor WHERE id_card_number = ${icardNumber} AND is_deleted='0'`);
        for (const key in data) {
            // 删除id属性
            delete data[key].is_deleted;
            delete data[key].update_time;
            data[key].create_time = parseInt(data[key].create_time.substring(0, data[key].create_time.indexOf("-")));
        }
        return data;
    }

    // 查询所有
    async getAllNationalendeavorData() {
        const data = await query(`SELECT * FROM nationalendeavor WHERE is_deleted='0'`);
        for (const key in data) {
            // 删除id属性
            delete data[key].is_deleted;
            delete data[key].update_time;
            data[key].create_time = parseInt(data[key].create_time.substring(0, data[key].create_time.indexOf("-")));
        }

        return data;
    }
}

module.exports = new nationalendeavor();
