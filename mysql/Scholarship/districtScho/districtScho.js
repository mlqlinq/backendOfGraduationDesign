const { query } = require("../../model/query");
const moment = require("moment");

/**
 * 区政府奖学金 数据操作
 * 查询
 * 添加
 * 修改
 * 删除
 */
class districtschos {
    // 查询指定表单
    async getDistrictschosData(icardNumber) {
        const data = await query(`SELECT * FROM districtschos WHERE id_card_number = ${icardNumber} AND is_deleted='0'`);
        for (const key in data) {
            // 删除id属性
            delete data[key].is_deleted;
            delete data[key].is_deleted;
            data[key].create_time = moment(data[key].create_time).format("YYYY年MM月DD日");
            data[key].update_time = moment(data[key].update_time).format("YYYY年MM月DD日");
        }
        return data;
    }

    // 查询所有
    async getAllDistrictschosData() {
        const data = await query(`SELECT * FROM districtschos WHERE is_deleted='0'`);
        for (const key in data) {
            // 删除id属性
            delete data[key].is_deleted;
            delete data[key].is_deleted;
            data[key].create_time = moment(data[key].create_time).format("YYYY年MM月DD日");
            data[key].update_time = moment(data[key].update_time).format("YYYY年MM月DD日");
        }

        return data;
    }

    // 添加申请
    async postSubmitApplication(data) {
        await query(
            `INSERT INTO districtschos(school_name,college,student_no,student_name,student_sex,student_birthday,student_nation,student_start_year,phone,educational_system,student_major,grade,political_outlook,id_card_number,scoreRanking,total_class_size,is_comprehensive_survey,total_number_of_comprehensive,comprehensive_ranking,awards,reason_for_application,opinions_of_the_department,school_opinion,student_img,student_class,required_quantity,number_of_passes) VALUES ('${data.university_name}','${data.student_college}','${data.student_no}', '${data.student_name}', '${data.student_sex}','${data.student_birthday}', '${data.student_nation}', '${data.student_start_year}','${data.contact_number}','${data.educational_system}','${data.student_major}','${data.grade}', '${data.political_outlook}','${data.id_card_number}','${data.scoreRanking}','${data.total_class_size}','${data.is_comprehensive_survey}','${data.total_number_of_comprehensive}','${data.comprehensive_ranking}','${data.awards}','${data.reason_for_application}','','','${data.imageUrl}','${data.student_class}','${data.required_quantity}','${data.number_of_passes}')`
        );
    }
}

module.exports = new districtschos();
