"use strict";
/**
 * 微信授权相关
 *
 * @update 2018/10/09
 */
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
 * 微信网页授权控制器.
 */
const fn_wexinWebAuth = (ctx, next) => __awaiter(this, void 0, void 0, function* () {
    ctx.response.body = `<h1>Hello, api/weixin/auth !</h1>`;
});
module.exports = {
    'GET /api/weixin/auth': fn_wexinWebAuth
};
