import { Context } from 'koa';
import { Mysql } from '../../config/mysql';

const fn_register = async (ctx: Context, next: Promise<any>): Promise<void> => {
  ctx.response.body = `<h1>注册</h1>
      <p>RightContent: 用户名和密码都不能为空</p>
      <form action="/register/result" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password" value="123456"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
};

const fn_registerResult = async (ctx: any, next: Promise<any>) => {
  const name = ctx.request.body.name || '';
  const password = ctx.request.body.password || '';

  if (name === '' || password === '') {
    ctx.response.body = `<h1>Login failed!--用户或密码不能为空</h1>
    <p><a href="/register">Try again</a></p>`;
  }
  
  try {
    const sqlStrSelect = 'SELECT * FROM `user` WHERE username = ?';
    const sqlInsertUser = 'INSERT INTO `user` (`username`, `pass`) VALUES (?, ?)';
    const resData = await Mysql(sqlStrSelect, [name]);
    const res = resData as Array<any>;

    if (res.length === 0) {
        await Mysql(sqlInsertUser, [name, password]);
        ctx.response.body = `<h1>注册成功, Welcome, ${name}!</h1>`;
    } else { // 已经注册过了
        ctx.response.body = `<h1>Login failed!--已存在相同的用户名</h1>
      <p><a href="/register">Try again</a></p>`;
    }

  } catch(err) {
      console.log(err);
  }
};

module.exports = {
  'GET /register': fn_register,
  'POST /register/result': fn_registerResult
};

// export const controller = {
//   'GET /': fn_index,
//   'POST /signin': fn_signin
// }