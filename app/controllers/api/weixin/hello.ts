/**
 * api Test 相关
 * 
 * @update 2018/10/09
 */

import { Context } from 'koa';

/** 
 * 微信网页授权控制器.
 */
const fn_apiTest = async (ctx: Context, next: any): Promise<void> => {
  let responseName = '你好';
  
  if (ctx.query && ctx.query.name) {
    responseName = ctx.query.name;
  }
  if (ctx.params && ctx.params.name) {
    responseName = ctx.params.name;
  }
  ctx.response.body = {
    msg: responseName
  };
};

module.exports = {
  'GET /api/test': fn_apiTest,
  'GET /api/test/:name': fn_apiTest
};