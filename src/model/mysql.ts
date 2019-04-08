import * as mysql from 'mysql'
import CONFIG from '../config'
import { IBaseDb } from './BaseDb'


const defaultConfig = CONFIG.MYSQL
/**
 * mysql类.
 *
 * @class BlogMysql
 */
export class BlogMysql implements IBaseDb{
  constructor(config = {}) {
    this.init(config)
  }
  pool: mysql.Pool
  config: IMysqlConfig
  init(config: any) {
    // init config
    this.config = Object.assign({}, defaultConfig, config)

    this.pool = mysql.createPool(this.config)
    this.pool.on('acquire', connection => {
      console.log('=============== acquire ===============')
    })
    this.pool.on('connection', connection => {
      console.log('=============== connection ===============')
    })
    this.pool.on('enqueue', () => {
      console.log('=============== enqueue ===============')
    })
    this.pool.on('release', connection => {
      console.log('=============== release ===============')
    })
  }
  getConnection(sql: string, arr: string[]) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection(function(err, connection) {
        if (err) reject(err)

        resolve(connection)
      })
    })
  }
  query(sql: string, arr = []) {
    return new Promise((resolve, reject) => {
      this.getConnection(sql, arr)
        .then(res => {
          const connection = res as mysql.PoolConnection;
          connection.query(sql, arr, (error, results, fields) => {
            //将链接返回到连接池中，准备由其他人重复使用
            connection.release()

            if (error) reject(error)

            const send = {
              results: results,
              fields: fields
            }

            if (results.length > 0) {
              resolve(results[0])
              return
            }

            resolve(send)
          });
        })
    });
  }
  /**
   * 创建数据库或表. 
   */
  create(sql: string) {
    const self = this;
    return new Promise((resolve, reject) => {
      self.query(sql)
        .then(res => {
          console.log('=============== 创建成功 ===============');
        })
        .catch(err => {
          console.log('=============== 创建失败 ===============');
        })
    })
  }
  

}

interface IMysqlConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database:  string;
  connectionLimit?: 1;
  logger?(): void;
  logConnect?: boolean;
  logSql?: boolean,
}