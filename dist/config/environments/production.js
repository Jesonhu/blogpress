"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 生产环境相关配置.
 */
exports.default = {
    identity: 'production',
    port: 8080,
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'node_demo'
    }
};
