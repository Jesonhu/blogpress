/**
 * 开发环境配置. 
 */
export default {
  mode: 'development',
  port: 3000,
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'node_demo',
    connectionLimit: 1,
    logger: console.log.bind(console), /* eslint no-console: ["error", { allow: ["log"] }] */
    logConnect: false,
    logSql: false
  }
}