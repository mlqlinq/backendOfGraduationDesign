const mysql = require("mysql");
const config = require("./config");

// 创建连接池
const pool = mysql.createPool(config);
const query = (sql, val) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                //console.log(err, "数据库连接失败");
                resolve({
                    status: 500,
                });
            } else {
                connection.query(sql, val, (err, fields) => {
                    if (err) {
                        // 如果有错误就抛出
                        reject(err);
                        resolve({
                            status: 400,
                        });
                    } else {
                        //console.log("数据库连接成功");
                        // 结束会话
                        connection.release();
                        resolve(fields);
                    }
                    // connection.release()
                });
            }

            // 当连接池不需要使用时，关闭连接池
            pool.end();
        });
    });
};

module.exports = { query };
