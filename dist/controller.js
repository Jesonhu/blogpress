"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const Router = require("koa-router");
const util_1 = require("./util");
// controllers 文件处理
const fileType = (util_1.Util.trim(process.env.NODE_ENV) === 'development') ? '.ts' : '.js';
/**
 * 处理 `./controllers`文件夹下的 `*.ts` 文件.
 */
// add url-route in /controllers:
function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        }
        else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        }
        else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        }
        else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        }
        else {
            console.log(`invalid URL: ${url}`);
        }
    }
}
function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        // console.log('filter', fileType, f.endsWith(fileType));
        return f.endsWith(fileType);
    }).forEach((f) => {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    });
    // const Index =  require('./controllers');
    // addMapping(router, Index);
}
/**
 * 去掉字符串两边空白
 *
 * @see [参考](https://www.jb51.net/article/109522.htm)
 */
function trim(str = '') {
    const reg = /(^\s*)|(\s*$)/g;
    return str.replace(reg, '');
}
// module.exports = function (dir) {
//     let controllers_dir = dir || 'controllers';
//     let router = require('koa-router')();
//     addControllers(router, controllers_dir);
//     return router.routes();
// };
function default_1(dir = 'controllers') {
    // let router = require('koa-router')();
    let router = new Router();
    addControllers(router, dir);
    return router.routes();
}
exports.default = default_1;
;
