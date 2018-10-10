import { Context } from 'koa';

/** 
 * 欢迎控制器.
 * 处理'/hello/:name'
 */
const fn_hello = async (ctx: Context, next: Promise<any>): Promise<void> => {
  const name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

module.exports = {
  'GET /hello/:name': fn_hello
};