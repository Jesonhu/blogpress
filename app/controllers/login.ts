import { Context } from 'koa';
import { Mysql } from '../../config/mysql';

const fn_login = async (ctx: Context, next: Promise<any>): Promise<void> => {
  ctx.response.body = `<h1>登录</h1>
      <form action="/login/result" method="post">
          <p>姓名: <input name="name" value=""></p>
          <p>密码: <input name="password" type="password" value=""></p>
          <p><input type="submit" value="提交">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="重置"></p>
      </form>`;
};

const fn_loginResult = async (ctx: any, next: Promise<any>) => {
  const name = ctx.request.body.name || '';
  const password = ctx.request.body.password || '';

  // 数据库验证
  const sqlStr = 'SELECT * FROM `user` WHERE username = ?';
  try {
    const resData = await Mysql(sqlStr, [name]);
    const res = resData as Array<any>;

    if (res.length === 0) {
      ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/login">Try again</a></p>`;
    } else {
      if (password === res[0]['password']) {
        ctx.response.body = `<h1>Welcome, ${res[0].username}!</h1>`;
      } else {
        ctx.response.body = `<h1>Login failed!--用户和密码不匹配</h1>
          <p><a href="/login">Try again</a></p>`;
      }
    }
    
  } catch(err) {
    console.log(err);
    ctx.response.body = `<h1>Login failed!</h1>
    <p><a href="/login">Try again</a></p>`; 
  }
  
};

module.exports = {
  'GET /login': fn_login,
  'POST /login/result': fn_loginResult
};