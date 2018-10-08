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
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const controller_1 = require("./controller");
const PORT = 3000;
const app = new Koa();
// log request URL:
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    // @see next() https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000
    yield next();
}));
// parse request body:
app.use(bodyParser());
// add controllers:
app.use(controller_1.default());
app.listen(3000, () => {
    // console.log(`Server run in http://127.0.0.1:${PORT} success, in ${environment} mode.`);
    console.log(`Server run in http://127.0.0.1:${PORT} success, in development mode.`);
});
