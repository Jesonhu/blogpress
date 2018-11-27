import devlopment from './devlopment';
import production from './production';
import test from './test';

const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';

// 生产环境, mysql配置不完整提示
// if (isProd && (!production.mysql.user || !production.mysql.password)) {
//   console.error('mysql.production need set MYSQL_USER && MYSQL_PASSWORD');
//   process.exit(1);
// }

// 测试环境：使用测试配置.
// 非测试环境: 判断是开发环境还是生产环境，并使用对应配置.
const env = isTest ? test : (isProd ? production : devlopment);

export const Environment = env;