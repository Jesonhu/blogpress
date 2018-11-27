"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const environments_1 = require("./environments");
;
mysql.Promise = global.Promise;
// 当前对应环境的 `mysql` 配置.
const { user, password, host, port, database } = environments_1.Environment.mysql;
const mysqlPool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    port: port,
    user: user,
    password: password,
    database: database
});
// @see https://www.npmjs.com/package/mysql
exports.Mysql = (query) => {
    return new Promise((resolve, reject) => {
        mysqlPool.getConnection((err, connect) => {
            reject(err);
            if (err)
                throw err; // 连接失败
            connect.query(query, (error, results, fields) => {
                connect.release(); // 关闭连接
                if (error)
                    throw error; // 处理数据库操作错误
                resolve(results); // 返回结果
            });
        });
    });
};
