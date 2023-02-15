// 操作数据库的函数（包含数据库语句）
const { query } = require("./model/query");

/**
 * 登录注册，获取菜单数据
 */
class UserModel {
    // 用户登录
    async getUser(userdata) {
        let data = [];
        if (userdata.userIdentity == 0) {
            data = await query(`SELECT * FROM sys_user WHERE username = '${userdata.name}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 1) {
            data = await query(`SELECT * FROM sys_colleges_universities WHERE id_card_number = '${userdata.name}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 2) {
            data = await query(`SELECT * FROM sys_department_secretary WHERE id_card_number = '${userdata.name}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 3) {
            data = await query(`SELECT * FROM sys_guide_table WHERE id_card_number = '${userdata.name}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 4) {
            data = await query(`SELECT * FROM sys_students WHERE id_card_number = '${userdata.name}' AND is_deleted='0'`);
        }
        if (data.length === 0) {
            console.log(2);
            return data;
        } else {
            data[0].userIdentity = userdata.userIdentity;
            console.log(3);
            return data;
        }
    }

    /**个人中心查询接口 */
    async getMyInformation(userdata) {
        let data = [];
        if (userdata.userIdentity == 0) {
            data = await query(`SELECT * FROM sys_user WHERE username = '${userdata.name}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 1) {
            data = await query(`SELECT * FROM sys_colleges_universities WHERE id_card_number = '${userdata.id_card_number}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 2) {
            data = await query(`SELECT * FROM sys_department_secretary WHERE id_card_number = '${userdata.id_card_number}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 3) {
            data = await query(`SELECT * FROM sys_guide_table WHERE id_card_number = '${userdata.id_card_number}' AND is_deleted='0'`);
        } else if (userdata.userIdentity == 4) {
            data = await query(`SELECT * FROM sys_students WHERE id_card_number = '${userdata.id_card_number}' AND is_deleted='0'`);
        }
        if (data.length === 0) {
            return data;
        } else {
            data[0].userIdentity = userdata.userIdentity;
            for (const key in data) {
                delete data[key].guide_id;
                delete data[key].password;
                delete data[key].universities_id;
                delete data[key].create_time;
                delete data[key].update_time;
                delete data[key].is_deleted;
            }
            return data;
        }
    }

    /**查询学生的银行卡号，内部接口 */
    async getStudentBank(idCardNum) {
        const data = await query(`SELECT * FROM sys_students WHERE id_card_number = '${idCardNum}' AND is_deleted='0'`);
        return data;
    }

    // 用户注册
    async userRegistration(name, password) {
        return await query(`INSERT INTO sys_user(username, password)
                            VALUES ('${name}', '${password}')`);
    }

    /**
     * 获取所有用户数据
     * @returns
     */
    async getAllUser() {
        return await query(`SELECT * FROM sys_user WHERE is_deleted='0'`);
    }

    /**
     * 学生 管理员 修改个人信息 接口
     * @param {*} data
     * @returns
     */
    async editUserData(data) {
        if (data.user_identity === "4") {
            await query(`UPDATE sys_students 
            SET bank_card_no = '${data.bank_card_no}',
            bank_of_deposit = '${data.bank_of_deposit}', 
            class_name = '${data.class_name}', 
            contact_number = '${data.contact_number}', 
            cultivation_method = '${data.cultivation_method}',
            e_mail =  '${data.e_mail}',
            educational_system = '${data.educational_system}',
            grade = '${data.grade}',
            home_address = '${data.home_address}',
            home_contact_number = '${data.home_contact_number}',
            home_zip_code = '${data.home_zip_code}',
            id_card_number = '${data.id_card_number}',
            id_card_type = '${data.id_card_type}',
            imageUrl = '${data.imageUrl}',
            learning_form = '${data.learning_form}',
            major_categories = '${data.major_categories}',
            mode_of_admission = '${data.mode_of_admission}',
            nature_of_household_registration = '${data.nature_of_household_registration}',
            political_outlook = '${data.political_outlook}',
            student_bank_account_name = '${data.student_bank_account_name}',
            student_birthday = '${data.student_birthday}',
            student_college = '${data.student_college}',
            student_finish_year = '${data.student_finish_year}',
            student_major = '${data.student_major}',
            student_name = '${data.student_name}',
            student_nation = '${data.student_nation}',
            student_no = '${data.student_no}',
            student_sex = '${data.student_sex}',
            student_start_year = '${data.student_start_year}',
            student_status = '${data.student_status}',
            training_level = '${data.training_level}',
            university_name = '${data.university_name}'
            WHERE user_id = ${data.user_id}`);
            return;
        } else if (data.user_identity === "0") {
            await query(`UPDATE sys_user 
        SET menu_name = '${data.menuName}',
            parent_id = '${data.parentMenu}', 
            order_num = '${data.orderNum}', 
            path = '${data.path}', 
            component = '${data.component}',
            is_cache =  '${data.isCache}',
            menu_type = '${data.menuType}',
            visible = '${data.alwaysShow}',
            status = '${data.status}',
            icon = '${data.icon}'
        WHERE menu_id = '${data.menuid}'`);
            return;
        }
    }
}

module.exports = new UserModel();
