/**
 * 国家助学金
 */
const { query } = require("../../model/query");
const moment = require("moment");
class applyAid {
    async getStudentapplyAidData(idCardNum) {
        const List = await query(`SELECT * FROM national_scholarship_application_information WHERE id_card_number = '${idCardNum}' AND is_deleted='0'`);
        for (const key in List) {
            // 删除id属性
            delete List[key].is_deleted;
            List[key].create_time = moment(List[key].create_time).format("YYYY年MM月DD日");
            List[key].update_time = moment(List[key].update_time).format("YYYY年MM月DD日");
        }
        return List;
    }
    async postStudentapplyAidData(data) {
        await query(
            `INSERT INTO national_scholarship_application_information(school_name,college,student_no,student_start_year,class_name,student_major,educational_system,student_name,political_outlook,id_card_number,student_sex,student_nation,home_address,total_house_p,contact_number,family_member_information,per_capita_annual_income,annual_per_capita,home_zip_code,nature_of_household_registration,application_level,source_of_income,reason_for_application,class_comments,opinions_of_the_department,school_opinion) VALUES ('${
                data.university_name
            }','${data.student_college}','${data.student_no}','${data.student_start_year}','${data.class_name}','${data.student_major}','${data.educational_system}','${data.student_name}','${
                data.political_outlook
            }','${data.id_card_number}','${data.student_sex}','${data.student_nation}','${data.home_address}','${data.total_house_p}','${data.contact_number}','${data.family_member_information}','${
                data.per_capita_annual_income
            }','${data.annual_per_capita}','${data.home_zip_code}','${data.nature_of_household_registration}','${data.application_level}','${JSON.stringify(data.source_of_income)}','${
                data.reason_for_application
            }','','','')`
        );
    }
}

module.exports = new applyAid();
