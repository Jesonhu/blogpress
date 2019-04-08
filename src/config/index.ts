import { isProMode } from '../app.environment';
import devlopment from './development';
import production from './production';

export const config = isProMode ? production : devlopment;

export default {
  /** 端口 */
  PORT: config.port,
  /** Mysql 配置 */
  MYSQL: config.mysql
};