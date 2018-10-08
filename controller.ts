
const fs = require('fs');
import * as Router from 'koa-router';

// controllers 文件处理
const fileType = (trim(process.env.NODE_ENV) === 'development') ? '.ts' : '.js';

/**
 * 处理 `./controllers`文件夹下的 `*.ts` 文件. 
 */

// add url-route in /controllers:

function addMapping(router: Router, mapping: any) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('PUT ')) {
            var path = url.substring(4);
            router.put(path, mapping[url]);
            console.log(`register URL mapping: PUT ${path}`);
        } else if (url.startsWith('DELETE ')) {
            var path = url.substring(7);
            router.del(path, mapping[url]);
            console.log(`register URL mapping: DELETE ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(router: Router, dir: string) {
    fs.readdirSync(__dirname + '/' + dir).filter((f: any) => {
        // console.log('filter', fileType, f.endsWith(fileType));
        return f.endsWith(fileType);
    }).forEach((f: any) => {
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
function trim(str: string = ''): string {
    const reg = /(^\s*)|(\s*$)/g;
    return str.replace(reg, '');
}

// module.exports = function (dir) {
//     let controllers_dir = dir || 'controllers';
//     let router = require('koa-router')();
//     addControllers(router, controllers_dir);
//     return router.routes();
// };

export default function (dir = 'controllers') {
    // let router = require('koa-router')();
    let router = new Router();

    addControllers(router, dir);
    return router.routes();
};