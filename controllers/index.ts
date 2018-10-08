import { Context } from 'koa';

var fn_index = async (ctx: Context, next: Promise<any>): Promise<void> => {
  ctx.response.body = `<h1>Index</h1>
      <p>RightContent: {name: koa password: 123456}</p>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password" value="123456"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
};

var fn_signin = async (ctx: any, next: Promise<any>) => {
  var
      name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '123456') {
      ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
      ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
};

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
};

// export const controller = {
//   'GET /': fn_index,
//   'POST /signin': fn_signin
// }