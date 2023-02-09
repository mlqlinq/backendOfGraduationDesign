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

    /**
     * 查询所有申请
     * @param {*} idCardNum
     * @returns
     */
    async getAllStudentPoorData(loginData) {
        // for (const key in List) {
        //     delete List[key].is_deleted;
        //     List[key].create_time = moment(List[key].create_time).format("YYYY年MM月DD日");
        //     List[key].update_time = moment(List[key].update_time).format("YYYY年MM月DD日");
        // }
        if (loginData.userIdentity === "3" || loginData.userIdentity === "2") {
            const List = await query(
                `SELECT * FROM national_scholarship_application_information WHERE school_name = '${loginData.schoolName}' AND college = '${loginData.guideCollege}' AND is_deleted='0'`
            );
            return List;
        } else if (loginData.userIdentity === "1") {
            const List = await query(`SELECT * FROM national_scholarship_application_information WHERE school_name = '${loginData.schoolName}' AND is_deleted='0'`);
            return List;
        } else {
            const List = await query(`SELECT * FROM national_scholarship_application_information WHERE school_name = '${loginData.schoolName}' AND is_deleted='0'`);
            return List;
        }
    }

    /** 学校意见 */
    async postSchoolExamine(data) {
        const List = await query(`SELECT * FROM national_scholarship_application_information WHERE id = '${data.id}'`);
        if (List[0].school_opinion !== "") {
            return { msg: "您已经审核过啦！" };
        }
        const obj = new Object();
        obj.desc = data.desc;
        obj.resource = data.resource;
        const school_opinion = JSON.stringify(obj);
        return await query(`UPDATE national_scholarship_application_information SET school_opinion = '${school_opinion}' WHERE id = '${data.id}'`);
    }

    /** 学院意见 */
    async postDepartmentExamine(data) {
        const List = await query(`SELECT * FROM national_scholarship_application_information WHERE id = '${data.id}'`);
        if (List[0].opinions_of_the_department !== "") {
            return { msg: "您已经审核过啦！" };
        }
        const obj = new Object();
        obj.desc = data.Alldesc;
        obj.resource = data.resource;
        const opinions_of_the_department = JSON.stringify(obj);
        return await query(`UPDATE national_scholarship_application_information SET opinions_of_the_department = '${opinions_of_the_department}' WHERE id = '${data.id}'`);
    }

    /** 导员审核 班级意见 */
    async postClassExamine(data) {
        const List = await query(`SELECT * FROM national_scholarship_application_information WHERE id = '${data.id}'`);
        if (List[0].class_comments !== "") {
            return { msg: "您已经审核过啦！" };
        }
        const obj = new Object();
        obj.desc = data.desc;
        obj.resource = data.resource;
        const class_comments = JSON.stringify(obj);
        return await query(`UPDATE national_scholarship_application_information SET class_comments = '${class_comments}' WHERE id = '${data.id}'`);
    }
}

module.exports = new applyAid();
