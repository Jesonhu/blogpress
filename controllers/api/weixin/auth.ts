/**
 * 微信授权相关
 * 
 * @update 2018/10/09
 */

import { Context } from 'koa';

/** 
 * 微信网页授权控制器.
 */
const fn_wexinWebAuth = async (ctx: Context, next: Promise<any>): Promise<void> => {
  ctx.response.body = `<h1>Hello, api/weixin/auth !</h1>`;
};

module.exports = {
  'GET /api/weixin/auth': fn_wexinWebAuth
};