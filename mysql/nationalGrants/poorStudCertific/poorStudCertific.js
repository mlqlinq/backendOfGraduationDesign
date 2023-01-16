/**
 *  贫困生认证
 */
const { query } = require("../../model/query");
const jwtDecodeToken = require("../../../util/jwtDecodeToken");
const moment = require("moment");
class poorStudCertific {
    async getStudentPoorData(idCardNum) {
        const List = await query(`SELECT * FROM poor_student_certification WHERE id_card_number = '${idCardNum}' AND is_deleted='0'`);
        for (const key in List) {
            // 删除id属性
            delete List[key].is_deleted;
            List[key].create_time = moment(List[key].create_time).format("YYYY年MM月DD日");
            List[key].update_time = moment(List[key].update_time).format("YYYY年MM月DD日");
        }
        return List;
    }
}

module.exports = new poorStudCertific();
