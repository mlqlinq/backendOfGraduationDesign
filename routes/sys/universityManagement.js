const sys = require("../../mysql/universityManagement");
const Router = require("koa-router");
const router = new Router();
const path = require("path"); // nodeJs内置路径模块
const fs = require("fs");
const xlsx = require("node-xlsx");
const uploadPath = require("../../util/upload_config"); // 定义文件上传目录
// 对数组 重新进行 排序
sortByKey = (array, key) => {
    return array.sort(function (a, b) {
        const x = a[key]; //如果要从小到大,把<,>互换就好
        const y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
    });
};

/**
 * 数组去重
 * @param {*} arr
 * @returns
 */
const filterRepeat = (arr, index) => {
    let newArr = [];
    let arrId = [];
    for (const item of arr) {
        if (arrId.indexOf(item[`${index}`]) == -1) {
            arrId.push(item[`${index}`]);
            newArr.push(item);
        }
    }
    return newArr;
};

const filterRepeat2 = (arr) => {
    let Array = []; //存放去重过后的数据
    let obj = {};
    for (const i = 0; i < arr.length; i++) {
        if (!obj[arr[i].user_id]) {
            Array.push(arr[i]);
            obj[arr[i].user_id] = true;
        }
    }
    return Array;
};

router.prefix("/univerMan");
router
    .get("/getUniversityManagemento", async (ctx) => {
        const { universitiesData, secretaryData, guideData, studentsData } = await sys.getData();
        universitiesData.forEach((item) => {
            for (const i in item) {
                if (Object.hasOwnProperty.call(item, i)) {
                    if (i === "includingDepartments" && Array.isArray(item.includingDepartments) === false) {
                        item.includingDepartments = item.includingDepartments === "" ? "" : JSON.parse(item.includingDepartments);
                    }
                    if (Array.isArray(item.includingDepartments)) {
                        for (let j = 0; j < secretaryData.length; j++) {
                            item.includingDepartments.forEach((el) => {
                                if (secretaryData[j].collegeId === parseInt(el.id) && secretaryData[j].universitiesId === item.universities_id) {
                                    el.children = [];
                                    el.children.push(secretaryData[j]);
                                    secretaryData[j].children = [];
                                }
                                if (Array.isArray(el.children)) {
                                    for (let m = 0; m < guideData.length; m++) {
                                        guideData[j].children = [];
                                        el.children.forEach((q) => {
                                            if (guideData[m].collegeId === q.secretary_id) {
                                                q.children.push(guideData[m]);
                                                const data = filterRepeat(q.children, "guide_id");
                                                q.children = data;
                                            }
                                            for (let k = 0; k < studentsData.length; k++) {
                                                if (Array.isArray(q.children)) {
                                                    q.children.forEach((n) => {
                                                        if (studentsData[k].guide_id === n.guide_id) {
                                                            if (Array.isArray(n.children)) {
                                                                n.children.push(studentsData[k]);
                                                                const data = filterRepeat(n.children, "user_id");
                                                                n.children = data;
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                }
            }
        });

        ctx.body = {
            msg: "查询成功！",
            data: universitiesData,
        };
    })

    .get("/getUniversityPerData", async (ctx) => {
        const id = ctx.request.query.id;
        const data = await sys.getUniversityPerData(id);
        ctx.body = {
            msg: "查询成功",
            data: data,
        };
    })

    .get("/getSecretaryPerData", async (ctx) => {
        const id = ctx.request.query.id;
        const data = await sys.getSecretaryPerData(id);
        ctx.body = {
            msg: "查询成功",
            data: data,
        };
    })

    .get("/getGuidePerData", async (ctx) => {
        const id = ctx.request.query.id;
        const data = await sys.getGuidePerData(id);
        ctx.body = {
            msg: "查询成功",
            data: data,
        };
    })

    .get("/getStudentsPerData", async (ctx) => {
        const id = ctx.request.query.id;
        const data = await sys.getStudentsPerData(id);
        ctx.body = {
            msg: "查询成功",
            data: data,
        };
    })

    .post("/uploadFormiadble", async (ctx) => {
        let idNum = "";
        if (ctx.request.query.idNum) {
            idNum = ctx.request.query.idNum;
        }
        let file = ctx.request.files.file; // 获取上传文件
        let fileExistPath = uploadPath; //这个路径是绝对路径
        let fileName = ""; //这是获取的文件名
        fs.readdirSync(path.format({ dir: fileExistPath })).forEach((files) => {
            fileName = files;
        });
        const absoluteFilePath = file.filepath; //整个文件的绝对路径
        const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(absoluteFilePath)); //这种方式是解析buffer的
        // const workSheetsFromFile = xlsx.parse(absoluteFilePath);
        let data = [];
        //循环读取表数据
        for (const val in workSheetsFromBuffer) {
            //下标数据
            let itemData = workSheetsFromBuffer[val];
            if (itemData.name === "sys_students") {
                let guideData;
                if (idNum) {
                    guideData = await sys.getGuidePerData(idNum);
                }
                //循环读取学生表数据
                for (const index in itemData.data) {
                    //0为表头数据
                    if (index == 0) {
                        continue;
                    }
                    data.push({
                        id: itemData.data[index][0],
                        student_no: itemData.data[index][1],
                        student_name: itemData.data[index][2],
                        student_sex: itemData.data[index][3],
                        student_start_year: itemData.data[index][4],
                        student_finish_year: itemData.data[index][5],
                        student_nation: itemData.data[index][6],
                        student_birthday: itemData.data[index][7],
                        guide_name: guideData ? guideData[0].guide_name : "",
                        university_name: itemData.data[index][9],
                        student_college: itemData.data[index][10],
                        student_major: itemData.data[index][11],
                        major_categories: itemData.data[index][12],
                        class_name: itemData.data[index][13],
                        student_class: itemData.data[index][14],
                        id_card_type: itemData.data[index][15],
                        id_card_number: itemData.data[index][16],
                        political_outlook: itemData.data[index][17],
                        student_status: itemData.data[index][18],
                        contact_number: itemData.data[index][19],
                        educational_system: itemData.data[index][20],
                        training_level: itemData.data[index][21],
                        cultivation_method: itemData.data[index][22],
                        learning_form: itemData.data[index][23],
                        grade: itemData.data[index][24],
                        current_grade: itemData.data[index][25],
                        mode_of_admission: itemData.data[index][26],
                        e_mail: itemData.data[index][27],
                        nature_of_household_registration: itemData.data[index][28],
                        home_address: itemData.data[index][29],
                        home_zip_code: itemData.data[index][30],
                        home_contact_number: itemData.data[index][31],
                        remarks: itemData.data[index][32],
                        isS: "学生",
                        guide_id: guideData ? guideData[0].guide_id : "",
                    });
                }
            } else if (itemData.name === "sys_guide_table") {
                //循环读取导员表数据
                let collegeId = 0;
                for (const index in itemData.data) {
                    //0为表头数据
                    if (index == 0) {
                        continue;
                    }
                    let GuideData = await sys.faculty(itemData.data[index][7]);
                    collegeId = GuideData[0].secretary_id;
                    //添加部门表数据
                    data.push({
                        id: itemData.data[index][0],
                        guide_name: itemData.data[index][1],
                        guide_sex: itemData.data[index][2],
                        entry_time: itemData.data[index][3],
                        guide_nation: itemData.data[index][4],
                        birthday: itemData.data[index][5],
                        school_name: itemData.data[index][6],
                        guide_college: itemData.data[index][7],
                        telephone: itemData.data[index][8],
                        address: itemData.data[index][9],
                        political_outlook: itemData.data[index][10],
                        id_card_number: itemData.data[index][11],
                        remarks: itemData.data[index][12],
                        isS: "导员",
                        collegeId: GuideData ? parseInt(collegeId) : "",
                    });
                }
            } else if (itemData.name === "sys_department_secretary") {
                let SecretaryData;
                if (idNum) {
                    SecretaryData = await sys.getUniversityPerData(idNum);
                }
                let collegeId = 0;

                //循环读取书记表数据
                for (const index in itemData.data) {
                    //0为表头数据
                    if (index == 0) {
                        continue;
                    }
                    if (!Array.isArray(SecretaryData[0].includingDepartments)) {
                        const array = JSON.parse(SecretaryData[0].includingDepartments);
                        for (let i = 0; i < array.length; i++) {
                            if (array[i].value === itemData.data[index][7]) {
                                collegeId = array[i].id;
                                break;
                            }
                        }
                    }
                    //添加部门表数据
                    data.push({
                        id: itemData.data[index][0],
                        secretary_name: itemData.data[index][1],
                        secretary_sex: itemData.data[index][2],
                        entry_time: itemData.data[index][3],
                        guide_nation: itemData.data[index][4],
                        secretary_birthday: itemData.data[index][5],
                        universities: itemData.data[index][6],
                        secretary_college: itemData.data[index][7],
                        telephone: itemData.data[index][8],
                        address: itemData.data[index][9],
                        id_card_number: itemData.data[index][10],
                        remarks: itemData.data[index][11],
                        isS: "书记",
                        universitiesId: SecretaryData ? SecretaryData[0].universities_id : "",
                        collegeId: SecretaryData ? parseInt(collegeId) : "",
                    });
                }
            } else if (itemData.name === "sys_colleges_universities") {
                //循环读取高校表数据
                for (const index in itemData.data) {
                    //0为表头数据
                    if (index == 0) {
                        continue;
                    }
                    //添加部门表数据
                    data.push({
                        id: itemData.data[index][0],
                        universities_name: itemData.data[index][1],
                        id_card_number: itemData.data[index][2],
                        telephone: itemData.data[index][3],
                        address: itemData.data[index][4],
                        includingDepartments: itemData.data[index][5],
                        mailbox: itemData.data[index][6],
                        zip_code: itemData.data[index][7],
                        remarks: itemData.data[index][8],
                        isS: "高校",
                    });
                }
            }
        }

        //循环遍历
        // for (let i = 0; i < data.length; i++) {
        //     //下标数据
        //     let itemData = data[i];
        //     if (!itemData) {
        //         continue;
        //     }
        // }
        let tableList = [];
        for (const k in data[0]) {
            tableList.push(k);
        }
        workSheetsFromBuffer[0].data.push(tableList);
        fs.unlinkSync(file.filepath); // 删除上传的文件
        ctx.body = {
            msg: "上传成功",
            data,
            tablecod: workSheetsFromBuffer[0].data,
        };
    })

    /**提交高校、书记、导员、学生 信息 */
    .post("/submitInformation", async (ctx) => {
        const data = ctx.request.body.data;
        const isP = ctx.request.body.isP;
        if (data[0][0].isS === "高校") {
            if (isP) {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = "123456";
                    data[0][i].includingDepartments = data[0][i].includingDepartments.replaceAll(",", "，");
                    const aa = data[0][i].includingDepartments.split("，");
                    const jdon = aa.map((item, index) => {
                        var newJson = {
                            id: index.toString(),
                            value: item,
                        };
                        return newJson;
                    });
                    data[0][i].includingDepartments = JSON.stringify(jdon);
                }
            } else {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = data[0][i].id_card_number;
                    const jdon = aa.map((item, index) => {
                        var newJson = {
                            id: index.toString(),
                            value: item,
                        };
                        return newJson;
                    });
                    data[0][i].includingDepartments = jdon;
                }
            }
            await sys.submitInformationUniver(data[0]);
        }
        if (data[0][0].isS === "书记") {
            if (isP) {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = "123456";
                }
            } else {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = data[0][i].id_card_number
                        .split(" ")
                        .join("")
                        .substring(str.length - 6);
                }
            }

            await sys.submitInformationSecretary(data[0]);
        }
        if (data[0][0].isS === "导员") {
            if (isP) {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = "123456";
                }
            } else {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = data[0][i].id_card_number
                        .split(" ")
                        .join("")
                        .substring(str.length - 6);
                }
            }
            await sys.submitInformatioguide(data[0]);
        }
        if (data[0][0].isS === "学生") {
            if (isP) {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = "123456";
                }
            } else {
                for (let i = 0; i < data[0].length; i++) {
                    data[0][i].password = data[0][i].id_card_number
                        .split(" ")
                        .join("")
                        .substring(str.length - 6);
                }
            }
            await sys.submitInformationStudents(data[0]);
        }
        ctx.body = {
            msg: "提交成功！",
        };
    });

module.exports = router;
