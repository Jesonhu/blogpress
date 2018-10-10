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
var fn_index = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.response.body = `<h1>Index</h1>
      <p>RightContent: {name: koa password: 123456}</p>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password" value="123456"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});
var fn_signin = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    var name = ctx.request.body.name || '', password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    }
    else {
        ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
    }
});
module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};
// export const controller = {
//   'GET /': fn_index,
//   'POST /signin': fn_signin
// }
