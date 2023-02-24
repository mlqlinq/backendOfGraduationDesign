const { query } = require("../../model/query");
const moment = require("moment");

/**
 * 校奖学金 数据操作
 * 查询
 * 添加
 * 修改
 * 删除
 */
class universityScho {
    /** 查询指定表单 */
    async getUniversityschoData(icardNumber) {
        const data = await query(`SELECT * FROM universityschos WHERE id_card_number = ${icardNumber} AND is_deleted='0'`);
        for (const key in data) {
            // 删除id属性
            delete data[key].is_deleted;
            data[key].create_time = moment(data[key].create_time).format("YYYY年MM月DD日");
            data[key].update_time = moment(data[key].update_time).format("YYYY年MM月DD日");
        }
        return data;
    }

    /** 查询所有 */
    async getAllUniversityschoData() {
        const data = await query(`SELECT * FROM universityschos WHERE is_deleted='0'`);
        for (const key in data) {
            // 删除id属性
            delete data[key].is_deleted;
            data[key].create_time = moment(data[key].create_time).format("YYYY年MM月DD日");
            data[key].update_time = moment(data[key].update_time).format("YYYY年MM月DD日");
        }

        return data;
    }

    /** 添加申请 */
    async postSubmitApplication(data) {
        await query(`INSERT INTO universityschos(school_name,college,student_no,student_name,id_card_number,student_sex,phone,grade,student_major,student_nation,political_outlook,scoreRanking,total_class_size,awards,opinions_of_the_department,school_opinion,dormitory_performance,student_class,student_position,english_level,computer_level,minimum_core,schoolReport,average,meritorious_deeds,class_opinion,comprehensive_ranking,total_number_of_comprehensive)
                                            VALUES ('${data.university_name}','${data.student_college}', '${data.student_no}', '${data.student_name}', '${data.id_card_number}','${data.student_sex}','${data.contact_number}','${data.grade}','${data.student_major}', '${data.student_nation}','${data.political_outlook}','${data.scoreRanking}','${data.total_class_size}','${data.awards}','','','${data.dormitory_performance}','${data.student_class}', '${data.student_position}','${data.english_level}','${data.computer_level}','${data.minimum_core}','${data.schoolReport}','${data.average}','${data.meritorious_deeds}','','${data.comprehensive_ranking}','${data.total_number_of_comprehensive}')`);
    }

    /** 学校意见 */
    async postSchoolExamine(data) {
        const List = await query(`SELECT * FROM universityschos WHERE id = '${data.id}'`);
        if (List[0].school_opinion !== "") {
            return { msg: "您已经审核过啦！" };
        }
        const obj = new Object();
        obj.desc = data.desc;
        obj.resource = data.resource;
        const opinions_of_the_department = JSON.stringify(obj);
        return await query(`UPDATE universityschos SET school_opinion = '${opinions_of_the_department}' WHERE id = '${data.id}'`);
    }

    /** 学院意见 */
    async postDepartmentExamine(data) {
        const List = await query(`SELECT * FROM universityschos WHERE id = '${data.id}'`);
        if (List[0].opinions_of_the_department !== "") {
            return { msg: "您已经审核过啦！" };
        }
        const obj = new Object();
        obj.desc = data.desc;
        obj.resource = data.resource;
        const opinions_of_the_department = JSON.stringify(obj);
        return await query(`UPDATE universityschos SET opinions_of_the_department = '${opinions_of_the_department}' WHERE id = '${data.id}'`);
    }

    /** 导员审核 班级意见 */
    async postClassExamine(data) {
        const List = await query(`SELECT * FROM universityschos WHERE id = '${data.id}'`);
        if (List[0].class_opinion !== "") {
            return { msg: "您已经审核过啦！" };
        }
        // if (data.resource === "1") {
        //     const obj = new Object();
        //     obj.desc = data.desc;
        //     obj.resource = data.resource;
        //     const class_opinion = JSON.stringify(obj);
        //     return await query(`UPDATE universityschos SET class_opinion = '${class_opinion}' WHERE id = '${data.id}'`);
        // }
        const obj = new Object();
        obj.desc = data.desc;
        obj.resource = data.resource;
        const class_opinion = JSON.stringify(obj);
        return await query(`UPDATE universityschos SET class_opinion = '${class_opinion}' WHERE id = '${data.id}'`);
    }
}

module.exports = new universityScho();
