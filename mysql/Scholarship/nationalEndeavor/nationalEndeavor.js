const { query } = require("../../model/query");
// 获取当前年份
// function doHandleYear(tYear) {
//     const myDate = new Date();
//     const tYear = myDate.getFullYear();

//     return tYear;
// }

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

    // 添加申请
    async postSubmitApplication(data) {
        await query(`INSERT INTO nationalendeavor(school_name,college,class_name,student_no,student_name,student_sex,student_birthday,student_nation,student_start_year,phone,student_major,political_outlook,grade,id_card_number,required_quantity,number_of_passes,scoreRanking,total_class_size,is_comprehensive_survey,awards,reason_for_application,opinions_of_the_department,school_opinion,student_img,comprehensive_ranking,total_number_of_comprehensive,total_house_p,total_monthly_house,source_of_income,per_capita_monthly,home_address,postal_code)
                                            VALUES ('${data.university_name}','${data.student_college}','${data.class_name}', '${data.student_no}', '${data.student_name}', '${data.student_sex}','${data.student_birthday}', '${data.student_nation}', '${data.student_start_year}','${data.contact_number}','${data.student_major}', '${data.political_outlook}','${data.grade}','${data.id_card_number}','${data.required_quantity}','${data.number_of_passes}','${data.scoreRanking}','${data.total_class_size}','${data.is_comprehensive_survey}','${data.awards}','${data.reason_for_application}','','','${data.imageUrl}','${data.comprehensive_ranking}','${data.total_number_of_comprehensive}','${data.total_house_p}','${data.total_monthly_house}','${data.source_of_income}','${data.per_capita_monthly}','${data.home_address}','${data.postal_code}')`);
    }

    /** 学校意见 */
    async postSchoolExamine(data) {
        const List = await query(`SELECT * FROM nationalendeavor WHERE id = '${data.id}'`);
        if (List[0].school_opinion !== "") {
            return { msg: "您已经审核过啦！" };
        }
        const obj = new Object();
        obj.desc = data.desc;
        obj.resource = data.resource;
        const school_opinion = JSON.stringify(obj);
        return await query(`UPDATE nationalendeavor SET school_opinion = '${school_opinion}' WHERE id = '${data.id}'`);
    }

    /** 学院意见 */
    async postDepartmentExamine(data) {
        const List = await query(`SELECT * FROM nationalendeavor WHERE id = '${data.id}'`);
        if (List[0].opinions_of_the_department !== "") {
            return { msg: "您已经审核过啦！" };
        }
        const obj = new Object();
        obj.desc = data.desc;
        obj.resource = data.resource;
        const opinions_of_the_department = JSON.stringify(obj);
        return await query(`UPDATE nationalendeavor SET opinions_of_the_department = '${opinions_of_the_department}' WHERE id = '${data.id}'`);
    }
}

module.exports = new nationalendeavor();
