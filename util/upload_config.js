const path = require("path");
// koa文件处理
const fs = require("fs");
const uploadPath = path.join(__dirname, "../public/uploads"); // 定义文件上传目录

// 如果初始没有该文件目录，则自动创建
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

module.exports = uploadPath;
