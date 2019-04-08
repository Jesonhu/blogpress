export abstract class BaseDb {
  constructor(config = {}) {
    this.config = config;
  }
  config: any
  // 必须在派生类中实现
  abstract query(sql?: string, arr?: []): any

  abstract create(sql?: string): any
}

export interface IBaseDb {
  /**
   * 查询数据库.
   *
   * @param {string} [sql]
   * @param {[]} [arr]
   * @returns {any}
   * @memberof IBaseDb
   */
  query(sql?: string, arr?: []): any;
  /**
   * 创建数据库或表.
   *
   * @param {string} [sql]
   * @returns {*}
   * @memberof IBaseDb
   */
  create(sql?: string): any
}

export default {
  BaseDb
};


