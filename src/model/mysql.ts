import mysql from 'mysql';
import CONFIG from '../config';

const defaultConfig = CONFIG.MYSQL;
/**
 * mysql类.
 *
 * @class BlogMysql
 */
class BlogMysql {
  constructor(config) {
    this.init(config)
  }
  pool: mysql.Pool
  config: IMysqlConfig
  init(config) {
    this.config = Object.assign({}, defaultConfig, config);
    this.pool = mysql.createPool(this.config);
    this.pool.on('acquire', connection => {

    });
    this.pool.on('connection', connection => {

    });
    this.pool.on('enqueue', () => {

    });
    this.pool.on('release', connection => {

    });
  }
  getConnection(connection) {
    
  }

}

interface IMysqlConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database:  string;
  connectionLimit: 1;
  logger(): void;
  logConnect: boolean;
  logSql: boolean,
}