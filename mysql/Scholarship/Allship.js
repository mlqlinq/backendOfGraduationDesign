const { query } = require("../model/query");
const moment = require("moment");
/**
 * 奖学金审核查询
 */

class Allship {
    // 查询所有
    async getAllShipData(maj) {
        if (maj.userIdentity === "1" || maj.userIdentity === "2") {
            const name = maj.userIdentity === "1" ? "school_name" : "college";

            const data1 = await query(`SELECT * FROM universityschos WHERE ${name}='${maj.guide_college}' AND is_deleted='0'`);
            const data2 = await query(`SELECT * FROM districtschos WHERE ${name}='${maj.guide_college}' AND is_deleted='0'`);
            const data3 = await query(`SELECT * FROM nationalschos WHERE ${name}='${maj.guide_college}' AND is_deleted='0'`);
            const data4 = await query(`SELECT * FROM nationalendeavor WHERE ${name}='${maj.guide_college}' AND is_deleted='0'`);

            for (const key in data1) {
                delete data1[key].is_deleted;
                data1[key].create_time = moment(data1[key].create_time).format("YYYY年MM月DD日");
                data1[key].update_time = moment(data1[key].update_time).format("YYYY年MM月DD日");
                data1[key].type = "1";
            }
            for (const key in data2) {
                delete data2[key].is_deleted;
                data2[key].create_time = moment(data2[key].create_time).format("YYYY年MM月DD日");
                data2[key].update_time = moment(data3[key].update_time).format("YYYY年MM月DD日");
                data2[key].type = "2";
            }
            for (const key in data3) {
                delete data3[key].is_deleted;
                data3[key].create_time = moment(data3[key].create_time).format("YYYY年MM月DD日");
                data3[key].update_time = moment(data3[key].update_time).format("YYYY年MM月DD日");
                data3[key].type = "3";
            }
            for (const key in data4) {
                delete data4[key].is_deleted;
                data4[key].create_time = moment(data4[key].create_time).format("YYYY年MM月DD日");
                data4[key].update_time = moment(data4[key].update_time).format("YYYY年MM月DD日");
                data4[key].type = "4";
            }
            const data = [...data1, ...data2, ...data3, ...data4];
            return data;
        } else if (maj.userIdentity === "3") {
            const data1 = await query(`SELECT * FROM universityschos WHERE college='${maj.guide_college}' AND is_deleted='0'`);
            const data3 = await query(`SELECT * FROM nationalschos WHERE college='${maj.guide_college}' AND is_deleted='0'`);
            for (const key in data1) {
                delete data1[key].is_deleted;
                data1[key].create_time = moment(data1[key].create_time).format("YYYY年MM月DD日");
                data1[key].update_time = moment(data1[key].update_time).format("YYYY年MM月DD日");
                data1[key].type = "1";
            }
            for (const key in data3) {
                delete data3[key].is_deleted;
                data3[key].create_time = moment(data3[key].create_time).format("YYYY年MM月DD日");
                data3[key].update_time = moment(data3[key].update_time).format("YYYY年MM月DD日");
                data3[key].type = "3";
            }
            const data = [...data1, ...data3];
            return data;
        }
    }

    async getShipStuData(idC) {
        return await query(`SELECT * FROM sys_students WHERE id_card_number = '${idC}' AND is_deleted='0'`);
    }
}

module.exports = new Allship();
