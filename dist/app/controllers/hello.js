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
/**
 * 欢迎控制器.
 * 处理'/hello/:name'
 */
const fn_hello = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});
module.exports = {
    'GET /hello/:name': fn_hello
};
