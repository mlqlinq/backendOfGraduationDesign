const { query } = require("./model/query");

/**
 * 高校管理 接口
 */
class sys {
    // 查询数据
    async getData() {
        const universitiesData = await query(`SELECT * FROM sys_colleges_universities WHERE is_deleted='0'`);
        const secretaryData = await query(`SELECT * FROM sys_department_secretary WHERE is_deleted='0'`);
        const guideData = await query(`SELECT * FROM sys_guide_table WHERE is_deleted='0'`);
        const studentsData = await query(`SELECT * FROM sys_students WHERE is_deleted='0'`);
        return { universitiesData, secretaryData, guideData, studentsData };
    }

    // 查询数据
    async getUniversityPerData(id) {
        const universitiesData = await query(`SELECT * FROM sys_colleges_universities WHERE universities_id = ${id} AND is_deleted='0'`);
        return universitiesData;
    }

    async getSecretaryPerData(id) {
        const secretaryData = await query(`SELECT * FROM sys_department_secretary WHERE secretary_id = ${id} AND is_deleted='0'`);
        return secretaryData;
    }

    async faculty(college) {
        const secretaryData = await query(`SELECT * FROM sys_department_secretary WHERE secretary_college = '${college.split(" ").join("")}' AND is_deleted='0'`);
        return secretaryData;
    }

    async getGuidePerData(id) {
        const guideData = await query(`SELECT * FROM sys_guide_table WHERE guide_id = ${id} AND is_deleted='0'`);
        return guideData;
    }

    async getStudentsPerData(id) {
        const studentsData = await query(`SELECT * FROM sys_students WHERE user_id = ${id} AND is_deleted='0'`);
        return studentsData;
    }

    /**提交学校信息 */
    async submitInformationUniver(data) {
        for (let i = 0; i < data.length; i++) {
            query(`INSERT INTO sys_colleges_universities(
                password, universities_name,id_card_number,includingDepartments,telephone,address,mailbox,zip_code)
                VALUES ('${data[i].password}', '${data[i].universities_name}', '${data[i].id_card_number}', '${data[i].includingDepartments}', '${data[i].telephone}', '${data[i].address}', '${data[i].mailbox}', '${data[i].zip_code}')`);
        }
        return;
    }
    /**
     * 提交书记信息 */
    async submitInformationSecretary(data) {
        for (let i = 0; i < data.length; i++) {
            await query(`INSERT INTO sys_department_secretary(
                universitiesId, collegeId, secretary_name, secretary_sex, entry_time, guide_nation, secretary_birthday, universities, secretary_college, telephone, address, id_card_number, password)
                VALUES (${parseInt(data[i].universitiesId)}, ${parseInt(data[i].collegeId)}, '${data[i].secretary_name}', '${data[i].secretary_sex}', '${data[i].entry_time}', '${
                data[i].guide_nation
            }', '${data[i].secretary_birthday}', '${data[i].universities}', '${data[i].secretary_college}', '${data[i].telephone}', '${data[i].address}', '${data[i].id_card_number}', '${
                data[i].password
            }')`);
        }
        return;
    }
    /**提交导员信息
     */
    async submitInformatioguide(data) {
        for (let i = 0; i < data.length; i++) {
            await query(`INSERT INTO sys_guide_table(
               collegeId, guide_name, guide_sex, entry_time, guide_nation, birthday, school_name, guide_college, telephone, address, political_outlook, id_card_number, password)
                VALUES (${parseInt(data[i].collegeId)}, '${data[i].guide_name}', '${data[i].guide_sex}','${data[i].entry_time}', '${data[i].guide_nation}', '${data[i].birthday}', '${
                data[i].school_name
            }', '${data[i].guide_college}', '${data[i].telephone}', '${data[i].address}','${data[i].political_outlook}', '${data[i].id_card_number}', '${data[i].password}')`);
        }
        return;
    }
    /**提交学生信息
     */
    async submitInformationStudents(data) {
        for (let i = 0; i < data.length; i++) {
            await query(`INSERT INTO sys_students(
                guide_id, student_no, student_name, student_sex, student_start_year, student_finish_year, student_nation, student_birthday, university_name, student_college, student_major, major_categories, password, class_name, id_card_type, student_class, id_card_number, political_outlook, student_status, contact_number, educational_system, training_level, cultivation_method, learning_form, grade, current_grade, mode_of_admission, e_mail, nature_of_household_registration, home_address, home_zip_code, home_contact_number)
                VALUES (${parseInt(data[i].guide_id)}, '${data[i].student_no}', '${data[i].student_name}','${data[i].student_sex}', '${data[i].student_start_year}', '${
                data[i].student_finish_year
            }', '${data[i].student_nation}', '${data[i].student_birthday}', '${data[i].university_name}', '${data[i].student_college}','${data[i].student_major}', '${data[i].major_categories}', '${
                data[i].password
            }', '${data[i].class_name}', '${data[i].id_card_type}', '${data[i].student_class}', '${data[i].id_card_number}', '${data[i].political_outlook}', '${data[i].student_status}', '${
                data[i].contact_number
            }', '${data[i].educational_system}', '${data[i].training_level}','${data[i].cultivation_method}', '${data[i].learning_form}', '${data[i].grade}', '${data[i].current_grade}', '${
                data[i].mode_of_admission
            }', '${data[i].e_mail}', '${data[i].nature_of_household_registration}', '${data[i].home_address}', '${data[i].home_zip_code}', '${data[i].home_contact_number}')`);
        }
        return;
    }
}
module.exports = new sys();
