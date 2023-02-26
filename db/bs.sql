/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : bs

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 26/02/2023 15:07:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for districtschos
-- ----------------------------
DROP TABLE IF EXISTS `districtschos`;
CREATE TABLE `districtschos`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '申请表单id',
  `school_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校名称',
  `college` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系',
  `student_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生学号，要唯一，不能重复',
  `student_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `student_sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '男' COMMENT '性别',
  `student_birthday` datetime NULL DEFAULT NULL COMMENT '出生日期',
  `student_nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `student_start_year` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2018' COMMENT '入学时间',
  `phone` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `educational_system` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学制',
  `student_major` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '专业',
  `grade` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '年级',
  `political_outlook` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `scoreRanking` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '成绩排名',
  `total_class_size` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '班级总人数',
  `is_comprehensive_survey` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '是否是综测(0-是, 1-否)',
  `total_number_of_comprehensive` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测总人数',
  `comprehensive_ranking` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测排名',
  `schoolReport` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '成绩单',
  `awards` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '获奖情况（包括日期、奖项名称、颁奖单位）',
  `reason_for_application` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '申请理由',
  `opinions_of_the_department` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院(系)意见(0-统一, 1-驳回)',
  `school_opinion` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校意见(0-统一, 1-驳回)',
  `student_img` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片路径',
  `student_class` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所在班级',
  `required_quantity` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '必修数量',
  `number_of_passes` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '及格数量',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '区奖学金表单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of districtschos
-- ----------------------------
INSERT INTO `districtschos` VALUES (21, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩', '男', '2022-03-10 00:00:00', '汉族', '2019-09', '13686838348', '4', '信息系统与信息管理', '2019级', '中共预备党员', '460400255221149662', '2', '60', '0', '61', '1', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '奖励', '申请理由', '{\"desc\":\"同意。\",\"resource\":\"0\"}', '{\"desc\":\"同意。\",\"resource\":\"0\"}', 'http://127.0.0.1:4090/uploads/1673532325058.jpg', '2班', '10', '9', '2023-01-15 23:23:48', '2023-02-16 16:47:47', 0);
INSERT INTO `districtschos` VALUES (22, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩1', '男', '2022-03-10 00:00:00', '汉族', '2019-09', '13686838348', '4', '信息系统与信息管理', '2019级', '中共预备党员', '460400255221149662', '1', '2', '0', '5', '6', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '曾获何种奖励', '申请理', '', '', 'http://127.0.0.1:4090/uploads/1676527585744.jpg', '2班', '3', '4', '2023-02-16 16:34:22', '2023-02-16 16:34:22', 0);

-- ----------------------------
-- Table structure for national_scholarship_application_information
-- ----------------------------
DROP TABLE IF EXISTS `national_scholarship_application_information`;
CREATE TABLE `national_scholarship_application_information`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `school_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高校名称',
  `college` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系名称',
  `student_no` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学号',
  `student_start_year` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2019-09' COMMENT '入学年份',
  `class_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '19软工2班' COMMENT '班级名称',
  `student_major` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '软件工程' COMMENT '专业名称',
  `educational_system` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '4' COMMENT '学制',
  `student_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `political_outlook` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '460400255221149662' COMMENT '身份证号',
  `student_sex` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '性别',
  `student_nation` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `home_address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '广西崇左市扶绥县新宁镇水边村243号' COMMENT '家庭地址(具体到县镇村)',
  `total_house_p` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭人口总数（人）',
  `contact_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '本人联系电话',
  `family_member_information` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭成员信息',
  `per_capita_annual_income` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭月总收入(元)',
  `annual_per_capita` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '人均月收入(元)',
  `home_zip_code` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '532100' COMMENT '家庭邮编',
  `nature_of_household_registration` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '户口性质',
  `application_level` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '申请等级',
  `source_of_income` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '收入来源',
  `reason_for_application` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '申请理由',
  `class_comments` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '班级评议意见',
  `opinions_of_the_department` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系意见',
  `school_opinion` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高校审核意见',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '国家助学金申请信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of national_scholarship_application_information
-- ----------------------------
INSERT INTO `national_scholarship_application_information` VALUES (14, '广西民族大学相思湖学院', '理工学院', '10000001', '2019-09', '19软工2班', '信息系统与信息管理', '4', '叶浩', '中共预备党员', '460400255221149662', '男', '汉族', '淄博', '4', '13686838348', '[{\"name\":\"1\",\"parentIDNum\":\"2\",\"age\":\"3\",\"call\":\"父亲\",\"currentEducation\":\"义务教育阶段\",\"occupation\":\"学生无业人员(无收入)\",\"wSUnit\":\"4\",\"annualIncome\":\"5\",\"health\":\"良好\",\"healthDescription\":\"6\"}]', '2000', '500', '6403131!7', '城镇户口', '2300', '[\"无其它收入来源\"]', 'liyou ', '{\"desc\":\"情况属实，该生确定是经济困难学生！\",\"resource\":\"0\"}', '{\"desc\":\"情况属实，同意该生审评 一等助学金\",\"resource\":\"0\"}', '{\"desc\":\"经评审，并在校内公示5个工作日，无异议，现报请同意该同学获得国家助学金。\",\"resource\":\"0\"}', '2023-01-19 23:05:50', '2023-02-09 16:43:02', 0);

-- ----------------------------
-- Table structure for nationalendeavor
-- ----------------------------
DROP TABLE IF EXISTS `nationalendeavor`;
CREATE TABLE `nationalendeavor`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '申请表单id',
  `school_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校名称',
  `college` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系',
  `class_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '19软工2班' COMMENT '班级名称',
  `student_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生学号，要唯一，不能重复',
  `student_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `student_sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '男' COMMENT '性别',
  `student_birthday` datetime NULL DEFAULT NULL COMMENT '出生日期',
  `student_nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `student_start_year` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2018' COMMENT '入学时间',
  `phone` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `student_major` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '专业',
  `political_outlook` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `grade` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '年级',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `required_quantity` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '必修数量',
  `number_of_passes` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '及格数量',
  `scoreRanking` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '成绩排名',
  `total_class_size` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '班级总人数',
  `schoolReport` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '成绩单',
  `is_comprehensive_survey` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '是否是综测(0-是, 1-否)',
  `awards` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '曾获何种奖励',
  `reason_for_application` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '申请理由',
  `opinions_of_the_department` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系审核意见(0-统一, 1-驳回)',
  `school_opinion` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校审核意见(0-统一, 1-驳回)',
  `student_img` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生电子照片地址',
  `comprehensive_ranking` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测排名',
  `total_number_of_comprehensive` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测总人数',
  `total_house_p` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭人口总数（人）',
  `total_monthly_house` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭月总收入(元)',
  `source_of_income` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '收入来源',
  `per_capita_monthly` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '人均月收入(元)',
  `home_address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭住址',
  `postal_code` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮政编码',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '国家励志奖学金表单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nationalendeavor
-- ----------------------------
INSERT INTO `nationalendeavor` VALUES (21, '广西民族大学相思湖学院', '理工学院', '19软工2班', '10000001', '叶浩', '男', '2022-03-10 00:00:00', '汉族', '2019-09', '13686838348', '信息系统与信息管理', '中共预备党员', '2019级', '460400255221149662', '1', '22', '1', '22', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '0', '奖励', 'liyou ', '{\"desc\":\"2 e\",\"resource\":\"0\"}', '{\"desc\":\"333\",\"resource\":\"0\"}', 'http://127.0.0.1:4090/uploads/1673532325058.jpg', '12', '22', 'q', 'q', 'q', 'q', '淄博q', 'q', '2023-01-15 14:50:52', '2023-02-16 16:40:54', 0);

-- ----------------------------
-- Table structure for nationalschos
-- ----------------------------
DROP TABLE IF EXISTS `nationalschos`;
CREATE TABLE `nationalschos`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '申请表单id',
  `school_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校名称',
  `college` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系',
  `student_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生学号，要唯一，不能重复',
  `student_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `student_sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '男' COMMENT '性别',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `phone` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `student_major` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '专业',
  `student_nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `political_outlook` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `scoreRanking` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '成绩排名',
  `total_class_size` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '班级总人数',
  `student_birthday` datetime NULL DEFAULT NULL COMMENT '出生日期',
  `awards` varchar(6000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '获奖情况（包括日期、奖项名称、颁奖单位）',
  `opinions_of_the_department` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院(系)意见(0-统一, 1-驳回)',
  `school_opinion` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校意见(0-统一, 1-驳回)',
  `student_start_year` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2018' COMMENT '入学时间',
  `educational_system` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学制',
  `student_class` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所在班级',
  `required_quantity` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '必修数量',
  `number_of_passes` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '及格数量',
  `is_comprehensive_survey` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '是否是综测(0-是, 1-否)',
  `comprehensive_ranking` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测排名',
  `total_number_of_comprehensive` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测总人数',
  `reason_for_application` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '申请理由',
  `schoolReport` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '成绩单',
  `reason_for_recommendation` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '推荐理由',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '国家奖学金表单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nationalschos
-- ----------------------------
INSERT INTO `nationalschos` VALUES (21, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩', '男', '460400255221149662', '13686838348', '信息系统与信息管理', '汉族', '中共预备党员', '1', '60', '2022-03-10 00:00:00', '[{\"dataTime\":\"2019年\",\"awardName\":\"先进个人\",\"awardingUnit\":\"理工学院学生会\",\"edit\":false}]', '{\"desc\":\"书记同意。\",\"resource\":\"0\"}', '{\"desc\":\"经评审，并在校内公示  5 个工作日，无异议，现报请批准该同学获得国家奖学金。\",\"resource\":\"0\"}', '2019-09', '4', '2班', '10', '10', '0', '2', '61', '申请理由', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '{\"desc\":\"导员同意了\",\"resource\":\"0\"}', '2023-01-16 00:09:07', '2023-02-16 16:39:21', 0);
INSERT INTO `nationalschos` VALUES (22, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩', '男', '460400255221149662', '13686838348', '信息系统与信息管理', '汉族', '中共预备党员', '1', '60', '2022-03-10 00:00:00', '[{\"dataTime\":\"2019年\",\"awardName\":\"先进个人\",\"awardingUnit\":\"理工学院学生会\",\"edit\":false},{\"dataTime\":\"2020年\",\"awardName\":\"先进个人\",\"awardingUnit\":\"理工学院学生会\",\"edit\":false}]', '', '', '2019-09', '4', '2班', '10', '9', '0', '2', '61', '申请理由', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '', '2023-01-16 00:18:34', '2023-02-16 16:39:22', 0);

-- ----------------------------
-- Table structure for poor_student_certification
-- ----------------------------
DROP TABLE IF EXISTS `poor_student_certification`;
CREATE TABLE `poor_student_certification`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `school_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高校名称',
  `college` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系名称',
  `student_no` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学号',
  `student_start_year` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2019-09' COMMENT '入学年份',
  `grade` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '3' COMMENT '年级',
  `class_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '19软工2班' COMMENT '班级名称',
  `student_major` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '软件工程' COMMENT '专业名称',
  `student_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '460400255221149662' COMMENT '身份证号',
  `student_sex` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '性别',
  `student_nation` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `student_birthday` date NULL DEFAULT NULL COMMENT '学生出生日期',
  `health` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '健康状况',
  `registered_residence_province` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '广西壮族自治区' COMMENT '户籍所在地(省)',
  `registered_residence_city` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '崇左市' COMMENT '户籍所在地(市)',
  `registered_residence_county` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '扶绥县' COMMENT '户籍所在地(区县)',
  `home_address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '广西崇左市扶绥县新宁镇水边村243号' COMMENT '家庭地址(具体到县镇村)',
  `health_materials` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '个人健康状况辅助说明材料，没有可不上传',
  `poverty_relief_families` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否脱贫家庭',
  `subsistence_allowance` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否城乡低保',
  `special_poverty_relief` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否城乡特困救助供养',
  `unstable_families` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否脱贫不稳定家庭已消除风险',
  `have_not_eliminated_risks` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否脱贫不稳定家庭未消除风险',
  `marginal_vulnerable_poor` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否边缘易致贫户家庭未消除风险',
  `risk_not_eliminated_by_the_family` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否边缘易致贫户家庭已消除风险',
  `martyr_children` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否烈士子女',
  `orphan_or_not` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否孤儿（含事实无人抚养儿童）',
  `employees_with_difficulties` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否建档困难职工家庭学生',
  `difficulties_have_been_eliminated` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否突发严重困难户已消除风险',
  `difficulties_have_not_been` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否突发严重困难户未消除风险',
  `caused_by_emergencies` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否突发事件致贫家庭',
  `single_parent_family` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '是否单亲家庭',
  `total_house_p` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭人口总数（人）',
  `contact_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '本人联系电话',
  `parent_contact_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家长联系电话',
  `home_zip_code` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭邮编',
  `family_member_information` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭成员信息',
  `father_health` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '父亲健康状况辅助说明材料，没有可不上传',
  `mother_health` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '母亲健康状况辅助说明材料，没有可不上传',
  `preschool_government_funding` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学前政府资助',
  `compulsory_education_family` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '义务教育家庭经济困难学生生活补助',
  `national_financial_aid` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高中(含中职)国家助学金',
  `tuition_reduction` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高中减免学费',
  `national_financial_aid_last_year` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '本专科上学年国家助学金',
  `national_student_loan` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '本专科上学年国家助学贷款',
  `tuition_reduction_last_year` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '本专科上学年减免学费',
  `per_capita_annual_income` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭人均年收入(标准)（自行查询当地当年最低生活保障标准）',
  `annual_per_capita` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭人均年收入（元）',
  `accumulated_losses_three_years` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭遭受自然灾害累计损失情况(近三年)',
  `accidents_three_years` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭遭受意外事件累计损失情况(近三年)',
  `household_debt` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭负债情况(不包括房贷、车贷及其他消费贷款)',
  `large_expenditure` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭有哪些大额支出',
  `household_income_source` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭其他收入来源',
  `housing_situation` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生家庭住房情况',
  `own_a_car` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭是否拥有汽车',
  `other_situations` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '其他情况情况描述',
  `materials_of_natural_disasters` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭遭受自然灾害累计损失情况辅助说明材料，没有可不上传',
  `accidental_materials` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭遭受意外事件累计损失情况辅助说明材料，没有可不上传',
  `auxiliary_instruction_materials` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '辅助说明材料，没有可不上传',
  `reasons_for_democratic_review` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民主评议陈述理由',
  `opinions_of_the_department` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系审核意见',
  `school_review_comments` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校审核意见',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '贫困生认证信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of poor_student_certification
-- ----------------------------
INSERT INTO `poor_student_certification` VALUES (15, '广西民族大学相思湖学院', '理工学院', '10000001', '2019-09', '4', '19软工2班', '信息系统与信息管理', '叶浩', '460400255221149662', '男', '汉族', '2022-03-10', '良好', '广西壮族自治区', '南宁市', '兴宁区', '淄博', '[\"http://127.0.0.1:4090/uploads/1675847925006.jpg\",\"http://127.0.0.1:4090/uploads/1675847925006.jpg\"]', '否', '否', '否', '否', '否', '否', '否', '否', '否', '否', '否', '否', '否', '否', '4', '13686838348', '18378161703', '6403131!7', '[{\"name\":\"1\",\"parentIDNum\":\"2\",\"age\":\"3\",\"call\":\"父亲\",\"currentEducation\":\"义务教育阶段\",\"occupation\":\"学生无业人员(无收入)\",\"wSUnit\":\"4\",\"annualIncome\":\"5\",\"health\":\"良好\",\"healthDescription\":\"6\"}]', '[\"http://127.0.0.1:4090/uploads/1674105011687.jpg\"]', '[\"http://127.0.0.1:4090/uploads/1674105014653.jpg\"]', '否', '否', '否', '否', '否', '否', '否', '小于等于当地最低生活保障标准', '1000', '未遭受', '未遭受', '无负债', '[\"以上都没有\"]', '[\"有共同生活的祖父母养老金收入\"]', '农村住房', '否', '其他情况情况描述', '[\"http://127.0.0.1:4090/uploads/1674105050856.jpg\"]', '[\"http://127.0.0.1:4090/uploads/1674105053718.jpg\"]', '[\"http://127.0.0.1:4090/uploads/1674105057237.jpg\"]', '{\"desc\":\"经评议及公示无异议，该同学为家庭经济困难学生,认定困难类型为：特别困难\",\"resource\":\"0\"}', '{\"desc\":\"经院系评议及公示无异议，该同学为家庭经济困难学生。\",\"resource\":\"0\"}', '{\"desc\":\"经学校评议及公示无异议，该同学为家庭经济困难学生。\",\"resource\":\"0\"}', '2023-01-19 13:55:34', '2023-02-08 20:57:03', 0);

-- ----------------------------
-- Table structure for sys_colleges_universities
-- ----------------------------
DROP TABLE IF EXISTS `sys_colleges_universities`;
CREATE TABLE `sys_colleges_universities`  (
  `universities_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '高校id',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `universities_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高校名',
  `id_card_number` bigint(20) NULL DEFAULT NULL COMMENT '高校代码',
  `includingDepartments` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '包含院系',
  `telephone` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '校办电话',
  `address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '地址',
  `mailbox` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `zip_code` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮编',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`universities_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '高校表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_colleges_universities
-- ----------------------------
INSERT INTO `sys_colleges_universities` VALUES (1, '123456', '广西民族大学相思湖学院', 13640, '[{\"id\":\"0\",\"value\":\"理工学院\"},{\"id\":\"1\",\"value\":\"体育与健康科学学院\"},{\"id\":\"2\",\"value\":\"管理学院\"},{\"id\":\"3\",\"value\":\"法学院\"},{\"id\":\"4\",\"value\":\"艺术与设计学院\"},{\"id\":\"5\",\"value\":\"文化与传媒学院\"},{\"id\":\"6\",\"value\":\"外国语言文学学院\"},{\"id\":\"7\",\"value\":\"商学院\"},{\"id\":\"8\",\"value\":\"马克思主义学院\"},{\"id\":\"9\",\"value\":\"创新创业学院\"}]', '18412397646', '南宁', 'ahmad.langosh@yahoo.com', '532100', '2023-01-14 16:04:16', '2023-02-09 22:27:42', 0);
INSERT INTO `sys_colleges_universities` VALUES (2, '123456', '南宁学院', 11549, NULL, '17608304620', '南宁', 'charles.moore@yahoo.com', '532104', '2023-01-14 16:04:16', '2023-01-14 16:26:53', 0);
INSERT INTO `sys_colleges_universities` VALUES (7, '123456', '广西民族大学', 13641, '[{\"id\":\"0\",\"value\":\"理工学院\"},{\"id\":\"1\",\"value\":\"体育与健康科学学院\"},{\"id\":\"2\",\"value\":\"管理学院\"},{\"id\":\"3\",\"value\":\"法学院\"},{\"id\":\"4\",\"value\":\"艺术与设计学院\"},{\"id\":\"5\",\"value\":\"文化与传媒学院\"},{\"id\":\"6\",\"value\":\"外国语言文学学院\"},{\"id\":\"7\",\"value\":\"商学院\"},{\"id\":\"8\",\"value\":\"马克思主义学院\"},{\"id\":\"9\",\"value\":\"创新创业学院\"}]', '18412397646', '南宁', 'ahmad.langosh@yahoo.com', '532100', '2023-02-12 21:46:59', '2023-02-12 22:01:12', 0);

-- ----------------------------
-- Table structure for sys_department_secretary
-- ----------------------------
DROP TABLE IF EXISTS `sys_department_secretary`;
CREATE TABLE `sys_department_secretary`  (
  `secretary_id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '书记id',
  `universitiesId` bigint(20) NOT NULL COMMENT '所属高校id',
  `collegeId` bigint(20) NOT NULL COMMENT '所属学院id',
  `secretary_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '书记姓名',
  `imageUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '书记证件照',
  `secretary_sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '书记性别',
  `entry_time` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2018' COMMENT '入职时间',
  `guide_nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `secretary_birthday` datetime NULL DEFAULT NULL COMMENT '书记生日',
  `universities` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高校名',
  `secretary_college` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '理工学院' COMMENT '所属学院',
  `telephone` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '联系方式',
  `address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '住址',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`secretary_id`, `universitiesId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '书记表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_department_secretary
-- ----------------------------
INSERT INTO `sys_department_secretary` VALUES (1, 1, 0, '汪鸿煊', 'http://127.0.0.1:4090/uploads/1676530216098.jpg', '男', '2018', '阿昌族', '2022-11-04 09:59:44', '广西民族大学相思湖学院', '理工学院', '14701871914', '惠州', '460400255221149642', '123456', '2023-01-14 15:54:40', '2023-02-16 14:50:16', 0);
INSERT INTO `sys_department_secretary` VALUES (2, 1, 1, '蔡睿渊', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '男', '2018', '仫佬族', '2022-10-20 16:46:15', '广西民族大学相思湖学院', '体育与健康科学学院', '17760870282', '舟山', '460400255221149658', '123456', '2023-01-14 15:54:40', '2023-02-10 22:04:03', 0);
INSERT INTO `sys_department_secretary` VALUES (3, 1, 2, '唐绍辉', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '男', '2018', '哈尼族', '2022-01-13 09:49:56', '广西民族大学相思湖学院', '管理学院', '15704784191', '韶关', '460400255221149667', '123456', '2023-01-14 15:54:40', '2023-02-10 22:04:03', 0);
INSERT INTO `sys_department_secretary` VALUES (4, 1, 3, '胡哲瀚', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '女', '2018', '傣族', '2022-03-31 11:09:04', '广西民族大学相思湖学院', '法学院', '17236100654', '三门峡', '460400255221149690', '123456', '2023-01-14 15:54:40', '2023-02-10 22:04:04', 0);
INSERT INTO `sys_department_secretary` VALUES (5, 1, 4, '戴晋鹏', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '男', '2018', '拉祜族', '2022-06-06 02:09:45', '广西民族大学相思湖学院', '艺术与设计学院', '17840737754', '南京', '460400255221149641', '123456', '2023-01-14 15:54:40', '2023-02-10 22:04:04', 0);
INSERT INTO `sys_department_secretary` VALUES (6, 1, 5, '夏伟泽', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '女', '2018', '回族', '2022-03-29 01:14:11', '广西民族大学相思湖学院', '文化与传媒学院', '15393127792', '兰州', '460400255221149616', '123456', '2023-01-14 15:54:40', '2023-02-10 22:04:05', 0);
INSERT INTO `sys_department_secretary` VALUES (7, 1, 6, '董明', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '女', '2018', '维吾尔族', '2022-04-06 18:15:33', '广西民族大学相思湖学院', '外国语言文学学院', '17179278706', '铜川', '460400255221149631', '123456', '2023-01-14 15:54:40', '2023-02-10 22:04:06', 0);

-- ----------------------------
-- Table structure for sys_guide_table
-- ----------------------------
DROP TABLE IF EXISTS `sys_guide_table`;
CREATE TABLE `sys_guide_table`  (
  `guide_id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '导员id',
  `collegeId` bigint(20) NOT NULL COMMENT '所属学院id',
  `guide_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '导员姓名',
  `guide_sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '导员性别',
  `imageUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '导员证件照',
  `entry_time` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2018' COMMENT '入职时间',
  `guide_nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `birthday` datetime NULL DEFAULT NULL COMMENT '导员生日',
  `school_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所属高校',
  `guide_college` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '理工学院' COMMENT '学院',
  `telephone` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '联系方式',
  `address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '住址',
  `political_outlook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`guide_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '导员表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_guide_table
-- ----------------------------
INSERT INTO `sys_guide_table` VALUES (1, 1, '洪皓轩', '男', 'http://127.0.0.1:4090/uploads/1676529755922.jpg', '2018-06', '满族', '1988-10-20 10:59:26', '广西民族大学相思湖学院', '理工学院', '14514805619', '德州', '中共党员', '460400255221149657', '123456', '2023-01-14 15:49:03', '2023-02-16 14:42:36', 0);
INSERT INTO `sys_guide_table` VALUES (2, 1, '范立辉', '女', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018-06', '苗族', '2022-09-30 15:59:25', '广西民族大学相思湖学院', '理工学院', '15249474099', '太原', '中共党员', '460400255221149619', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:08', 0);
INSERT INTO `sys_guide_table` VALUES (3, 1, '董立辉', '女', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '拉祜族', '2022-12-06 01:13:48', '广西民族大学相思湖学院', '理工学院', '17795118259', '长沙', '中共党员', '460400255221149668', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:09', 0);
INSERT INTO `sys_guide_table` VALUES (4, 1, '陆伟祺', '女', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '水族', '2022-12-28 04:32:41', '广西民族大学相思湖学院', '理工学院', '17715038092', '吉林', '中共党员', '460400255221149660', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:10', 0);
INSERT INTO `sys_guide_table` VALUES (5, 1, '秦文博', '男', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '鄂温克族', '2022-03-13 03:13:44', '广西民族大学相思湖学院', '理工学院', '17699943993', '安阳', '中共党员', '460400255221149695', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:11', 0);
INSERT INTO `sys_guide_table` VALUES (6, 1, '潘峻熙', '男', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '纳西族', '2022-01-07 21:44:19', '广西民族大学相思湖学院', '理工学院', '14580403932', '清远', '中共党员', '460400255221149643', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:12', 0);
INSERT INTO `sys_guide_table` VALUES (7, 1, '彭志泽', '男', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '怒族', '2022-08-04 17:24:11', '广西民族大学相思湖学院', '理工学院', '14598034574', '常州', '中共党员', '460400255221149668', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:12', 0);
INSERT INTO `sys_guide_table` VALUES (8, 1, '唐瑞霖', '男', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '羌族', '2022-09-27 18:12:43', '广西民族大学相思湖学院', '理工学院', '17223735262', '招远', '中共党员', '460400255221149634', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:13', 0);
INSERT INTO `sys_guide_table` VALUES (9, 1, '秦立轩', '女', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '蒙古族', '2022-01-06 17:45:34', '广西民族大学相思湖学院', '理工学院', '17141379119', '郑州', '中共党员', '460400255221149616', '123456', '2023-01-14 15:49:03', '2023-02-09 19:14:14', 0);
INSERT INTO `sys_guide_table` VALUES (10, 1, '余智渊', '女', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '2018', '景颇族', '2022-10-09 10:59:15', '南宁学院', '理工学院', '15873459633', '哈尔滨', '中共党员', '460400255221149640', '123456', '2023-01-14 15:49:04', '2023-02-09 19:14:15', 0);

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `menu_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单名称',
  `parent_id` bigint(20) NULL DEFAULT 0 COMMENT '父菜单ID',
  `order_num` int(4) NULL DEFAULT 0 COMMENT '显示顺序',
  `path` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '路由地址',
  `component` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组件路径',
  `is_cache` int(1) NULL DEFAULT 0 COMMENT '是否缓存（0缓存 1不缓存）',
  `menu_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '菜单类型（M目录 C菜单）',
  `visible` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '菜单状态（0显示 1隐藏）',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '菜单状态（0正常 1停用）',
  `icon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜单图标',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '备注',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '菜单权限表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, '系统管理', 0, 1, 'system', NULL, 0, 'M', '0', '0', 'setTing', 'admin', '2023-01-05 14:24:16', '', '2023-01-05 14:24:16', '', 0);
INSERT INTO `sys_menu` VALUES (2, '系统用户管理', 1, 1, 'userManagement', 'system/user/userManagement', 0, 'C', '0', '0', 'userIcon', 'admin', '2023-02-09 17:32:56', '', '2023-02-09 17:32:56', '用户管理菜单', 0);
INSERT INTO `sys_menu` VALUES (4, '菜单管理', 1, 2, 'menuManagement', 'system/menu/menuManagement', 0, 'C', '0', '0', 'menuIcon', 'admin', '2023-01-05 14:24:26', '', '2023-01-05 14:24:26', '菜单管理菜单', 0);
INSERT INTO `sys_menu` VALUES (10, '奖学金申请', 0, 2, 'Scholarship', '', 0, 'M', '0', '0', 'applyIcon', '', '2023-01-05 14:24:30', '', '2023-01-05 14:24:30', '', 0);
INSERT INTO `sys_menu` VALUES (11, '校奖学金', 10, 1, 'universityScho', 'Scholarship/universityScho', 0, 'C', '0', '0', 'universityScho', '', '2023-01-16 23:27:08', '', '2023-01-16 23:27:08', '', 0);
INSERT INTO `sys_menu` VALUES (12, '区奖学金 ', 10, 2, 'districtScho', 'Scholarship/districtScho', 0, 'C', '0', '0', 'districtScho', '', '2023-01-16 23:29:13', '', '2023-01-16 23:29:13', '', 0);
INSERT INTO `sys_menu` VALUES (13, '国家奖学金', 10, 3, 'nationalScho', 'Scholarship/nationalScho', 0, 'C', '0', '0', 'nationalScho', '', '2023-01-16 23:31:42', '', '2023-01-16 23:31:42', '', 0);
INSERT INTO `sys_menu` VALUES (14, '勤工俭学管理', 0, 4, 'workStudy', NULL, 0, 'M', '0', '0', 'workStudy', '', '2023-01-11 16:51:07', '', '2023-01-11 16:51:07', '', 1);
INSERT INTO `sys_menu` VALUES (15, '岗位管理', 14, 1, 'postManagement', 'workStudy/postManagement', 0, 'C', '0', '0', '', '', '2023-01-11 16:51:08', '', '2023-01-11 16:51:08', '', 1);
INSERT INTO `sys_menu` VALUES (16, '岗位招聘', 14, 2, 'jobRecruitment', 'workStudy/jobRecruitment', 0, 'C', '0', '0', '', '', '2023-01-11 16:51:09', '', '2023-01-11 16:51:09', '', 1);
INSERT INTO `sys_menu` VALUES (17, '国家助学金', 0, 3, 'nationalGrants', NULL, 0, 'M', '0', '0', 'poor', '', '2023-01-05 14:24:37', '', '2023-01-05 14:24:37', '', 0);
INSERT INTO `sys_menu` VALUES (18, '贫困生认定', 17, 1, 'poorStudCertific', 'nationalGrants/poorStudCertific', 0, 'C', '0', '0', 'poorStud', '', '2023-01-16 21:54:02', '', '2023-01-16 21:54:02', '', 0);
INSERT INTO `sys_menu` VALUES (19, '申请助学金', 17, 2, 'applyAid', 'nationalGrants/applyAid', 0, 'C', '0', '0', 'applyAid', '', '2023-01-16 21:54:07', '', '2023-01-16 21:54:07', '', 0);
INSERT INTO `sys_menu` VALUES (27, '国家励志奖学金', 10, 4, 'nationalEndeavor', 'Scholarship/nationalEndeavor', 0, 'C', '0', '0', 'nationalEndeavor', '', '2023-01-16 23:30:24', '', '2023-01-16 23:30:24', '', 0);
INSERT INTO `sys_menu` VALUES (30, '我的', 0, 1, 'user', NULL, 0, 'M', '1', '0', NULL, '', '2023-01-05 15:23:00', '', '2023-01-05 15:23:00', '', 0);
INSERT INTO `sys_menu` VALUES (31, '个人信息', 30, 9, 'personalCenter', 'user/personalCenter', 0, 'C', '1', '0', '', '', '2023-01-09 13:31:32', '', '2023-01-09 13:31:32', '', 0);
INSERT INTO `sys_menu` VALUES (33, '填写申请', 30, 1, 'fillInTheApplication', 'Scholarship/fillInTheApplication', 0, 'C', '1', '0', NULL, '', '2023-01-13 23:44:40', '', '2023-01-13 23:44:40', '', 0);
INSERT INTO `sys_menu` VALUES (34, '审核申请', 0, 10, 'examine', NULL, 0, 'M', '0', '0', 'toExamine', '', '2023-01-19 23:46:54', '', '2023-01-19 23:46:54', '', 0);
INSERT INTO `sys_menu` VALUES (35, '奖学金审核', 34, 1, 'scholarshipReview', 'Scholarship/scholarshipReview', 0, 'C', '0', '0', 'fundReview', '', '2023-01-19 23:49:49', '', '2023-01-19 23:49:49', '', 0);
INSERT INTO `sys_menu` VALUES (36, '助学金审核', 34, 3, 'grantReview', 'nationalGrants/grantReview', 0, 'C', '0', '0', 'grantReview', '', '2023-01-19 23:57:17', '', '2023-01-19 23:57:17', '', 0);
INSERT INTO `sys_menu` VALUES (37, '家庭困难学生认定填报', 30, 10, 'confirmationFilling', 'nationalGrants/confirmationFilling', 0, 'C', '1', '0', NULL, '', '2023-02-09 17:12:02', '', '2023-02-09 17:12:02', '', 0);
INSERT INTO `sys_menu` VALUES (38, '国家助学金申请填报', 30, 11, 'financialAidFilling', 'nationalGrants/financialAidFilling', 0, 'C', '1', '0', NULL, '', '2023-02-08 14:46:28', '', '2023-02-08 14:46:28', '', 0);
INSERT INTO `sys_menu` VALUES (39, '贫困资格审核', 34, 2, 'povertyReview', 'nationalGrants/povertyReview', 0, 'C', '0', '0', 'povertyReview', '', '2023-01-19 23:55:07', '', '2023-01-19 23:55:07', '', 0);
INSERT INTO `sys_menu` VALUES (40, '高校用户管理', 0, 1, 'Management', '', 0, 'M', '0', '0', 'scManagement', '', '2023-02-09 17:34:42', '', '2023-02-09 17:34:42', '', 0);
INSERT INTO `sys_menu` VALUES (41, '高校管理', 40, 0, 'schoolManagement', 'system/schoolManagement/schoolManagement', 0, 'C', '0', '0', 'schoolManagement', '', '2023-02-09 17:34:45', '', '2023-02-09 17:34:45', '', 0);

-- ----------------------------
-- Table structure for sys_students
-- ----------------------------
DROP TABLE IF EXISTS `sys_students`;
CREATE TABLE `sys_students`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `guide_id` bigint(20) NOT NULL COMMENT '导员id',
  `student_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生学号，要唯一，不能重复',
  `student_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `student_sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生性别',
  `student_start_year` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2019-09' COMMENT '入学年份',
  `student_finish_year` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '2023-07' COMMENT '毕业年份',
  `student_nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `student_birthday` date NULL DEFAULT NULL COMMENT '学生出生日期',
  `university_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '高校名称',
  `student_college` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '理工学院' COMMENT '学院',
  `student_major` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '专业',
  `major_categories` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '工学' COMMENT '专业大类',
  `password` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '123456' COMMENT '密码',
  `class_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '19软工2班' COMMENT '班级名称',
  `id_card_type` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证件类型',
  `student_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '班别',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `political_outlook` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `student_status` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学籍状态',
  `contact_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `educational_system` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '4' COMMENT '学制',
  `imageUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '照片',
  `training_level` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '培养层次',
  `cultivation_method` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '培养方式',
  `learning_form` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '全日制' COMMENT '学习形式',
  `grade` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '年级',
  `current_grade` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '3' COMMENT '当前年级',
  `mode_of_admission` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '统招' COMMENT '入学方式',
  `e_mail` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电子邮箱',
  `student_bank_account_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生银行户名',
  `bank_of_deposit` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '开户银行',
  `bank_card_no` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '银行卡号',
  `nature_of_household_registration` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '户口性质',
  `home_address` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭地址',
  `home_zip_code` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭邮编',
  `home_contact_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '家庭联系电话',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '学生表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_students
-- ----------------------------
INSERT INTO `sys_students` VALUES (1, 1, '10000001', '叶浩1', '男', '2019-09', '2023-07', '汉族', '2022-03-10', '广西民族大学相思湖学院', '理工学院', '信息系统与信息管理', '工学', '123456', '19软工2班', '中华人民共和国来往港澳通行证', '2班', '460400255221149662', '中共预备党员', '在校生', '13686838348', '4', 'http://127.0.0.1:4090/uploads/1676527585744.jpg', '本科', '定向培养', '全日制', '2019级', '4', '统招', 'huey.smith@hotmail.com', '12321313131', '3213213123', '321321313', '城镇户口', '淄博', '6403131!7', '17140947278', '2023-01-04 21:51:12', '2023-02-16 14:07:46', 0);

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` int(20) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `dept_id` bigint(20) NULL DEFAULT NULL COMMENT '部门ID',
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户账号',
  `nick_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称',
  `user_type` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '00' COMMENT '用户类型（00系统用户）',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '用户邮箱',
  `phonenumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '手机号码',
  `sex` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '用户性别（0男 1女 2未知）',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '头像地址',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '密码',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '帐号状态（0正常 1停用）',
  `del_flag` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户信息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 103, 'admin', '管理员', '00', '@163.com', '15888888888', '0', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', 'admin123', '0', '0', 'admin', '2022-12-15 16:51:19', '', '2022-10-31 17:10:03', '', 0);
INSERT INTO `sys_user` VALUES (2, 105, 'mlq', '管理员', '0', '2923383669@qq.com', '15666666666', '0', 'http://www.mlqzclqq.xyz:8888/down/vnOq8jIgazEZ.gif', '123456', '0', '0', 'admin', '2022-10-31 16:51:19', '', '2022-12-15 23:21:15', '', 0);

-- ----------------------------
-- Table structure for universityschos
-- ----------------------------
DROP TABLE IF EXISTS `universityschos`;
CREATE TABLE `universityschos`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '申请表单id',
  `school_name` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校名称',
  `college` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '院系',
  `student_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生学号，要唯一，不能重复',
  `student_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学生姓名',
  `id_card_number` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '身份证号',
  `student_sex` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '男' COMMENT '性别',
  `phone` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `grade` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '年级',
  `student_major` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '专业',
  `student_nation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '民族',
  `political_outlook` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '政治面貌',
  `scoreRanking` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '平均分成绩排名',
  `total_class_size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '班级总人数',
  `awards` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '专长、创新表现',
  `class_opinion` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '班级意见',
  `opinions_of_the_department` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学院意见(0-同意, 1-驳回)',
  `school_opinion` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学校意见(0-同意, 1-驳回)',
  `dormitory_performance` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '宿舍表现',
  `student_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所在班级',
  `student_position` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '担任职务',
  `english_level` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '英语过级情况',
  `computer_level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '计算机过级情况',
  `minimum_core` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学年成绩最低分',
  `schoolReport` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '成绩单',
  `average` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '学年成绩平均分',
  `meritorious_deeds` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '先进事迹',
  `comprehensive_ranking` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测排名',
  `total_number_of_comprehensive` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '综测总人数',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否删除(0-未删, 1-已删)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '校奖学金表单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of universityschos
-- ----------------------------
INSERT INTO `universityschos` VALUES (21, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩', '460400255221149662', '男', '13686838348', '2018级', '软件工程', '汉族', '中共预备党员', '1', '60', '表现', '{\"desc\":\"叶浩同学符合一等奖学金条件,表现优秀，推荐其参评 2022-2023 学年度一等奖学金\",\"resource\":\"0\"}', '{\"desc\":\"评议为一 等奖学金。\",\"resource\":\"0\"}', '{\"desc\":\"\",\"resource\":\"0\"}', '良好', '2班', '班长', '6级', '2级', '10', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '90', '先进事迹', '2', '61', '2023-01-15 22:43:39', '2023-02-16 16:47:51', 0);
INSERT INTO `universityschos` VALUES (22, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩', '460400255221149662', '男', '13686838348', '2019级', '信息系统与信息管理', '汉族', '中共预备党员', '1', '60', '表现', '{\"desc\":\"111\",\"resource\":\"0\"}', '', '', '良好', '2班', '班长', '6级', '2级', '10', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '90', '先进事迹', '2', '61', '2023-01-15 22:43:39', '2023-02-16 16:47:52', 0);
INSERT INTO `universityschos` VALUES (23, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩', '460400255221149662', '男', '13686838348', '2019级', '信息系统与信息管理', '汉族', '中共预备党员', '1', '60', '表现', '{\"desc\":\"\",\"resource\":\"1\"}', '', '', '良好', '2班', '班长', '6级', '2级', '10', '[\"http://127.0.0.1:4090/uploads/1676536362729.jpg\"]', '90', '先进事迹', '2', '61', '2023-01-15 22:43:39', '2023-02-16 16:47:53', 0);
INSERT INTO `universityschos` VALUES (24, '广西民族大学相思湖学院', '理工学院', '10000001', '叶浩1', '460400255221149662', '男', '13686838348', '2019级', '信息系统与信息管理', '汉族', '中共预备党员', '1', '2', '专长、创新', '', '', '', '良好', '2班', '舍长', '英语过级情况', '计算机过级情况', '学年成绩最', '[\"http://127.0.0.1:4090/uploads/1676534547854.jpg\"]', '学年成绩平均', '主要先进事迹', '3', '4', '2023-02-16 16:06:52', '2023-02-16 16:06:52', 0);

SET FOREIGN_KEY_CHECKS = 1;
