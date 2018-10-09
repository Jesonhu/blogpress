
import * as fs from 'fs';
import * as path from 'path';
// const fs = require('fs');
// const path = require('path');
import * as Router from 'koa-router';
import { Util } from './util';

// controllers 文件处理
const fileType = (Util.trim(process.env.NODE_ENV) === 'development') ? '.ts' : '.js';

/**
 * 处理 `./controllers`文件夹下的 `*.ts` 文件. 
 */

 // `./controllers` 文件夹下面的所有文件.
let fileArr: Array<string> = [];

// add url-route in /controllers: start
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

// './controller' 文件夹下的文件，子文件夹不做处理
// function addControllers(router: Router, dir: string) {
//     fs.readdirSync(__dirname + '/' + dir).filter((f: any) => {
//         console.log('filter', fileType, f.endsWith(fileType));
//         return f.endsWith(fileType);
//     }).forEach((f: any) => {
//         console.log(`process controller: ${f}...`);
//         let mapping = require(__dirname + '/' + dir + '/' + f);
//         addMapping(router, mapping);
//     });

//     // const Index =  require('./controllers');
//     // addMapping(router, Index);
// }

/**
 * 读取 './controller'文件夹下的所有文件.
 * 如果是文件夹则递归找出文件夹下的文件.
 */
function addControllers(router: Router, dir: string) {
    // 筛选出文件到`fileArr`中
    fileDisplaySync(__dirname + '/' + dir);

    // 筛选出 `.ts` 或 `.js`
    // 引入文件，并编辑控制器
    fileArr.filter((f: any) => {
        return f.endsWith(fileType);
    }).forEach((f: any) => {
        console.log(`process controller: ${f}...`);
        // let mapping = require(__dirname + '/' + dir + '/' + f);
        let mapping = require(f);
        addMapping(router, mapping);
    });
}
// add url-route in /controllers: end

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 * @see [fs.readdir()](http://nodejs.cn/api/fs.html#fs_fs_readdir_path_options_callback)
 * @see https://blog.csdn.net/younglao/article/details/77046830?locationNum=8&fps=1
 */
function fileDisplaySync(filePath: string): void{
    //根据文件路径读取文件，返回文件列表
    const files = fs.readdirSync(filePath);

    //遍历读取到的文件列表
    files.forEach(function(filename){
        //获取当前文件的绝对路径
        const filedir = path.join(filePath,filename);

        const file = fs.statSync(filedir);
        const isFile = file.isFile();
        const isDir = file.isDirectory();

        if (isFile) {
            fileArr.push(filedir)
        }
        if (isDir) {
            // console.log('文件夹', filedir);
            fileDisplaySync(filedir);
        }
    });
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