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
const fn_register = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.response.body = `<h1>注册</h1>
      <p>RightContent: 用户名和密码都不能为空</p>
      <form action="/register/result" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password" value="123456"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});
const fn_registerResult = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const name = ctx.request.body.name || '';
    const password = ctx.request.body.password || '';
    if (name === '' || password === '') {
        ctx.response.body = `<h1>Login failed!--用户或密码不能为空</h1>
    <p><a href="/register">Try again</a></p>`;
    }
    try {
        const sqlStrSelect = 'SELECT * FROM `user` WHERE username = ?';
        const sqlInsertUser = 'INSERT INTO `user` (`username`, `pass`) VALUES (?, ?)';
        const resData = yield mysql_1.Mysql(sqlStrSelect, [name]);
        const res = resData;
        if (res.length === 0) {
            yield mysql_1.Mysql(sqlInsertUser, [name, password]);
            ctx.response.body = `<h1>注册成功, Welcome, ${name}!</h1>`;
        }
        else { // 已经注册过了
            ctx.response.body = `<h1>Login failed!--已存在相同的用户名</h1>
      <p><a href="/register">Try again</a></p>`;
        }
    }
    catch (err) {
        console.log(err);
    }
});
module.exports = {
    'GET /register': fn_register,
    'POST /register/result': fn_registerResult
};
// export const controller = {
//   'GET /': fn_index,
//   'POST /signin': fn_signin
// }
