"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../../config/mysql");
const fn_login = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.response.body = `<h1>登录</h1>
      <form action="/login/result" method="post">
          <p>姓名: <input name="name" value=""></p>
          <p>密码: <input name="password" type="password" value=""></p>
          <p><input type="submit" value="提交">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="reset" value="重置"></p>
      </form>`;
});
const fn_loginResult = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const name = ctx.request.body.name || '';
    const password = ctx.request.body.password || '';
    // 数据库验证
    const sqlStr = 'SELECT * FROM `user` WHERE username = ?';
    try {
        const resData = yield mysql_1.Mysql(sqlStr, [name]);
        const res = resData;
        if (res.length === 0) {
            ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/login">Try again</a></p>`;
        }
        else {
            if (password === res[0]['password']) {
                ctx.response.body = `<h1>Welcome, ${res[0].username}!</h1>`;
            }
            else {
                ctx.response.body = `<h1>Login failed!--用户和密码不匹配</h1>
          <p><a href="/login">Try again</a></p>`;
            }
        }
    }
    catch (err) {
        console.log(err);
        ctx.response.body = `<h1>Login failed!</h1>
    <p><a href="/login">Try again</a></p>`;
    }
});
module.exports = {
    'GET /login': fn_login,
    'POST /login/result': fn_loginResult
};
