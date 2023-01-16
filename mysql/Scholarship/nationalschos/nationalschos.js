const { query } = require("../../model/query");
const moment = require("moment");
/**
 * 国家奖学金 数据操作
 * 查询
 * 添加
 * 修改
 * 删除
 */
class nationalschos {
    // 查询指定表单
    async getNationalschosData(icardNumber) {
        const data = await query(`SELECT * FROM nationalschos WHERE id_card_number = ${icardNumber} AND is_deleted='0'`);
        for (const key in data) {
            // 删除id属性
            delete data[key].is_deleted;
            data[key].create_time = moment(data[key].create_time).format("YYYY年MM月DD日");
            data[key].update_time = moment(data[key].update_time).format("YYYY年MM月DD日");
        }
        return data;
    }

    // 查询所有
    async getAllNationalschosData() {
        const data = await query(`SELECT * FROM nationalschos WHERE is_deleted='0'`);
        for (const key in data) {
            delete data[key].is_deleted;
            data[key].create_time = moment(data[key].create_time).format("YYYY年MM月DD日");
            data[key].update_time = moment(data[key].update_time).format("YYYY年MM月DD日");
        }

        return data;
    }

    // 添加申请
    async postSubmitApplication(data) {
        await query(`INSERT INTO nationalschos(school_name,college,student_no,student_name,id_card_number,student_sex,phone,student_major,student_nation,political_outlook,scoreRanking,total_class_size,student_birthday,awards,opinions_of_the_department,school_opinion,student_start_year,educational_system,student_class,required_quantity,number_of_passes,is_comprehensive_survey,comprehensive_ranking,total_number_of_comprehensive,reason_for_application,reason_for_recommendation)
                                            VALUES ('${data.university_name}','${data.student_college}', '${data.student_no}', '${data.student_name}', '${data.id_card_number}','${data.student_sex}','${data.contact_number}','${data.student_major}', '${data.student_nation}','${data.political_outlook}','${data.scoreRanking}','${data.total_class_size}','${data.student_birthday}','${data.awards}','','','${data.student_start_year}','${data.educational_system}','${data.student_class}', '${data.required_quantity}','${data.number_of_passes}','${data.is_comprehensive_survey}','${data.comprehensive_ranking}','${data.total_number_of_comprehensive}','${data.reason_for_application}','')`);
    }
}

module.exports = new nationalschos();
