// 数据库连接的配置
const mysqlConfig = {
    user: "root", // 账号
    password: "root", // 密码
    database: "bs", // 数据库
    host: "localhost",
    timezone: "08:00", // 获取数据库时间 // 时区选择北京时间
    multipleStatements: true, // 启用多线池
    port: 3306, // 数据库接口
};
module.exports = mysqlConfig;
