const CryptoJS = require("crypto-js");

// 此处key为16进制
let key = "385f33cb91484b04a177828829081ab7";

// key格式化处理
key = CryptoJS.enc.Utf8.parse(key);

// 加密
function encryptData(data) {
    if (typeof data === "object") {
        try {
            data = JSON.stringify(data);
        } catch (error) {
            console.log("encrypt error:", error);
        }
    }
    // 加密方法
    const encryptedContent = CryptoJS.AES.encrypt(data, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encryptedContent.ciphertext.toString();
}

// 解密
function decrypt  (data) {
	// 解密方法
	const decryptedContent = CryptoJS.AES.decrypt(CryptoJS.format.Hex.parse(data), key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});
	return CryptoJS.enc.Utf8.stringify(decryptedContent);
};

module.exports = { encryptData ,decrypt };
