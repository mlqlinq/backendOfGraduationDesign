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
            console.log("🚀 ~ file: poorStudCertific.js:11 ~ poorStudCertific ~ getStudentPoorData ~ List", List);
            // 删除id属性
            delete List[key].is_deleted;
            List[key].student_birthday = moment(List[key].student_birthday).format("YYYY-MM");
            List[key].create_time = moment(List[key].create_time).format("YYYY年MM月DD日");
            List[key].update_time = moment(List[key].update_time).format("YYYY年MM月DD日");
        }
        return List;
    }

    /* 认证申请 */
    async postStudentPoorApplyData(data) {
        await query(
            `INSERT INTO poor_student_certification(school_name,college,student_no,student_start_year,grade,class_name,student_major,student_name,id_card_number,student_sex,student_nation,student_birthday,health,registered_residence_province,registered_residence_city,registered_residence_county,home_address,health_materials,poverty_relief_families, subsistence_allowance, special_poverty_relief, unstable_families, have_not_eliminated_risks, marginal_vulnerable_poor, risk_not_eliminated_by_the_family, martyr_children, orphan_or_not, employees_with_difficulties, difficulties_have_been_eliminated, difficulties_have_not_been, caused_by_emergencies, single_parent_family, total_house_p, contact_number, parent_contact_number, home_zip_code, family_member_information, father_health, mother_health, preschool_government_funding, compulsory_education_family, national_financial_aid, tuition_reduction, national_financial_aid_last_year, national_student_loan, tuition_reduction_last_year, per_capita_annual_income, annual_per_capita, accumulated_losses_three_years, accidents_three_years, household_debt, large_expenditure, household_income_source, housing_situation, own_a_car, other_situations, materials_of_natural_disasters, accidental_materials, auxiliary_instruction_materials,reasons_for_democratic_review,opinions_of_the_department,school_review_comments) 
            VALUES ('${data.university_name}','${data.student_college}','${data.student_no}', '${data.student_start_year}','${data.current_grade}','${data.class_name}','${data.student_major}', '${
                data.student_name
            }', '${data.id_card_number}','${data.student_sex}', '${data.student_nation}', '${data.student_birthday}','${data.health}','${data.registered_residence_province}','${
                data.registered_residence_city
            }','${data.registered_residence_county}','${data.home_address}','${data.health_materials}','${data.poverty_relief_families}','${data.subsistence_allowance}','${
                data.special_poverty_relief
            }','${data.unstable_families}','${data.have_not_eliminated_risks}','${data.marginal_vulnerable_poor}','${data.risk_not_eliminated_by_the_family}','${data.martyr_children}','${
                data.orphan_or_not
            }','${data.employees_with_difficulties}','${data.difficulties_have_been_eliminated}','${data.difficulties_have_not_been}','${data.caused_by_emergencies}','${data.single_parent_family}','${
                data.total_house_p
            }','${data.contact_number}','${data.parent_contact_number}','${data.home_zip_code}','${data.family_member_information}','${data.father_health}','${data.mother_health}','${
                data.preschool_government_funding
            }','${data.compulsory_education_family}','${data.national_financial_aid}','${data.tuition_reduction}','${data.national_financial_aid_last_year}','${data.national_student_loan}','${
                data.tuition_reduction_last_year
            }','${data.per_capita_annual_income}','${data.annual_per_capita}','${data.accumulated_losses_three_years}','${data.accidents_three_years}','${data.household_debt}','${JSON.stringify(
                data.large_expenditure
            )}','${JSON.stringify(data.household_income_source)}','${data.housing_situation}','${data.own_a_car}','${data.other_situations}','${data.materials_of_natural_disasters}','${
                data.accidental_materials
            }','${data.auxiliary_instruction_materials}','','','')`
        );
    }
}

module.exports = new poorStudCertific();
